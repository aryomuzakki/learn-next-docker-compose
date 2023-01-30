import { NextApiRequest, NextApiResponse } from 'next'

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  const { previewData = {} as any } = req
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  // res.send(req.previewData)

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: previewData ? `/posts/${previewData?.post?.slug}` : "/" })
  res.end()
}
