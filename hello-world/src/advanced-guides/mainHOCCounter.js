import React from "react"

const mainHOCCounter = (WrappedComponent, incrementNumber) => {
    // Use cases
    // - connect() in redux
    // - router in react-router
    // - styles in material-ui
    
    return class MainHOCCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
              count: 0     
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }

        render() {
            // pass remaining props with spread operator.
            return(
                <WrappedComponent count={this.state.count}
                incrementCount={this.incrementCount} {... this.props}/>
            )
        }
    }
}

export default mainHOCCounter