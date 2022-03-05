import React from 'react'

export const ChildOne = ({name, children}) => {
    console.log('ChildOne Render - incorrect memo with children')
    return (
        <div>
            {children} {name}
        </div>
    )
}

export const MemoizedChildOne = React.memo(ChildOne)
