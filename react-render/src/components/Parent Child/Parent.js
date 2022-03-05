import React, { useState } from 'react'
import Child from './Child'

function Parent({children}) { 
    // 2. pass children as prop to avoid re-rendering
    // as props are immutable.

    const [ count, setCount ] = useState(0)
    console.log('Parent render')
    // If we are updating hook value to same value 
    // after initial render then component will not re-render
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
            <button onClick={() => setCount(0)}>Count to 0</button>
            <button onClick={() => setCount(5)}>Count to 5</button>
            {/* 1. <Child /> */}
            {children} 
            {/* 2.way */}
        </div>
    )
}

export default Parent
