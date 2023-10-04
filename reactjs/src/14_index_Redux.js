import React from "react";
import ReactDOM from "react-dom";
import App from "./14_App";
import { Provider } from "react-redux";
import { store } from './14_app/store';
// React redux is used to counter prop drilling solving the same problem that Context API solves 
// In react redux where there UI doesn't directly update/manipulate the props it will send a event of manipulation to redux store and redux store updates using the reducer
// Context API is used when we have to handle the prop drilling and react redux conquer the updation of props 
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
);