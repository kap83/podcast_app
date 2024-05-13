import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from './features/userSlice'

export default function Login() {

 

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  console.log("password", password)
  console.log("showPassword", showPassword)

  const dispatch = useDispatch();
  const handleLogin= (e) => {
    e.preventDefault()
    
    let userCredentials={
      username, password
    }
    dispatch(userLogin(userCredentials)) 
  }


  return (
    <>
    <form onSubmit={handleLogin}>
      <label>
        USERNAME: 
        <input 
          type='text'
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        PASSWORD: 
        <input 
          type={
            showPassword ? "text" : "password"
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='*********'
        />
      </label>
      <label>
        <input 
          type='checkbox'
          value={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
      </label> see your password
      <br />
      <button>SUBMIT</button>
      <br />
      <p>Don't have an account? Register <button>HERE</button></p>

      </form>
    </>
  )
}
