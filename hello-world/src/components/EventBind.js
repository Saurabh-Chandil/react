import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'hello'
        }
    }

    messageChange = () => {
        this.setState({
            message: 'Hoo'
        })
    }
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.messageChange}>Click</button>
            </div>
        )
    }
}

export default EventBind