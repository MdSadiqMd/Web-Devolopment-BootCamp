import React from "react";
import ReactDOM from "react-dom";
import App from "./19_App";

// Go to Firebase and create a Project 
// In add app to get started click on web and give a name and "don't select hoisting" and install firebase in the app by "npm install firebase" and create a firebase file and write the code in it "Note: in last export the firebase config"
// For database go to real time Database and create a Database of any location and "click test mode not Locked mode" and you will get the database with null and connect the database url in firebase file
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);