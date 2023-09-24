import React from "react";
import ReactDOM from "react-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Contact from "./9_Components/Contact Us/contact";
import User from "./9_Components/User/user";
import Github, { githubInfoLoader } from "./9_Components/Github/Github";

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
            <Route path="about/" element={<About />}> {/* If we want the nesting path inside each under */}
                <Route path="sadiq"/>
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="user/:userid" element={<User />} />
            <Route loader={githubInfoLoader} path="github" element={<Github />} />
        </Route>
    )
)

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/> {/* we wrap the other address website locations in this router */}
  </React.StrictMode>,
  document.getElementById('root')
);
