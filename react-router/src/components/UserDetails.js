import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams()
  return (
    <div>UserDetails - {params.userID}</div>
  )
}

export default UserDetails