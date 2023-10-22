import React from 'react';
import './App.css';
import MyButton from './Components/Button';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      {/*<MyButton onClick={()=> alert("Button Clicked")} text="Click Me" /> */}
    </div>
  );
}

export default App;
