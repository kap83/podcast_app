import React from 'react'
import LogoutBtn from './LogoutBtn'
import ProfilePage from './ProfilePage'

export default function Home() {

  //child component should include favs etcs. and also a 'you don't have any favorites listed, why not search' message
  //search

  return (
    <>
      <LogoutBtn />
      <ProfilePage />
    </>
  )
}
