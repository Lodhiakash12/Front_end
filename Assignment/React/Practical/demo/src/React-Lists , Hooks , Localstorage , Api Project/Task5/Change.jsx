import React, { useState } from 'react'

function Change() {
    const [name, setname] = useState("Notclicked")
    
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setname("Clicked")}>Click me</button>                          
        </div>
    ) 
}

export default Change