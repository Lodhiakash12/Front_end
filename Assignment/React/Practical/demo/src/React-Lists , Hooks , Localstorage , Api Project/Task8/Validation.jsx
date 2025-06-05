import React, { useState } from 'react'

function Validation() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    
    const validateForm = () => {
        const newErrors = {}
        
        if (!name.trim()) {
            newErrors.name = "Name is required"
        }
        
        if (!email.trim()) {
            newErrors.email = "Email is required"
        } else if (!email.includes("@") || !email.includes(".")) {
            newErrors.email = "Please enter a valid email"
        }
        
        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }
        
        return newErrors
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm()
        setErrors(formErrors)
        
        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true)
        } else {
            setSubmitted(false)
        }
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
                {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            </div>
            
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>
            
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
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

export default Validation