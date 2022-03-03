import React, { useEffect, useState } from 'react'
import UseDocuTitle from './UseDocuTitle'

function CustomHookUseDocuTitleOne() {
    const [ count, setCount ] = useState(0)
    // useEffect(() => {
    //     document.title = count
    // }, [count])
    UseDocuTitle(count)
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        </div>
    )
}

export default CustomHookUseDocuTitleOne