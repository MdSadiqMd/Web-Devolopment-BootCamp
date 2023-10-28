import React from 'react'
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
    const notify=()=>{
        // visit this website "https://fkhadra.github.io/react-toastify/introduction" select parameters and this code will be generated 
        toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
  return (
    <div>
        <button onClick={notify} >Login</button>
        <ToastContainer />
    </div>
  )
}

export default App