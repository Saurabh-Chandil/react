import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, children } = this.props
        return <div>
            <h1>Welcome {name}</h1>
            {children}
        </div>
    }
}

export default Welcome