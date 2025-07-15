// src/App.jsx
import React from 'react';
import MyState from './context/MyState'; // Import the default export
import Home from './pages/Home/Home';
function App() {
  return (
    <MyState>  {/* Use the provider component directly */}
       
      <h1>This is Fire Store</h1>
      <Home />
    </MyState>
  );
}

export default App;