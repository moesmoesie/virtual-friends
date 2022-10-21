import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (!req.cookies.get("ph_YOUR_API_KEY_posthog")) return;

  const userID = JSON.parse(
    req.cookies.get("ph_YOUR_API_KEY_posthog")
  )?.distinct_id;

  if (!userID) {
    return;
  }

  const alternatives = await getAlternatives(
    `*[_type == "home" %26%26 defined(ab)]{slug,ab}`
  );

  if (alternatives == undefined || alternatives.length == 0) return;

  const flags = await getFeatureFlags(userID);

  if (flags == undefined || flags.length == 0) return;

  for (let i = 0; i < alternatives.length; i += 1) {
    const el = alternatives[i];
    if (flags[el.ab]) {
      url.pathname = el.slug.current;
      return NextResponse.rewrite(url);
    }
  }
}

export const config = {
  matcher: ["/((?!api|static|favicon.ico|_next|fonts).*)"],
};

const getAlternatives = async (query: string) => {
  const url = new URL(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-06-07/data/query/production`
  );

  url.searchParams.append("query", query);
  const sanityData = await fetch(url);
  const sanityJson: any = await sanityData.json();
  return sanityJson.result;
};

const getFeatureFlags = async (userID: string) => {
  let data = await fetch("https://app.posthog.com/decide?v=2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: process.env.NEXT_PUBLIC_POSTHOG,
      distinct_id: userID,
    }),
  });

  const featureData = await data.json();
  return featureData?.featureFlags ?? [];
};
