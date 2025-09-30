import express from 'express'
import request from 'superagent'
import 'dotenv/config'

if (process.env.NODE_ENV !== 'production') {
  import('dotenv')
    .then((dotenv) => dotenv.config())
    .catch((err) => {
      console.error('Failed to load dotenv: ', err)
    })
}

const CR_API_KEY = process.env.CR_API_KEY

const router3 = express.Router()


router3.get('/', async (req, res) => {

  const response = await request
    .get('https://api.clashroyale.com/v1/leaderboard/170000005?limit=10')
    .set(
      'Authorization',
      `Bearer ${CR_API_KEY}`,
    )
  res.json(response.body)
})


export default router3