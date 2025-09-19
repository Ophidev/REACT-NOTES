import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"; //defalult import
import {Footer} from "./components/Footer.jsx"; //named import
import Body from "./components/Body"; //we can import like this also 
import About from "./components/About.jsx";
import AboutUs from "./components/AboutClass.js";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Profile from "./components/Profile.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import ShimmerUI from "./components/ShimmerUI.jsx";

import {lazy,Suspense} from "react";
// import Instamart from "./components/Instamart.jsx";

 const Instamart = lazy(()=> import("./components/Instamart.jsx"));

/*createBrowserRouter -> is helps us to create routing
  RouterProvider -> is provides to root div to render according to path we set*/
const AppLayout = ()=>{

    return(
        
        <React.Fragment>
        <Header/>

            <Outlet/>

        <Footer/>
        </React.Fragment>
    );
};


//Creating a router config to set path for each page(nested routes)
const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        //if we load "/" this path then <AppLayout/> will render 
        //if error in "/" this path then <Error/> will render

        children:[   //children is created means they will all go to the <Outlet/> and render according to route set for them.

            {

                path: "/",
                element: <Body/>
            },
            {

                path: "/about",
                element: <AboutUs name={"PropsData"}/>,
                children:[

                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
        
            {
        
                path: "/contact",
                element: <Contact/>
            },

            {

                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },

            {

                path:"/instamart",
                element:<Suspense fallback={<h1>Loading...</h1>}>

                         <Instamart/>
                        </Suspense>  
            }
        ]
    },

]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);