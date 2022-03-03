import React, { useState } from 'react'
import UseEffectOnceFunc from './UseEffectOnceFunc'

// Check useEffect of UseEffectOnceFunc for cleanup
function UseEffectCleanUp() {
    const [ display, setDisplay ] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            { display && <UseEffectOnceFunc /> }
        </div>
    )
}

export default UseEffectCleanUp 
