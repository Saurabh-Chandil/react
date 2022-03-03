import React from "react";

export const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Computer</h1>
    //     </div>
    // )
    return React.createElement('div', 
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null, 'Chandil'));
}