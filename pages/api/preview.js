if(!process.env.PREVIEW_SECRET_TOKEN){
  throw("Please provide the preview token!")
}

export default async function preview(req, res) {
  const { slug = "" } = req.query;
 
  if (req.query.secret !== process.env.PREVIEW_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
 
  res.setPreviewData({});
 
  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) =>
      cookie.replace("SameSite=Lax", "SameSite=None;Secure")
    )
  );
 
  // Redirect to the path from entry
  res.redirect(`/${slug}`);
}