import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Project/Common/Header";
import Home from "./Project/Pages/Home";
import Services from "./Project/Pages/Services";
import About from "./Project/Pages/About";
import Login from "./Project/Pages/Login";
import Contact from "./Project/Pages/Contact";
import Notfound from "./Project/Pages/Notfound";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>

          {/* website */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}  />
             
            
           
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Services" element={<Services />} />

          {/* not found */}
          <Route path="*" element={<Notfound />} />
        </Routes>









      </div></BrowserRouter>
  )
}

export default App;