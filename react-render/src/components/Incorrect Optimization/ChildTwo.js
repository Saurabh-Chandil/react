import React from 'react'

export const ChildTwo = ({name}) => {
    console.log('ChildTwo Render - incorrect memo with impure component')
    return (
        <div>
            Hello {name}
            -- Its currently {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}
        </div>
    )
}

export const MemoizedChildTwo = React.memo(ChildTwo)
