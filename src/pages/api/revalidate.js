// pages/api/revalidate.js

export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body?.slug) {
    return res.status(402).json({ message: "No slug provided" });
  }

  console.log(req.body?.slug);

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(req.body.slug);
    return res.json({ revalidated: true, slug: req.body.slug });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
