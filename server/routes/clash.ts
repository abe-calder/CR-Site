import express from 'express'
import 'dotenv/config'
import request from 'superagent'
// import { getAuth0Id } from '../db/functions/users'
// import checkJwt, { JwtRequest } from '../auth0'
// import { getUserById } from '../db/functions/users'
// import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await request
      .get(`https://api.clashroyale.com/v1/players/%232RYC9YQCY`)
      .set('Authorization', `Bearer ${process.env.CR_API_TOKEN}`)
    res.json(response.body)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
