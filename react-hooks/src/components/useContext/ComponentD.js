import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../App'
import ComponentE from './ComponentE'

// This component show use of useContext hook
// There is no change in creation and producer of context.
// Only change is on consumer side.

function ComponentD() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
        {/* <ComponentE /> */}
        Component D
        Use Context Hook
        {user} from {channel}
    </div>
  )
}

export default ComponentD
