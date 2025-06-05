import React, { useState } from 'react'
 

function Dynamic() {


    const [name, setname] = useState("Aakash")
    const [count, setcount] = useState(0)
    






    return (
        <div>

            <h1> hello:{name}
            </h1>

            <button onClick={()=>setname("Aniket")}>Change</button>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>
            <button onClick={()=>setcount(count+2)}>Increment+2</button>
            <button onClick={()=>setcount(count-2)}>Decrement-2</button>
            <button onClick={()=>setcount(0)}>Reset</button>
            <h1>Count:{count}</h1>

            



           
        </div>
    )
}

export default Dynamic



