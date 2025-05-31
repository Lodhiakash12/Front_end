import React from "react";
// import Classcompo from "./Component/Classcompo";
// import Funcompo from "./Component/Funcompo";
// import Hello from "./Jsx/Hello";
// import Css from "./CSS/Css"
// import Mainprops from "./Props/MainProps";
// import Mainstate from "./State/Mainstate";
// import Form from "./Form/Form";
// import Usetable from "./Useeffect/Usetable";
// import Axios from "./Useeffect/Useaxios";
// import Useaxios from "./Useeffect/Useaxios";
// import Usecard from "./Useeffect/Usecard";
import Table from "./Useeffect/Table";
import Footerdata from "./Layout/Common/Footerdata";
import Usecard from "./Useeffect/Usecard";
import Usecart from "./Useeffect/Usecart";
import Muinav from "./Bootstrap/Muinav";
import Mainstate from "./Usecontext/Mainstate";
import Home from "./Layout/Pages/Home";
import Help from "./Layout/Pages/Help";
import About from "./Layout/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import Notfound from "./Layout/Pages/Notfound";


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>hello this App data</h1> */}
        {/* <h1>hello this h1</h1> */}

        {/* Compoennt */}
        {/* <Classcompo /> */}
        {/* {<Funcompo />}
      // {<Hello />}
      // {<Css />} */}
        {/* <Mainprops /> */}
        {/* <Mainstate /> */}
        {/* <Form /> */}
        {/* <Usetable /> */}
        {/* <Useaxios /> */}
        {/* <Table /> */}
        {/* <Footerdata /> */}
        {/* <Usecart /> */}
        {/* <Muinav /> */}

        {/* <Mainstate /> */}
 



        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />


          <Route path="/About" element={<About />} >

            <Route path="About1" element={<About1 />} />
            <Route path="About2" element={<About2 />} />

          </Route>



          {/* ErrorpageK */}

           
           <Route path="*" element={<Notfound />} />





        </Routes>


         
        





      </div></BrowserRouter>
  )
}

export default App;