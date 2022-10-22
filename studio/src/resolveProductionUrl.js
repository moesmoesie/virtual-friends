// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://www.virtualfriends.dev`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  console.log(previewSecret);
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? "");

  return previewUrl.toString();
}