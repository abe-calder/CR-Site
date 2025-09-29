import request from 'superagent'
import { ClashRoyale } from '../../models/ClashRoyale'
import { ClashBattleLog } from '../../models/ClashBattleLog'
import { ClashLeaderboard } from '../../models/ClashLeaderboard'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getClashRoyaleStats(token: string) {
  const response = await request.get(`${rootURL}/clash`).set('Authorization', `Bearer ${token}`)
  return response.body as ClashRoyale
}

export async function getClashRoyaleBattleLog(token: string) {
  const response = await request.get(`${rootURL}/clash/battlelog`).set('Authorization', `Bearer ${token}`)
  return response.body as ClashBattleLog[]
}

export async function getClashLeaderboardLog() {
  const response = await request.get(`${rootURL}/clash/leaderboard`)
  return response.body as ClashLeaderboard
}