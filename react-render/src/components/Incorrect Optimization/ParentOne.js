import React, { useCallback, useMemo, useState } from 'react'
import { MemoizedChildOne } from './ChildOne'
import { MemoizedChildThree } from './ChildThree'
import { MemoizedChildTwo } from './ChildTwo'

export const ParentOne = () => {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('Saurabh')

    const person = {
        fname: 'Will',
        lname: 'Smith'
    }
    const handleClick = () => {
        console.log('parent handleclick')
    }

    /* To solve problem of memoization 
    related to object and function reference we will
    pass memoized version of object and useCallback for function */
    
    const memoizedPerson = useMemo(() => person, [])
    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentOne Render')
    return (
        <div>
            <button
            onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button
            onClick={() => setName('Chandil')}>Change name</button>
            
            {/* incorrect usage of memo with children
            - if simple text is passed then memoization works but 
            if some child component passed like <h1>Hello</h1> then
            memoization will fail means even if we do not change name
            then child component re-renders which should not happen.
            This is happening because in child component the props.children
            will always create a new reference which forces child component to re-render
            
            Summary : No need to wrap child component with React.memo if children component itself
            has children component as props.
            */}
            {/* <MemoizedChildOne name={name}> */}
                {/* Hello */}
                {/* <h1>Hello</h1> */}
            {/* </MemoizedChildOne> */}



            {/* incorrect memo with impure component 
            We are not changing name but if we are changing 
            count then UI is updating and time(present in child compo) 
            should also get updated but it is not happening
            and it will not happen*/}
            {/* <MemoizedChildTwo name={name}/> */}


            {/* incorrect memo with props reference  
            Even if we are not changing name and only changing count
            then also child compo re-renders that is not good.
            It is happening because every time parent compo re-renders 
            the person object re-created with diff reference.
            And we are passing this person object as props so child compo
            also re-render unnecessarily. Same case if we pass function
            as a prop to child component.*/}
            {/* <MemoizedChildThree handleClick={handleClick} name={name} person={person} /> */}
    
    
    
            {/* To solve above problem we will use memoized version of
            object and function call  */}
            <MemoizedChildThree handleClick={memoizedHandleClick} name={name} person={memoizedPerson} />
        </div>
    )
}
