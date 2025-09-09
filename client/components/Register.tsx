import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUsers.ts'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Register() {
  const [errorMsg, setErrorMsg] = useState('')
  const { getAccessTokenSilently } = useAuth0()
  const user = useUser()

  const handleMutationSuccess = () => {
    setErrorMsg('')
  }

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      setErrorMsg(error.message)
    } else {
      setErrorMsg('Unknown error')
    }
  }

  const mutationOptions = {
    onSuccess: handleMutationSuccess,
    onError: handleError,
  }

  const navigate = useNavigate()
  const [form, setForm] = useState({
    playerTag: '',
  })

  useEffect(() => {
    if (user.data) navigate('/')
  }, [user.data, navigate])

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    const token = await getAccessTokenSilently()
    evt.preventDefault()
    user.add.mutate({ newUser: form, token }, mutationOptions)
    navigate('/')
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <div>
      <div>
        <IfAuthenticated>
          <h1>
            Enter your Player Tag WITHOUT the # symbol
          </h1>
          <p></p>
          {errorMsg && (
            <div>
              Error: {errorMsg}
              <button onClick={hideError}>Okay</button>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="playerTag">
                Player Tag: 
              </label>
              <input
                type="text"
                id="playerTag"
                name="playerTag"
                value={form.playerTag}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>
                Register
              </button>
            </div>
            <h3>
              The player tag is found in the Clash Royale app under the profile
              section
            </h3>
            <p className="loading-info">
              Please enter the player tag WITHOUT the # symbol
            </p>
            <p className="loading-info">
              The player tag will look something like this:
            </p>
            <p className="loading-info">
              #RCURY2U
            </p>
            <h3>
              If you don&apos;t have a Clash Royale account or player tag go to{' '}
              <br></br>the{' '}
              <a id='normal' href="https://royaleapi.com/">Royale Api Website </a>
              and search for a player and use their tag
            </h3>
          </form>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <h1>Please sign in</h1>
        </IfNotAuthenticated>
      </div>
    </div>
  )
}

export default Register
