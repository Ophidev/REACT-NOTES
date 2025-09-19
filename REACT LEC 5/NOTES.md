<!-- Lecture 5-React (Topics Taught)

->Comments in React.
->How to give Inline Sytle in React.
->About React.Fragmentff
->Config Driven UI
->Optional Chaining(HW) in JS
->Map function in JS(HW)
->Props in React
->Destructuring the object and dont need to use the props inside a functional component.
->Virtual DOM in react and Reconcilation in React, and also read React Fiber(is new Reconsiliation engine).
->Why we dont use index of map function  as a key in React. -->


## Q: How can I write `comments` in JSX?
A: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example
```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```




## Q: Is `JSX` mandatory for React?
A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.
#### Example of `JSX`
```
const sample = <h2>Greetings</h2>;
```


## Q: Is `ES6` mandatory for React?
A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.



## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```



## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

**As we know that to render the react multiple children elements inside the Functional Component we have to create a parent div inside which all the children lies, but sometimes we dont want a div outside our children elements so in this case we uses React.Fragments.**

#### Example
```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```


## Q: What is `Reconciliation` in React?
A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

![alt text](</NotesImg/Reconciliation.jpg>)

# What is Virtual DOM in React?
* Virtual DOM is not a DOM it is a representation of DOM. 

# What is Reconciliation in React?
* Reconciliation uses the diff Algorithm which finds out the difference between the trees(orignal DOM and Virtual DOM). And only Rerender the specific portion where changes are made in react App.

# What is diffing Algorithm?
* React uses the diff Algorithm which finds out the difference between the trees structure of a DOM.

# Why do we uses the Key in React?
* we uses the key in react becauses it helps the diff algorithm to uniqly identify and then recognise that where the changes are made. And what should be updated.

## Q: Why do we need `keys` in React?
A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.
#### Example
```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```


**Example -> If we have 4 div before in our React App and we does give them key and then we create a new Div then Diff Algorithm will not able to recognise the all the div uniquely that where the changes are made and React will Render the all the 5 divs again, but if we have given the key to the all the div then React will only render the 5th div and this will make the React fast.**



## Q: What is `React Fiber`?
A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:
- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance.



## Q: Can we use `index as keys` in React?
A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incomiting data react may render them in unusual order.

## Q: What is `props in React`? Ways to.
A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
#### Example
```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```


# What is config Driven UI?
**Config Driven UI is an Approach to develop UI in such a way that the presentation of UI is seperated and the Data of UI is get through a configuration file such as using API**

**Config Driven UI is an approach where the presentation (how the UI looks and behaves) is separated from the data and structure that defines the UI (typically provided via a configuration file or API).**

**Config Driven UI is a design approach in UI development where the interface's structure, components, and behaviors are defined by external configuration files (e.g., JSON, YAML, etc.) or APIs, rather than hardcoding them into the application. This separation allows for greater flexibility, easier updates, and dynamic rendering of UIs based on changing requirements or external data.

In this approach:

* The configuration file (or API response) defines what the UI should display, such as the components, styles, or layout rules.
* The rendering engine (framework or logic) interprets this configuration and constructs the UI dynamically at runtime**.

# 

# EXAMPLE 
* Suppose you want to create a form. Instead of hardcoding the UI, you define it in a JSON configuration like this:

```
{
  "form": {
    "title": "User Registration",
    "fields": [
      {
        "type": "text",
        "label": "Name",
        "placeholder": "Enter your name",
        "required": true
      },
      {
        "type": "email",
        "label": "Email",
        "placeholder": "Enter your email",
        "required": true
      },
      {
        "type": "password",
        "label": "Password",
        "placeholder": "Enter your password",
        "required": true
      }
    ],
    "submitButton": {
      "text": "Register"
    }
  }
}
```