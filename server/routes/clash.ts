import express from 'express'
import request from 'superagent'
import checkJwt from '../auth0'
import  { JwtRequest } from '../auth0'
import { getUserById } from '../db/functions/users'

if (process.env.NODE_ENV !== 'production') {
  import('dotenv')
    .then((dotenv) => dotenv.config())
    .catch((err) => {
      console.error('Failed to load dotenv: ', err)
    })
}

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const user = await getUserById(auth0Id as string)
    const response = await request
      .get(`https://api.clashroyale.com/v1/players/%23${user.playerTag}`)
      .set('Authorization', `Bearer ${process.env.CR_API_TOKEN}`)
    res.json(response.body)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router