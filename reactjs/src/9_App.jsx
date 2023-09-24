import React from "react";
import { ReactDOM } from "react-dom";
import Home from "./9_Components/Home/Home"
import Header from "./9_Components/Header/Header";
import Footer from "./9_Components/Footer/Footer";
import { Outlet } from "react-router-dom"; 

function App() {
    return (
        <>
        <Header />
        <Outlet /> {/*Here in the place of Outlet we render other things 
                      Ex: in between the header(navbar) and footer(copyright) we render other website information*/}
        <Footer />
        </>
    )
}