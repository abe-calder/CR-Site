import connection from '../connection.ts'
import { User, UserData } from '../../../models/users.ts'
const db = connection
const columns = ['playerTag']

export async function getUserById(
  auth0Id: string,
): Promise<UserData> {
  const id = db('users').select('playerTag').where('auth0Id', auth0Id).first()
  return id
}

export async function addUser(
  newUser: User,
): Promise<UserData[]> {
  return db('users')
    .insert(newUser)
    .returning([...columns])
}

export async function getAuth0Id(auth0Id: string): Promise<UserData[]> {
  const id = db('users').select('auth0Id').where(auth0Id)
  console.log(id)
  return id
}