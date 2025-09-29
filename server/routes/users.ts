import express from 'express'
import { JwtRequest } from '../auth0.ts'
import checkJwt from '../auth0.ts'

import * as db from '../db/functions/users.ts'

const router = express.Router()

// GET /api/v1/users
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const user = await db.getUserById(auth0Id as string)
    res.json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const newUser = req.body
    const auth0Id = req.auth?.sub

    const [user] = await db.addUser({
      ...newUser,
      auth0Id,
    })

    res.json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
