// app.jsx
import React from "react";

function App() {
  let counter = 5;

  const handleAddValue = () => {
    counter=counter+1;
  };

  const handleRemoveValue = () => {
    counter=counter-1;
  };

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={handleAddValue}>Add Value</button>
      <br />
      <button onClick={handleRemoveValue}>Remove Value</button>
    </div>
  );
}

export default App;
