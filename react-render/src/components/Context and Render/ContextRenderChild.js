import React, { useContext } from 'react'
import { ParentContext } from './ContextRenderParent'

export const ChildA = () => {
    console.log('Child A context render')
    return (
        <div>
            Child A
            <ChildB />
        </div>
    )
}

/* If we do console logs then all children will render
even there is useContext in Child C means Child A and Child B
should not re-render. So to overcome this problem just
use React.memo for Child A as Child A is used in Parent Comp.
*/
export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log('Child B context render')
    return (
        <div>
            Child B
            <ChildC />
        </div>
    )
}

export const ChildC = () => {
    const val = useContext(ParentContext)
    console.log('Child C context render')
    return (
        <div>
            Child C - {val.countState}
        </div>
    )
}
