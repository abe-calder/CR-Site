import express from 'express'
import 'dotenv/config'
import request from 'superagent'


const router = express.Router()

router.get('/', async (req, res) => {

    const response = await request
      .get('https://api.clashroyale.com/v1/players/%232RYC9YQCY')
      .set('Authorization', `Bearer ${process.env.CR_API_TOKEN}`)
    res.json(response.body)
})




export default router
