import React from "react";
import Todo from "./slices/todo/Todo";
import Addtodo from "./slices/todo/Addtodo";

function App() {
  return (
    <div className="App">
      <h1>This is React Redux</h1>
      <Addtodo/>
      <Todo/>
    </div>
  );
}

export default App;
