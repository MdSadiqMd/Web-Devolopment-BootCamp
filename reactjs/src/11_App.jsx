import React from "react";
import UserContextProvider from "./11_Context/UserContextProvider";
import Login from "./11_Components/Login";
import Profile from "./11_Components/Profile";

function App(){
    return(
        <UserContextProvider>
            <h1>Hello World</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    )
}
export default App