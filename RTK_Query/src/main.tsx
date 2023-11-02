import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { useGetPostsQuery } from './redux/api'; 

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={useGetPostsQuery}> 
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
