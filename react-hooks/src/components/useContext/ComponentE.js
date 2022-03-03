import React from "react"
import { ChannelContext, UserContext } from "../../App"

// This component shows old way of using context
// which has lot of unnecessary nesting.
function ComponentE() {
    return(
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>Component E {user} from {channel}</div> 
                                    }
                                }
                            </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentE