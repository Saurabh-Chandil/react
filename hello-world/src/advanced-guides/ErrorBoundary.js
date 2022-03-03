import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hasError: false     
      }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error) {
        console.log(`Error : ${error}`)
    }

    render() {
    return (
        this.state.hasError ? <h1>Some issue</h1> : this.props.children 
    )
  }
}

export default ErrorBoundary;
