import React from 'react';
import './App.css';
import MyButton from './Components/Button';

function App() {
  return (
    <div className="App">
      <MyButton onClick={()=> alert("Button Clicked")} text="Click Me" /> 
    </div>
  );
}

export default App;
