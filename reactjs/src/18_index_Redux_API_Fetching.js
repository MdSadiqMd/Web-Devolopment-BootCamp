import React from "react";
import ReactDOM from "react-dom";
import App from "./18_App";
import { Provider } from "react-redux";
import { store } from "./18_redux/store";
// For API Calling using Redux we use createAsyncThunk (this handle Async data)
// For output click on fetch button and see the redux extension
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);