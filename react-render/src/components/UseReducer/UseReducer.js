import React, { useReducer } from 'react'

export const UseReducer = () => {
    const initialState = {
        count: 0
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'incre':
                return {count: state.count + action.payload}
            case 'decre':
                return {count: state.count - action.payload}
            case 'reset':
                return initialState
        }
    }
    const [ state, dispatch ] = useReducer(reducer, initialState)
    console.log('UseReducer rendered')
    return (
        <div>
            <button 
            onClick={() => dispatch({type: 'incre', payload: 1})}>Increment Count - {state.count}</button>
            <button
            onClick={() => dispatch({type: 'decre', payload: 1})}>Decrement Count - {state.count}</button>
            <button
            onClick={() => dispatch({type: 'reset'})}>Reset Count - {state.count}</button>
        </div>
    )
}
