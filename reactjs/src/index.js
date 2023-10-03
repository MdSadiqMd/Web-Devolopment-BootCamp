import React from "react";
import ReactDOM from "react-dom";
import App from "./11_App";
import { CounterProvider } from "./11_Context/Counter";

ReactDOM.render(
    <React.StrictMode>
      <CounterProvider>
        <App />
      </CounterProvider>
    </React.StrictMode>,
    document.getElementById('root')
);