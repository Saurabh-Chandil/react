import React from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active' 
    return (
        <div>
            <NavLink to='1'><h2>User 1</h2></NavLink>
            <NavLink to='2'><h2>User 2</h2></NavLink>
            <NavLink to='3'><h2>User 3</h2></NavLink>
            <Outlet />

            <div>
                <button
                onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button 
                onClick={() => setSearchParams({ })}>Reset Users</button>
            </div>
            {
                showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
            }
        </div>
    )
}

export default Users