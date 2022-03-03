import React, { Component } from 'react';
import mainHOCCounter from './mainHOCCounter';

class HOCClickCounter extends Component {
    
    render() {
        const { count, incrementCount } = this.props
        return <button onClick={incrementCount}>
            {this.props.name} Clicked {count} times</button>
        
    }
}

export default mainHOCCounter(HOCClickCounter, 2) 
