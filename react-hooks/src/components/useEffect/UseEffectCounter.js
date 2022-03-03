import React, { useEffect, useState } from 'react'

function UseEffectCounter() {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('')
    useEffect(() => {
        console.log('Use Effect Updating');
        document.title = `Clicked ${count} times`
    }, [count]) // conditionally running an effect.
    return (
        <div>
            <input type='text' 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>

            <button onClick={() => 
                setCount(prevCount => {
                    return setCount(prevCount + 1)
                })}>Count {count} times</button>
        </div>
    )
}

export default UseEffectCounter
