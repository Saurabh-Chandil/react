import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
        <NavLink to='1'><h2>User 1</h2></NavLink>
        <NavLink to='2'><h2>User 2</h2></NavLink>
        <NavLink to='3'><h2>User 3</h2></NavLink>
        <Outlet />
    </div>
  )
}

export default Users