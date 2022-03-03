import React, { useEffect, useState } from "react"

function UseEffectOnceFunc() {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logMousePosition = (e) => {
        console.log('loggging')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useeffect once');
        window.addEventListener('mousemove', logMousePosition)
        
        // cleanup after component unmount
        return () => {
            console.log('Unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} - Y {y}
        </div>
    )
}

export default UseEffectOnceFunc