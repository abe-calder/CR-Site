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
        `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhmMWRlNzM0LTY1ODktNDA2MS04NDk2LTYwZGE0M2Q0NGMyNCIsImlhdCI6MTc1OTEyMjcxNiwic3ViIjoiZGV2ZWxvcGVyLzY1YWNjYzVjLTE0YzUtNTA2Ny0xZDY0LTczMTVkYTBiZjI4NSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC4xODguNzEuOTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.vbLxodxvhhx7qpImIuzsN-q4bz-KCQW6MhlfcJJGkR_jz0FvrDB312RilpWp8rPVfEYvCrDuxmF26RdJf53onA`,
      )
    res.json(response.body)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router