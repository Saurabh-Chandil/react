import { useEffect } from 'react'

function UseDocuTitle(count) {
    useEffect(() => {
        document.title = count
    }, [count])
}

export default UseDocuTitle