import express from 'express'
import request from 'superagent'
if (process.env.NODE_ENV !== 'production') {
  import('dotenv')
    .then((dotenv) => dotenv.config())
    .catch((err) => {
      console.error('Failed to load dotenv: ', err)
    })
}

const router = express.Router()

router.get('/', async (req, res) => {

    const response = await request
      .get('https://api.clashroyale.com/v1/players/%232RYC9YQCY')
      .set('Authorization', `Bearer ${process.env.CR_API_TOKEN}`)
    res.json(response.body)
})

export default router
