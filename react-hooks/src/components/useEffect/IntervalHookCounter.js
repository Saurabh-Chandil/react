import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [ count, setCount ] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        // cleanup
        return () => {
            clearInterval(interval)
        }
    }, []) // Either put in dependency array or 
    // use prevCount => prevCount + 1
    
    return (
        <div>{count}</div>
    )
}

export default IntervalHookCounter