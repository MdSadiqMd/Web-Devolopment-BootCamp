import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContextProvider value={{user,setUser}}>  {/*Here we give the import such that the it takes the value(object) props that need to be manipulated */}
            {children}
        </UserContextProvider>
    )
}

export default UserContextProvider