import React from 'react'
import {useSelector} from 'react-redux'

export default function ProfilePage() {

    const user = useSelector(state => state.user.user)

    console.log(user)

  return (
    <>
        <h3>hello {user.first_name}!</h3>
        <img src={user.avatar_url} alt='icon' />
    </>
  )
}
