import React, { Component } from "react"
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Saurabh'
        }
        console.log('LifeCycle A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycle A shouldComponentUpdate')
        return true;
    }

    componentDidUpdate() {
        console.log('LifeCycle A componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Reacting'
        })
    }

    componentWillUnmount() {
        console.log('LifeCycle A componentWillUnmount');
    }

    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA