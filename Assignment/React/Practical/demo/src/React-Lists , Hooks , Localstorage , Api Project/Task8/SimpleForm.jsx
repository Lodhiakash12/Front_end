import React, { useState } from 'react'

function SimpleForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }
    
    return (
        <div>
            <h2>Simple Form</h2>
            
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
            <button onClick={handleSubmit}>Submit</button>
            
            {submitted && (
                <div>
                    <h3>Form Data:</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div>
            )}
        </div>
    )
}

export default SimpleForm