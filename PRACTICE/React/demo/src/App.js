import React from "react";
import Classcompo from "./Component/Classcompo";
import Funcompo from "./Component/Funcompo";
import Hello from "./Jsx/Hello";
import Css from "./CSS/Css"


function App() {
  return (
    <div>
      <h1>hello this App data</h1>
      {/* <h1>hello this h1</h1> */}

      {/* Compoennt */}
      {/* <Classcompo /> */}
      {<Funcompo />}
      {<Hello />}
      {<Css />}


    </div>
  )
}

export default App;