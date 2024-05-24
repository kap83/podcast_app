import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from './features/userSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  //console.log("password", password)
  //console.log("showPassword", showPassword)

  const {loading, error} = useSelector((state) => state.user)

  const test = useSelector((state) => state.user.user)

  console.log("state", test)



  const dispatch = useDispatch();
  const handleLogin= (e) => {
    e.preventDefault()
    
    let userCredentials={
      username, password
    }
    dispatch(userLogin(userCredentials)).then((result)=> {
      if(userLogin.fulfilled.match(result)){
        console.log('Login successful', result.payload);
        setUsername('');
        setPassword('');
        navigate('/')
      }
      else {
        console.log('login failed', result.payload)
      }
    }) 
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
      <button>
        {loading ? 'Loading...' : 'Login'} </button>
        {error&&(
          <div>{error}</div>
        )}
      <br />
      <p>Don't have an account? Register <button>Here</button></p>

      </form>
    </>
  )
}
