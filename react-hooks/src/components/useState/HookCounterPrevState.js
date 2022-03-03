import React, { useState } from "react"

function HookCounterPrevState() {
    const initialCount = 0
    const [ count, setCount ] = useState(0)
    return(
        <div>
            Count: {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default HookCounterPrevState