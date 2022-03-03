import React from 'react'

export const Greet = ({name, children}) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            {children}
        </div>
    )
}
