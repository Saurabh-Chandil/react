import React, { Component } from 'react';
import mainHOCCounter from './mainHOCCounter';

class HOCHoverCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        return <div><h2 onMouseOver={incrementCount}>
            {this.props.name} Hover {count} times</h2></div>
    }
}

export default mainHOCCounter(HOCHoverCounter, 5) 
