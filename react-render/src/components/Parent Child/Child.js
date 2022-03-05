import React from 'react'

function Child() {
    console.log('Child render')
    return (
    <div>Child</div>
    )
}

// 1. export default React.memo(Child)
// we can also use React.memo to avoid unnecessary re-rendering
export default Child