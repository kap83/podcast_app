import React, { useState } from 'react'

export default function FrontPage() {

    const [podcasts, setPodcasts] = useState([])

    function handleClick() {
        fetch("/podcasts", {
        })
        .then(res => res.json())
        .then(data => {
            setPodcasts(data)
        })
      }

  return (
    <div>
        <button onClick={handleClick}>TESTING</button>
      <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Rating</th>    
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{podcasts.title}</td>
                <td>{podcasts.primary_genre}</td>
                <td>{podcasts.content_rating}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
