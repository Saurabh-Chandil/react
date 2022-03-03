import React, { Component } from "react"

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Saurabh'
        }
        console.log('LifeCycle B constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycle B componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycle B shouldComponentUpdate')
        return true;
    }

    componentDidUpdate() {
        console.log('LifeCycle B componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('LifeCycle B componentWillUnmount');
    }

    render() {
        console.log('LifeCycle B render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB