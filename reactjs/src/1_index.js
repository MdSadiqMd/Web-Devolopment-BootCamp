import React from "react";
import ReactDOM from "react-dom/client";

function HelloWorld() { // This is a Componenent in React
                        // --> The Componenet should start with Capital Letter
                        // --> The Componenet should return "jsx" only
    return <h1>Hello From Component</h1>;
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);