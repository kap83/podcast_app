import React from 'react'
import LogoutBtn from './LogoutBtn'
import {useSelector} from 'react-redux'

export default function Home() {

  //child component should include favs etcs. and also a 'you don't have any favorites listed, why not search' message
  //search

  const user = useSelector(state => state.user.user)

  console.log(user)


  
  return (
    <div>
        <LogoutBtn />
       <h3>hello {user.first_name}!</h3>
    </div>
  )
}
