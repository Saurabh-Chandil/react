import React, { Component } from 'react';
import RefsDemoInputComp from './RefsDemoInputComp';

class RefsDemoClassComp extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    
    handleChildFocus = () => {
        this.componentRef.current.focusInput()
    }

    render() {
    return (
        <div>
            <RefsDemoInputComp ref={this.componentRef}/>
            <button onClick={this.handleChildFocus}>Focus Input</button>
        </div>
    ) 
  }
}

export default RefsDemoClassComp;
