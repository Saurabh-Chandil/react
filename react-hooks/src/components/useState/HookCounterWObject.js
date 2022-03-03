import React, { useState } from "react"

function HookCounterWObject() {
    const [ name, setName ] = useState({ firstName: '', lastName: '' })
    return(
        <div>
            <div>
                <input type='text' 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value})}/>
            </div>
            <div>
                <input type='text' 
                value={name.lastName} 
                onChange={e => setName({...name, lastName: e.target.value})}/>
            </div>            
            
            <h2>FirstName is - {name.firstName}</h2>
            <h2>LastName is - {name.lastName}</h2>
        </div>
    )
}

export default HookCounterWObject