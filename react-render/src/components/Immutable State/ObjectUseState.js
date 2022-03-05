import React, { useState } from 'react'

export const ObjectUseState = () => {
    const initialState = {
        fname: 'Saurabh',
        lname: 'Chandil'
    }
    const [ person, setPerson ] = useState(initialState)
    const changeName = () => {
        setPerson({
            fname: 'Tom',
            lname: 'Cruise'
        })
    }
    console.log('Object Use state render')
    return (
        <div>
            <button
            onClick={changeName}>Change name - {person.fname} - {person.lname}</button>
        </div>
    )
}
