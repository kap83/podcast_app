import React from 'react'
import { useDispatch} from 'react-redux'
import {userLogout} from './features/userSlice'
import { useNavigate } from 'react-router-dom'

export default function LogoutBtn() {

    const navigate = useNavigate()

    // eslint-disable-next-line
    const dispatch = useDispatch()

    const handleLogout = () =>  {
        dispatch(userLogout()).then(()=> {
            sessionStorage.removeItem('user')
            navigate('/login')
        })
    }


  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
