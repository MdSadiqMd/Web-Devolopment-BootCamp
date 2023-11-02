import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
Without React Redux and with Redux toolkit
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { myApi } from './redux/api'; 
ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={myApi}> 
    <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
