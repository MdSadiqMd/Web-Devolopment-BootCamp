import React from "react";
import ReactDOM from "react-dom";
import App from "./21_App";
// unComment this line to run
//import { FirebaseProvider } from "./21_Context/firebase";

// The best Practice to use Firebase if to create the Context API ANd provide values through it in the form of props

ReactDOM.render(
    <React.StrictMode>
        <FirebaseProvider>
            <App />
        </FirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
);