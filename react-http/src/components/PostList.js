import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        posts: []       
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            this.setState({
                posts: res.data
            })
        }).catch(error => { console.log(error); })
    }
    
    render() {
        return (
            <div>
                List of posts
                { this.state.posts.length ? 
                this.state.posts.map(post => <div key={post.id}> {post.id} </div>) : null 
                }
            </div>
        )
    }
}

export default PostList
