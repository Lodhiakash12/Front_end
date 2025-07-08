import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './todoslice';

function Addtodo() {

    const [form, setform] = useState("");
    const dispatch = useDispatch()

    const getdata = (e) => {
        e.preventDefault();

        dispatch(addTodo(form))
        
        setform("")
    }









    return (
        <div>
            <form action="">
                <input value={form} onChange={(e) => setform(e.target.value)} type="text" name="" id="" />
                <button onClick={getdata}>Add</button>
            </form>

        </div>
    )
}

export default Addtodo
