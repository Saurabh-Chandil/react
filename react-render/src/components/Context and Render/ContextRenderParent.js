import React, { useState } from 'react'
//import { ChildA } from './ContextRenderChild'
import { MemoizedChildA } from './ContextRenderChild'
export const ParentContext = React.createContext()

// 1. way
// export const ContextRenderParent = () => {
//     const [ count, setCount ] = useState(0)
    
//     console.log('Context Render Parent')
//     return (
//         <div>
//             <button onClick={() =>setCount(c => c + 1)}>Count - {count}</button>
//             <ParentContext.Provider value={{countState: count}}>
//                 {/* <ChildA /> */}
//                 <MemoizedChildA />
//             </ParentContext.Provider>
//         </div>
//     )
// }


// 2. way
export const ContextRenderParent = ({children}) => {
    const [ count, setCount ] = useState(0)
    console.log('Context Render Parent')
    return (
        <div>
            <button onClick={() =>setCount(c => c + 1)}>Count - {count}</button>
            <ParentContext.Provider value={{countState: count}}>
                {/* <ChildA /> */}
                {/* <MemoizedChildA /> */}
                
                {/* passing child as props as props are immutable */}
                {children}
            </ParentContext.Provider>
        </div>
    )
}