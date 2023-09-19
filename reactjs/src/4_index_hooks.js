import React from 'react';
import ReactDOM from 'react-dom';
import App from "./4_App";

ReactDOM.createRoot(document.getElementById("root")) // Read about Create root ar here "https://github.com/acdlite/react-fiber-architecture"
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
