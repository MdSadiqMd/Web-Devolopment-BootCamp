// This useState Particular hook is used to Change the value of a variable in N different places in a website
import React, { useState } from "react"; // Here, we are importing useState hook

function App() {
  const [counter, setCounter] = useState(5); // Here, we use the useState hook which returns two values in the array form one the variable and the other the variable updation

  const handleAddValue = () => {
    if(counter<=20){
        setCounter(counter + 1); 
        //(or)
        //counter=counter+1;
        //setCounter(counter);
    } else {
        alert("Exceeded the counter Limit");
    }
  };

  const handleRemoveValue = () => {
    if(counter>=0){
        setCounter(counter - 1); 
        //(or)
        //counter=counter-1;
        //setCounter(counter);
    } else {
        alert("Exceeded the counter Limit");
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={handleAddValue}>Add Value {counter} </button>
      <br />
      <button onClick={handleRemoveValue}>Remove Value {counter} </button>
    </div>
  );
}

export default App;
