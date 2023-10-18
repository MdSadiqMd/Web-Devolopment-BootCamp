import React from "react";
import ReactDOM from "react-dom";
import { FirebaseProvider } from "./23_Context/Firebase";
import { BrowserRouter } from"react-router-dom";
import App from "./23_App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FirebaseProvider>
                <App />
            </FirebaseProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);