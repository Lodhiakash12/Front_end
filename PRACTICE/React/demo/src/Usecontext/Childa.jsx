import React, { createContext, useState } from 'react'
import Childc from './Childc'

 export const data = createContext()

function Childa() {

    const [name, setname] = useState("Karan")

    


    return (


        < div >
            <p>This is A data</p>

            <h1>This is Name:{name}</h1>


            <data.Provider value={{ name, setname }}>

                <Childc />




            </data.Provider>



        </div >
    )
}

export default Childa
