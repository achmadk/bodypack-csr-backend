import express from 'express'
import cors from 'cors'
import boom from 'express-boom'
import { surveysRoutes } from './routes'

const app = express()
const port = process.env.PORT ?? 8080

app.use(cors())
app.use(express.json())
app.use(boom())

app.use('/api/v1/surveys', surveysRoutes)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
