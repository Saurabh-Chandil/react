import React, { Component } from 'react';

class EffectOnceClass extends Component {
    constructor(props) {
      super(props)
      this.state = {
        x: 0,
        y: 0         
      }
    }
    logMouseMove = (e) => {
        this.setState({x: e.clientX, y: e.clientY})
    }
    componentDidMount() {
        console.log('componentDidMount');
        window.addEventListener('mousemove', this.logMouseMove)
    }
    
    render() {
        return(
            <div>
                x: {this.state.x}, y: {this.state.y}
            </div>
        ) 
    }
}

export default EffectOnceClass
