import request from 'superagent'
import { ClashRoyale } from '../../models/ClashRoyale'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getClashRoyaleStats() {
  const response = await request.get(`${rootURL}/clash`)
  return response.body as ClashRoyale
}
