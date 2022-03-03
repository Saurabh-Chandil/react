import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            console.log('action.payload : ', action.payload)
            return {
                loading: false,
                post: action.payload,
                error: ''
            }    
        case 'FETCH_FAIL':
            return {
                loading: false,
                post: {},
                error: action.payload
            }
        default:
            return initialState
    }    
}

function UseReducerFetchDataOne() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log('response : ', response)
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})        
        })
        .catch(error => {
            dispatch({type: 'FETCH_FAIL', payload: 'Something went wrong'})
        })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : ''}
        </div>
    )
}

export default UseReducerFetchDataOne