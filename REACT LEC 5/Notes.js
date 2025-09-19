//How to give Inline style to the react elements.

import React from 'react'
import ReactDOM from 'react-dom/client'

const StyleObj = {

    backgroundColor:"black",
    color:"white"
}

const heading = <h1 style={StyleObj}>This is heading</h1>

const root = ReactDOM.createRoot(document.getElementById('NotesRoot'));

root.render(heading);

//What is Optional Chaining in the JavaScript?

// Optional chaining is a feature in JavaScript that 
// allows you to safely access deeply nested properties 
// of an object without having to check if each reference 
// in the chain is valid. It uses the `?.` operator.

const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
    }
};

// Without optional chaining
const zipCode = user && user.address && user.address.zip;
console.log(user?.address);

// With optional chaining
const zipCodeWithOptionalChaining = user?.address?.zip;
console.log(user?.address?.zip);

console.log(zipCode); // Output: '12345'
console.log(zipCodeWithOptionalChaining); // Output: '12345'




//What is props in React
 /* props in react are argument passed in the functional component of react
    this is useful when we want to pass data from one functional component to another functional 
    component(parent to child).'
    ->The defference is only that when we pass any argument(props) to the functional component
       react wraps up each argument(props) into a single keyword called props(or any name you want to give).
 */

//Example

    function func(parameter1, parameter2){

        console.log("This is parameter");

    }

    func("para1","para2");


    //props in react component

    function ReactComp(props){  {/* 
                                     In React, `props` is a plain JavaScript object that contains data passed 
                                     to a component as attributes. Here, `data` is a property of the `props` 
                                     object because we passed it as an attribute in the component call.*/}
      

        console.log(props);
        return(

            <div>
                <h1>{props.data}</h1>
                <h2>{props.data}</h2>

            </div>
        );
    }


    function ParentReactComp(){

        <div>
            <ReactComp data="NamsteReact1"/>{/*here data is a props(argument) passed to the ReactComp*/}
            <ReactComp data = "NamasteReact2"/>
        </div>
    }

