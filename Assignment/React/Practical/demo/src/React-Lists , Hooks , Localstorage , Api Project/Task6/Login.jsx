import React, { useState } from 'react'

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    return (
        <div>
            <h1>User Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h1>
            
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>
                    Logout
                </button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>
                    Login
                </button>
            )}
        </div>
    )
}

export default Login