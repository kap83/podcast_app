import React, {useState} from 'react'

export default function Login() {

  //add code allowing user to see their password or keep it hidden

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  console.log("password", password)
  console.log("showPassword", showPassword)


  return (
    <>
    <form>
      <label>
        USERNAME: 
        <input 
          type='text'
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
