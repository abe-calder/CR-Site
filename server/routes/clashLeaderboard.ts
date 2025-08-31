import express from 'express'
import 'dotenv/config'
import request from 'superagent'


const router3 = express.Router()

router3.get('/', async (req, res) => {

  const response = await request
    .get('https://api.clashroyale.com/v1/leaderboard/170000005?limit=10')
    .set('Authorization', `Bearer ${process.env.CR_API_TOKEN}`)
  res.json(response.body)
})


export default router3