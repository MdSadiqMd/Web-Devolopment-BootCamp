import React from "react";
import ReactDOM from "react-dom";
import { FirebaseProvider } from "./23_Context/Firebase";
import App from "./23_App";

ReactDOM.render(
    <React.StrictMode>
        <FirebaseProvider>
            <App />
        </FirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
);