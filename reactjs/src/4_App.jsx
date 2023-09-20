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

        // Interview Question
        // If assume we have multiple counters like
        /*setCounter(counter + 1); 
        setCounter(counter + 1); 
        setCounter(counter + 1);*/ // The output will be same as all the methods are calling the same counter

        // For updating the counter value with same function we create a series/bundle of callbacks
        /*setCounter(counter => counter+1);
        setCounter(counter => counter+1);
        setCounter(counter => counter+1);
        setCounter(counter => counter+1);*/
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

// UseEffect hook --> Used to Introduce effects at N different places in the website
/*
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // The empty dependency array means this effect runs once on component mount.

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
*/

// useContext -->It allows access to the context created by React.createContext, providing a way to share values across the component tree
/*
import React, { useContext } from "react";

const MyContext = React.createContext();

function ParentComponent() {
  return (
    <MyContext.Provider value="Hello from Context">
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}
*/

// useReducer --> Alternate to useState where more logics are handled use Switch case Statements
/*
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
*/
