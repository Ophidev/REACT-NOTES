import React from "react";
import ReactDOM from "react-dom/client";

import { createElement as ce } from "react";


/* <div>
        <h1></h1>
        <h4></h4>
    </div>

*/

let heading = React.createElement(
    "h1",
    {

    id:"heading1",
    key:"h1"

    },
    "React Lecture 4");


    console.log("The heading1 is : ",heading);

    //React.createElement() give us => JS object => which converts into => HTML code => and then put into => DOM.

let heading4 = React.createElement(
    "h4",
    {
        id:"heading4",
        key:"h4"

    },
    "Laying the foundation");


// Below is creation of Heading  without use of JSX in React.

let heading3 = ce('h3',{id:"head", key:"heading3"},"This is Heading 3 without using the JSX");

//BELOW IS THE CREATION OF HEADING USNG THE JSX IN REACT
let headingJSX = <h3 id="heading3" key="head">This is heading3 using the JSX </h3>;

let headingjsx2 = (

    <h3 id="head3" key="head3ing">
         THIS IS HEAIDNG 3 USING JSX USING PARENTHECIES.
    </h3>

);

let container = ce(
    "div",
    {
        id:"container",
        className:"div"
    },
    [heading,heading4,heading3,headingJSX,headingjsx2]); // when we add siblings like that in react our code give error in console so to resolve the error 
                         // we have to just provide the unique key to each siblings

                         



let root = ReactDOM.createRoot(document.getElementById('root'));


root.render(container);

