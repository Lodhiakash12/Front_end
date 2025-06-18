import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Car from './Pages/Car';
import Contact from './Pages/Contact';
import Feature from './Pages/Feature';
import NotFound from './Pages/Notfound';
import Service from './Pages/Service';
import Test from './Pages/Test';
import Team from './Pages/Team';


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
      </Routes>

       </div>

    </BrowserRouter>
  );
}

export default App;
