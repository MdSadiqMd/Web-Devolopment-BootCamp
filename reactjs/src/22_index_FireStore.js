import React from "react";
import ReactDOM from "react-dom";
import App from "./22_App";
// To use Firebase Cloud Firestore we need to create a Database
// The Data in FireStore is stored in the format of Collection --> Document --> Document's Data --> Collection --> Document --> Document's Data

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);