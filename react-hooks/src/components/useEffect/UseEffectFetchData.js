import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

function UseEffectFetchData() {
    const [ posts, setPosts ] = useState([])
    const [ post, setPost ] = useState({})
    const [ id, setId ] = useState('')
    const showSearchedPost = useRef(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log('posts : ', response.data)
            setPosts(response.data)
        })
        .catch(error => {
            console.log('axios error : ', error)
        })
    }, [])

    const searchPost = () => {
        showSearchedPost.current = true
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log('searched post : ', response.data)
            setPost(response.data)
        })
        .catch(error => {
            console.log('error while searching : ', error)
        })
    }
    return (
        <div>
            <label value={showSearchedPost.current}></label>
            <input type='text' 
            value={id} 
            onChange={e => setId(e.target.value)}/>
            <button onClick={searchPost}>Search</button>
            { showSearchedPost.current && <div key={post.id}>{post.title}</div>}
            { !showSearchedPost.current &&
                <ul>
                    {
                        posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
                </ul>
            }
        </div>
    )
}

export default UseEffectFetchData