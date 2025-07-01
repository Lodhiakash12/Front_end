import React from "react";
import Home from "./Website/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Website/Pages/About";
import List from "./Website/Pages/List";
import Type from "./Website/Pages/Type";
import Agent from "./Website/Pages/Agent";
import Test from "./Website/Pages/Test";
import Contact from "./Website/Pages/Contact";
import NotFound from "./Website/Pages/NotFound";
import { ToastContainer } from 'react-toastify';


import Aheader from "./Admin/Acoman/Aheader";
import Dash from "./Admin/Apages/Dash";
import Listmanage from "./Admin/Apages/Listmanage";
import Proadd from "./Admin/Apages/Proadd";
import Agentman from "./Admin/Apages/Agentman";
import Agentadd from "./Admin/Apages/Agentadd";
import Alogin from "./Admin/Apages/Alogin";
import Login from "./Website/Pages/Login";
import Register from "./Website/Pages/Register";
import Editprofile from "./Website/Pages/Editprofile";
import AEditprofile from "./Admin/Apages/AEditprofile";
import AAbout from "./Admin/Apages/AAbout";
import Addpro from "./Website/Pages/Addpro";
import Addtest from "./Website/Pages/Addtest";
import Atesttominy from "./Admin/Apages/Atesttominy";


function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/PropertyList" element={<List />} />
          <Route path="/PropertyType" element={<Type />} />
          <Route path="/PropertyAgent" element={<Agent />} />
          <Route path="/Testimony" element={<Test />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Editprofile" element={<Editprofile />} />
          <Route path="/AdminAbout" element={<AAbout />} />
          <Route path="/Addproperty" element={<Addpro />} />
          <Route path="/Addtestimony" element={<Addtest />} />

          <Route path="*" element={<NotFound />} />

          {/* Admin Routing */}

          <Route path="/dash" element={<Dash />} />
          <Route path="/listmanage" element={<Listmanage />} />
          <Route path="/Proadd" element={<Proadd />} />
          <Route path="/Agentmanage" element={<Agentman />} />
          <Route path="/Addagents" element={<Agentadd />} />
          <Route path="/Alogin" element={<Alogin />} />
          <Route path="/AEditprofile" element={<AEditprofile />} />
           <Route path="/managetestimony" element={<Atesttominy />} />
          



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
