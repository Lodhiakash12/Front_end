import React from 'react'

function Fruitlist() {
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"]
    
    return (
        <div>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fruitlist