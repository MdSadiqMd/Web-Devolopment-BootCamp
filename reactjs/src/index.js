import React from "react";
import ReactDOM from "react-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Contact from "./9_Components/Contact Us/contact";
import User from "./9_Components/User/user";
import Github from "./9_Components/Github/Github";

// Creating a router
/*const router=createBrowserRouter([
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
            },
            {
                path:"/contact",
                element:<Contact />
            }
        ]
    }
]); */

// (or)
const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:userid" element={<User />} />
            <Route path="github" element={<Github />} />
        </Route>
    )
)

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
