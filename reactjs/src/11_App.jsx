import React, { useContext } from "react";
import Counter from "./11_Components/Counter"
import { CounterContext } from "./11_Context/Counter";

// Context API --> Rather than passing a value or a variable through props we create a folder of context and keep values in it (as the name suggests Context API) and use it from it rather falling in prop drilling and These whole Context API and Components are wrapped into Context provider and access the whole at once
function App(){
    const counterState=useContext(CounterContext)
    return(
        <div className="App">
            <h1>Count is {counterState.count}</h1>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}
export default App