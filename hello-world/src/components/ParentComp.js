import React, { Component } from 'react';
import MemoComp from '../advanced-guides/MemoComp';
import PureComp from '../advanced-guides/PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Saurabh'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Saurabh'
            })
        }, 2000)
    }

    render() {
    console.log('------parent comp render---------');
    return <div>
        Parent Component
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name} />
    </div>
  }
}

export default ParentComp;
