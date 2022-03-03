import React, { useReducer } from "react"

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'incre first':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decre first':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'incre first by 5':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decre first by 5':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'incre second':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decre second':
            return { ...state, secondCounter: state.secondCounter - action.value }        
        case 'reset':
            return initialState
    }
} 

function UseReducerComplexObj() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return(
        <div>
            <div>
                First Count : {state.firstCounter}
                Second Count : {state.secondCounter}
            </div>
            <button onClick={
                () => dispatch({type: 'incre first', value: 1})}>Increment First</button>
            <button onClick={
                () => dispatch({type: 'decre first', value: 1})}>Decrement First</button>
            <button onClick={
                () => dispatch({type: 'incre first by 5', value: 5})}>Increment First by 5</button>
            <button onClick={
                () => dispatch({type: 'decre first by 5', value: 5})}>Decrement First by 5</button>
            <button onClick={
                () => dispatch({type: 'incre second', value: 1})}>Increment Second</button>
            <button onClick={
                () => dispatch({type: 'decre second', value: 1})}>Decrement Second</button>
            <button onClick={
                () => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerComplexObj