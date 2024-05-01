import React, {useState} from 'react'

export default function Login() {

  //add code so user allowing user to see their password or keep it hidden

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
          type='password'
          placeholder='*********'
        />
      </label>
      <button>SUBMIT</button>
      <br />
      <p>Don't have an account? Register <button>here</button></p>

      </form>
    </>
  )
}
