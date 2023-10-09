import React from "react";
import ReactDOM from "react-dom";
import App from "./21_App";
import FirebaseProvider from './21_Context/Firebase'

ReactDOM.render(
    <React.StrictMode>
        <FirebaseProvider>
            <App />
        </FirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
);