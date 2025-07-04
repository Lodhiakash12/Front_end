import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



function Todos() {
    const todos = useSelector((state) => state.todo.todos)
    console.log(todos)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                {
                    todos && todos.map((todo, index) => {
                        return (
                            <li>{todo}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Todos
