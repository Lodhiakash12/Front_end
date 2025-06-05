import React from 'react'
import Classprops from './Classprops'
import Counter from './Counter'

function Mainprops() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <Classprops name="Aakash" age="20" location="Ahmedabad " />
                <Classprops name="Aakash" age="20" location="Ahmedabad " />
                <Classprops name="Aakash" age="20" location="Ahmedabad " />
                <Classprops name="Aakash" age="20" location="Ahmedabad " />
                <Classprops name="Aakash" age="20" location="Ahmedabad " />
                <Classprops name="Aakash" age="20" location="Ahmedabad " />
                <Classprops />
            </div>

        </div>

        <Counter />


      
    </div>
  )
}

export default Mainprops
