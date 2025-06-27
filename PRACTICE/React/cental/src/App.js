import React from 'react';
import Home from './website/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './website/Pages/About';
import Blog from './website/Pages/Blog';
import Car from './website/Pages/Car';
import Contact from './website/Pages/Contact';
import Feature from './website/Pages/Feature';
import NotFound from './website/Pages/Notfound';
import Service from './website/Pages/Service';
import Test from './website/Pages/Test';
import Team from './website/Pages/Team';
import Dashboard from './Admin/Apages/Dashboard';
import Blogmanage from './Admin/Apages/Blogmanage';
import Blogadd from './Admin/Apages/Blogadd';


function App() {
  return (
    <BrowserRouter>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Team" element={<Team />} />




          {/* Admin */}
          <Route path="/Dash" element={<Dashboard />} />
          <Route path="/blogmanage" element={<Blogmanage />} />
          <Route path="/blogadd" element={<Blogadd />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
