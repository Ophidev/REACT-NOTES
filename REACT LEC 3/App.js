import React from "react";
import ReactDOM from "react-dom/client";

let h1 = React.createElement("h1",{id:"title"},"REACT LECTURE 3");

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(h1);

