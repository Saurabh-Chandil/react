import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        userId: '',
        title: '',
        body:''     
      }
    }
    
    formSubmitHandler = (e) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log('Post success res :', response)
        })
        .catch(error => {
            console.log('Error from api : ', error)
        })
        e.preventDefault()
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { userId, title, body } = this.state
        return <div>
            <form onSubmit={this.formSubmitHandler}>
                <div>User ID : 
                    <input type="text" value={userId} name='userId' onChange={this.handleChange} /></div>
                <div>Title : 
                    <input type="text" value={title} name='title' onChange={this.handleChange}/></div>
                <div>Body : 
                    <input type="text" value={body} name='body' onChange={this.handleChange}/></div>
                <button type='submit'>Submit Form</button>
            </form>
        </div>
    }
}

export default PostForm;
