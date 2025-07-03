import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from './todoslice'

function Addtodo() {

    const [input, setinput] = useState("")
    const dispatch = useDispatch()

    const todohande = (e) => {
        e.preventDefault()
        dispatch(addtodo(input))
        setinput("")
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={todohande}>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                />
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Addtodo