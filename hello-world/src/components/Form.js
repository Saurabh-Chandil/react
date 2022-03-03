import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'React'
      }
    }
    
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} put ${this.state.comments} with ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return <div>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} 
            onChange={this.handleUserNameChange} />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} 
            onChange={this.handleCommentsChange} />
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option>React</option>
                <option>Angular</option>
                <option>Vue</option>
            </select>
        </div>
        <button type='submit' onClick={this.handleSubmit}>Submit Form</button>
    </div>
  }
}

export default Form;
