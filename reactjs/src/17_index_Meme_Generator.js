import React from "react";
import ReactDOM from "react-dom";
import App from "./17_App";
import {BrowserRouter} from "react-router-dom"
// For this project install these dependencies 
// npm i react-bootstrap      
// npm i react-draggable
// npm i react-component-export-image --> To save the generated image

// Steps to use the project
// Click on edit and then Add text and add text on input feild and then double click to h1 and save to download

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);