import React from 'react'

export const ChildThree = ({handleClick, name, person}) => {
    console.log('ChildThree render')
    return (
    <div>
        Hello {name} - {person.fname} {person.lname}
        <button onClick={handleClick}>Child button</button>
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)
