import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Creating a router
const router=createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "",
                element:<Home />
            },
            {
                path:"about",
                element:<About />
            }
        ]
    }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
