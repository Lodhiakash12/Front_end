import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Read from "./components/Read"
import Create from "./components/Create"
import Update from "./components/Update"

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<Read />} />
            <Route path='/add' element={<Create />} />
            <Route path='/update' element={<Update />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
