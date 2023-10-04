import React from "react";
import ReactDOM from "react-dom";
import App from "./14_App";
import { Provider } from "react-redux";
import { store } from './14_app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
);