import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputNameRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (elem) => {
            this.cbRef = elem
        }
    }
    componentDidMount() {
        if(this.cbRef != null) this.cbRef.focus()
        // this.inputNameRef.current.focus()
        // console.log(this.inputNameRef);
    }

    clickHandler = () => {
        alert(`Text value is ${this.inputNameRef.current.value}`)
    }
    render() {
        return <div>
            <input type="text" ref={this.inputNameRef}/>
            <input type="text" ref={this.cbRef}/>
            <button onClick={this.clickHandler}>Click</button>
        </div>
    }
}

export default RefsDemo;
