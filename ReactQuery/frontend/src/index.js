import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient();
// Need to create an Intance of queryClient and Pass it on to the App With Browser Router
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
