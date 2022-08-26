import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if (req.query.secret !== 'SECRET' || !req.query.slug) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    const slug = req.query.slug as string
    res.setPreviewData({})

    res.redirect(slug)
}
