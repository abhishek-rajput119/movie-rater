import React, { useEffect, useState } from 'react'
import { API } from '../ApiService'
import { useCookies } from 'react-cookie'
function Auth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['mr-token'])
  const [isLoginView, setIsLoginView] = useState(true)
  const isDisabled = username.length === 0 || password.length === 0

  useEffect(() => {
    if (token['mr-token']) {
      window.location.href = '/movies'
    }
  }, [token])
  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value)
  }

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value)
  }

  const loginClicked = () => {
    API.loginUser({ username, password })
      .then((resp) => {
        if (resp.token) setToken('mr-token', resp.token)
      })
      .catch((error) => console.log(error))
  }
  const registerClicked = () => {
    API.registerUser({ username, password })
      .then((resp) => loginClicked())
      .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        {isLoginView ? <h1>LOGIN</h1> : <h1>REGISTER</h1>}
      </header>
      <div className="login-container">
        <label htmlFor="username">Username</label>
        <br />
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        {isLoginView ? (
          <button onClick={loginClicked} disabled={isDisabled}>
            Login
          </button>
        ) : (
          <button onClick={registerClicked} disabled={isDisabled}>
            Register
          </button>
        )}
        {isLoginView ? (
          <p onClick={() => setIsLoginView(false)}>
            Don't have account Register here!
          </p>
        ) : (
          <p onClick={() => setIsLoginView(true)}>
            Already have an account Login here!
          </p>
        )}
      </div>
    </div>
  )
}

export default Auth
