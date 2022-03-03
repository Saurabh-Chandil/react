import React, { useReducer } from "react"

const initialState = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducerCounter() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {state}
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerCounter