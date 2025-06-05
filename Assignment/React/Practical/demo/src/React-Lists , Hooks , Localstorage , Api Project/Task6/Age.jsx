import React, { useState } from 'react'

function Age() {
    const [age, setAge] = useState("")
    const [message, setMessage] = useState("")
    
    const checkAge = () => {
        if (age > 18) {
            setMessage("  Eligible To Vote  ")
        } else {
            setMessage("  Not Eligible To Vote  ")
        }
    }
    
    return (
        <div>
            <label>Age:</label>
            <input 
                type="text" 
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={checkAge}>Check</button>
            <p>{message}</p>
        </div>
    )
}

export default Age