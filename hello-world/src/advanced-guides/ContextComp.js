import React from 'react';
import UserContext from './userContext';

function ContextComp() {
  return (
      <UserContext.Consumer>
          {(userContext) => {
                return <div> Hello {userContext.name} </div>
            }}
      </UserContext.Consumer>
  )
}

export default ContextComp
