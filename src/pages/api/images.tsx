import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req.query

  await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${query}&orientation=landscape&per_page=12&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  )
    .then(response => {
      return response.json()
    })
    .then(response => {
      const result = response.results.map(({ urls }) => urls.regular)
      res.status(200).json(result)
    })
    .catch(error => {
      res.status(200).json([])
    })
}
