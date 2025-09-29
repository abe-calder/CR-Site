import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import clash from './routes/clash.ts'
import clashBattleLog from './routes/clashBattlelog.ts'
import clashLeaderboard from './routes/clashLeaderboard.ts'
import userRoutes from './routes/users.ts'

if (process.env.NODE_ENV !== 'production') {
  import('dotenv')
    .then((dotenv) => dotenv.config())
    .catch((err) => {
      console.error('Failed to load dotenv: ', err)
    })
}

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/clash', clash)
server.use('/api/v1/clash/battlelog', clashBattleLog)
server.use('/api/v1/clash/leaderboard', clashLeaderboard)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
