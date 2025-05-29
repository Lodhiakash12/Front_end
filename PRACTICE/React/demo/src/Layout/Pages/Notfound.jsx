import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'

function Notfound() {


    const redirect = useNavigate()

     const back=()=>{
        redirect("/")
     }

  return (
    <div>

        <h1>404 NOT FOUND</h1>


       



        <button  onClick={back}>Home</button>




      
    </div>
  )
}

export default Notfound
