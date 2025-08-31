import connection from './connection.ts'
import { ClashRoyale } from '../../models/ClashRoyale.ts'

const db = connection

export async function getAllCards(): Promise<ClashRoyale[]> {
  return db('player_stats').select()
}