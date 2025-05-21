import React, { useState } from 'react'
import Image from './Image'

function FuncState() {


    const [name, setname] = useState("Aakash")
    const [count, setcount] = useState(0)
    const [isimage, setisimage] = useState(true)






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

            <button className='btn btn-primary' onClick={()=>setisimage(false)}>Hide</button>
            <button className='btn btn-success' onClick={()=>setisimage(true)}>Show</button>
            <button className='btn btn-danger' onClick={()=>setisimage(!isimage)}>toogle</button>



            {
                (isimage)? <Image />:false
            }

        </div>
    )
}

export default FuncState



