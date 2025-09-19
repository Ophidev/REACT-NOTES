import React from "react";
import ReactDOM from "react-dom/client";

//REACT FUNCTION COMPONENT
//-> React Function component is nothing but a JS function.
//-> Name of component starts with capital letter - it's not mandatory but good practice.


//BELOW ARE THE REACT FUNCTION COMPONENT.
const HeaderComponent = () => {

    return(
        
            <h1>Namaste React Function Component</h1>
        
    );
};

const HeaderComponent1 = function(){

    return <h1>Namaste React Function Component One</h1>;
}


const HeaderComponent2 = () => ( <h1>Namaste React Function Component Two</h1>);


const HeaderComponent3 = () => (

    <h1>Namaste React Function Component Three</h1>

);


//Below is the React Element

let element =  (
<h2>This is the React Element</h2>
);

//Below is the React variable

let variable = 37;

//Compoents inside a Component is called Composing Component.
let NewComponent = () =>{

    return (

        <div>
            <h1>This is new Function Component which contain a calculation,variable,React Element and React components in it.</h1>
            {7-3} {/*we can inject any JS operation variable iside a function Component of React*/}
            <br/>
            {variable}  {/*This is varible inside the Function Component*/}
            {element}   {/*This is element inside the Function Componenet*/}
            {HeaderComponent()} {/*This is a way of inserting a Component inside a component because it is JS Function we have to execute it */}
            {<HeaderComponent1/>} {/*This is a way of inserting a component inside a Component in React */}
        </div>
    );
}



let root = ReactDOM.createRoot(document.getElementById("root"));

//Below is the way that how we render the react component.
root.render(<NewComponent/>);
