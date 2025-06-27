import React from 'react'
import Aheader from '../Acoman/Aheader'
import Navdata from '../Acoman/Navdata'

function Dashboard() {
  return (
    <div>
        <Aheader />
        <Navdata title="Dashboard" name="Dashboard" />
        <h1 className='text-center'>This is Admin Dashboard !....</h1>
      
    </div>
  )
}

export default Dashboard
