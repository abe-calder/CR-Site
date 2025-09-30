import express from 'express'
import request from 'superagent'
import checkJwt from '../auth0'
import { JwtRequest } from '../auth0'
import { getUserById } from '../db/functions/users'
import 'dotenv/config'

if (process.env.NODE_ENV !== 'production') {
  import('dotenv')
    .then((dotenv) => dotenv.config())
    .catch((err) => {
      console.error('Failed to load dotenv: ', err)
    })
}

const CR_API_KEY = process.env.CR_API_KEY

const router2 = express.Router()

router2.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const user = await getUserById(auth0Id as string)
    const response = await request
      .get(
        `https://api.clashroyale.com/v1/players/%23${user.playerTag}/battlelog`,
      )
      .set(
        'Authorization',
        `Bearer ${CR_API_KEY}`,
      )
    res.json(response.body)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router2
