import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

if (!process.env.SANITY_API_TOKEN) {
  throw new Error("SANITY_API_TOKEN is not set");
}

export async function GET(request: Request) {
  draftMode().enable();

  const res = new NextResponse("Draft mode is enabled");

  res.cookies.set("token", process.env.SANITY_API_TOKEN!, {
    maxAge: 60 * 60,
    sameSite: "strict",
  });
  return res;
}
