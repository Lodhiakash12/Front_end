import React,{use, useState} from 'react'
import Image from './Image'


function Funobject() {

    const[data,setdata]=useState({
        name:"Aakash",
        count:0,
        age:0,
        isimage:true
    })
 console.log(data.name)

 const increment=()=>setdata({
    ...data,count:data.count+1
 })


  return (
    <div>

        <h1>Name:{data.name}</h1>
        <button onClick={()=>setdata({...data,name:"Aniket"})}>Change</button>
        <button onClick={()=>setdata({...data,name:"Harsh"})}>Change</button>


        <h1>Count:{data.count}</h1>
        <button onClick={()=>setdata({...data,count:data.count+2})}> Increment+2</button>
        <button onClick={increment}>increment</button>
        <button onClick={()=>setdata({...data,count:data.count-2})}> Decrement-2</button>

        <br /> <br />

        <h1>Age:{data.age}</h1>
        <button onClick={()=>setdata({...data,age:data.age+1})}>increase</button>

        <br /> <br />

        <button onClick={()=>setdata({...data,isimage:false})}> Hide</button>
        <button  onClick={()=>setdata({...data,isimage:true})}> Show</button>
        <button onClick={()=>setdata({...data,isimage:!data.isimage})}> Toogle</button>



        {
            (data.isimage)? <Image />:false
        }
      
    </div>
  )
}

export default Funobject
