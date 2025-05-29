import React from 'react'
import Header from '../Common/Header'
 
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>


      <Header />

      <br />
      <br />


      <h1>This is About</h1>


      <div className='container'>
        <Link to="About1" >About 1</Link>
      <Link to="About2" >About 2</Link>
      </div>
      <Outlet />








    </div>
  )
}

export default About
