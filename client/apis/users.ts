import request from 'superagent'
import { User, UserData } from '../../models/users.ts'
import logError from './util.ts'


const rootURL = new URL(`/api/v1`, document.baseURI)

interface GetUserFunction {
  token: string
}

export async function getUser({
  token,
}: GetUserFunction): Promise<User | null> {
  return await request
    .get(`${rootURL}/users`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => (res.body.user ? res.body.user : null))
    .catch(logError)
}

interface AddUserFunction {
  newUser: UserData
  token: string
}

export async function addUser({
  newUser,
  token,
}: AddUserFunction): Promise<User> {
  return request
    .post(`${rootURL}/users`)
    .set('Authorization', `Bearer ${token}`)
    .send(newUser)
    .then((res) => res.body.user)
    .catch(logError)
}