import express from 'express'
import request from 'superagent'
import checkJwt from '../auth0'
import  { JwtRequest } from '../auth0'
import { getUserById } from '../db/functions/users'

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const user = await getUserById(auth0Id as string)
    const response = await request
      .get(`https://api.clashroyale.com/v1/players/%23${user.playerTag}`)
      .set(
        'Authorization',
        `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFiN2ZiNzgzLTQyM2ItNGFmNy1iMWExLWI5ZmM1NGQzMmYxNyIsImlhdCI6MTc1NDg5ODM1Nywic3ViIjoiZGV2ZWxvcGVyLzY1YWNjYzVjLTE0YzUtNTA2Ny0xZDY0LTczMTVkYTBiZjI4NSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyNy4yNTIuODguMTk1Il0sInR5cGUiOiJjbGllbnQifV19.HdMeURFKEJmv14nLVhfS5P6Z73XqkZfwhxsRYNc6N6BGfgbvGxx7O25cYOmGD7KndALQteoXRDPmyEFU7kRorg`,
      )
    res.json(response.body)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router