import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Read from "./components/Read"
import Create from "./components/Create"
import Update from "./components/Update"
import Anab from "./components/ADMIN/common/Anab"

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


            {/* admin */}
            <Route path='/nav' element={<Anab />} />

          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
