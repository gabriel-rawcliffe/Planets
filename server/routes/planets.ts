import express from 'express'

import { getPlanet } from '../../client/apis/apiClient.ts'

const router = express.Router()

router.get('/planetdetails', async (req, res) => {
  const planets = await getPlanet()

  res.json(planets)
})

export default router
