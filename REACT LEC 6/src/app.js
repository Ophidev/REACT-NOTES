import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"; //defalult import
import {Footer} from "./components/Footer.jsx"; //named import
import Body from "./components/Body"; //we call like this also 

const AppLayout = ()=>{

    return(
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);