import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from './todoslice';

function Todos() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [editingIndex, setEditingIndex] = useState(null);
    const [updatedText, setUpdatedText] = useState('');

    const handleUpdate = (index, currentValue) => {
        setEditingIndex(index);
        setUpdatedText(currentValue);
    };

    const saveUpdate = (index) => {
        dispatch(updateTodo({
            index: index,
            newValue: updatedText
        }));
        setEditingIndex(null);
    };

    const cancelUpdate = () => {
        setEditingIndex(null);
    };

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <input
                                    value={updatedText}
                                    onChange={(e) => setUpdatedText(e.target.value)}
                                />
                                <button onClick={() => saveUpdate(index)}>Save</button>
                                <button onClick={cancelUpdate}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {todo}
                                <button onClick={() => handleUpdate(index, todo)}>Update</button>
                                <button onClick={() => dispatch(removeTodo(index))}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;