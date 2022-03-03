import React, { useEffect, useRef, useState } from 'react'

function UseRefHookCounter() {
    const [ counter, setCounter ] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])    

    return (
    <div>
        Counter - {counter}
        {/* Now to clear interval we can't call 
        clearInterval(interval) as interval is not accessible outside useEffect 
        So we have to use useRef*/}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear counter</button>
    </div>
    )
}

export default UseRefHookCounter