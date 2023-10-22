import React from 'react';
import './App.css';
import { CounterProvider } from './Provider/Counter';
import ContextButton from './Components/ContextButton';
import Form from './Components/Form';
import MyButton from './Components/Button';

function App() {
  return (
    <div className="App">
      {/*<Form />*/}
      {/*<MyButton onClick={()=> alert("Button Clicked")} text="Click Me" /> */}
      <CounterProvider>
        <ContextButton />
      </CounterProvider>
    </div>
  );
}

export default App;
