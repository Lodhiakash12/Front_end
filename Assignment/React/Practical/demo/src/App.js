import React from "react";
// import Counter from "./React-Lists , Hooks , Localstorage , Api Project/Task10/Counter";
// import Change from "./React-Lists , Hooks , Localstorage , Api Project/Task5/Change";
// import Dynamic from "./React-Lists , Hooks , Localstorage , Api Project/Task5/Dynamic";
// import Home from "./React -Advance React- Styling , Routing/Task 11/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BakersNation from "./React-contextApi/common/BakersNation";
// import About from "./React -Advance React- Styling , Routing/Task 11/Pages/About";
// import Contact from "./React -Advance React- Styling , Routing/Task 11/Pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <div>
        <BakersNation/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;