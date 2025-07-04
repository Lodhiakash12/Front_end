import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './countslice'

function Count() {

    const count = useSelector((state) => state.counter.value)
    console.log(count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>This is COunter</h1>
            <h1>count:{count}</h1>
            <button onClick={() => (dispatch(increment()))}>Increment</button>
            <button onClick={() => (dispatch(decrement()))}>Decrement</button>

        </div>
    )
}

export default Count
