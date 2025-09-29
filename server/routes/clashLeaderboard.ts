import express from 'express'
import request from 'superagent'


const router3 = express.Router()


router3.get('/', async (req, res) => {

  const response = await request
    .get('https://api.clashroyale.com/v1/leaderboard/170000005?limit=10')
    .set(
      'Authorization',
      `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhmMWRlNzM0LTY1ODktNDA2MS04NDk2LTYwZGE0M2Q0NGMyNCIsImlhdCI6MTc1OTEyMjcxNiwic3ViIjoiZGV2ZWxvcGVyLzY1YWNjYzVjLTE0YzUtNTA2Ny0xZDY0LTczMTVkYTBiZjI4NSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC4xODguNzEuOTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.vbLxodxvhhx7qpImIuzsN-q4bz-KCQW6MhlfcJJGkR_jz0FvrDB312RilpWp8rPVfEYvCrDuxmF26RdJf53onA`,
    )
  res.json(response.body)
})


export default router3