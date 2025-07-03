import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from './todoslice'

function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {
                    todos && todos.map((todo) => {

                        return (
                            <li key={todo.id}>
                                {todo.text} 
                                <button onClick={() => dispatch(removetodo(todo.id))}>delete</button> 
                                <button>Update</button>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default Todo