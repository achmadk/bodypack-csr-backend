import { Router } from 'express'

import { surveySchema } from '../../resources'

const router = Router()

router.post('/', async (req, res) => {
  try {
    await surveySchema.validateAsync(req.body)
    res.json({ meta: { code: 200 } })
  } catch (error) {
    res.boom.badRequest('bad request form detected!!!', error)
  }
})

export const surveysRoutes = router
