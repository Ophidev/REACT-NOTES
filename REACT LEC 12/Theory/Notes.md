# React Context API and Lifting State Up

## Lifting State Up in React

### Concept of Lifting State Up
- If we want to change the state of a sibling component, we lift the state up to a common parent.
- One sibling cannot directly change another sibling’s state.
- The parent component controls the state and passes it down as props to child components.
- If a child wants to change the parent's state, it calls a function passed as a prop from the parent.

### How It Works in Instamart Component
#### Parent Component (Instamart)
- Maintains the state (`sectionconfig`) for visibility of sections.
- Passes down `isVisible` and `setIsVisible` props to child components.

#### Child Component (Section)
- Receives `title`, `description`, `isVisible`, and `setIsVisible` as props.
- Uses `isVisible` to show/hide content.
- Calls `setIsVisible()` to update the state in the parent.

### Instamart Component Code
```jsx
import { useState } from "react";

// Section component receives props to display individual sections
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-black-200 p-3 ">
      <h1 className="text-3xl">{title}</h1>

      {!isVisible ? (
        <button
          className=" w-20 border-2 border-green-600 cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          show
        </button>
      ) : (
        <button
          className=" w-20 border-2 border-green-600 cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          hide
        </button>
      )}

      {isVisible && <p className="text-sm">{description}</p>}
    </div>
  );
};

// Instamart component manages state for multiple sections
const Instamart = () => {
  const [sectionconfig, setSectionConfig] = useState({
    showAboutInstamart: false,
    showTeamsInstamart: false,
    showCarrerInstamart: false,
  });
  return (
    <>
      <Section
        title="About Instamart"
        description="Lorem ipsum dolor sit amet..."
        isVisible={sectionconfig.showAboutInstamart}
        setIsVisible={() => setSectionConfig({
          showAboutInstamart: true,
          showTeamsInstamart: false,
          showCarrerInstamart: false,
        })}
      />
      <Section
        title="Team Instamart"
        description="Lorem ipsum dolor sit amet..."
        isVisible={sectionconfig.showTeamsInstamart}
        setIsVisible={() => setSectionConfig({
          showAboutInstamart: false,
          showTeamsInstamart: true,
          showCarrerInstamart: false,
        })}
      />
      <Section
        title="Career Instamart"
        description="Lorem ipsum dolor sit amet..."
        isVisible={sectionconfig.showCarrerInstamart}
        setIsVisible={() => setSectionConfig({
          showAboutInstamart: false,
          showTeamsInstamart: false,
          showCarrerInstamart: true,
        })}
      />
    </>
  );
};

export default Instamart;
```

---

## React Context API

### Key Concepts
- **createContext**: Used to create a centralized data store and used to avoid the prop drilling.
- **useContext**: Used in functional components to access context values.
- **Context.Provider**: Used to provide the context value to the component tree.
- **Context.Consumer**: Used in class components to access the context value.
- **displayName**: Helps in debugging by giving the context a meaningful name.

### UserContext Code Example
```jsx
import { createContext } from "react";

// Creating a Context with default values
const UserContext = createContext({
    user: {
        name: "dummyName",
        email: "dummy@gmail.com"
    }
});

// Setting a display name for debugging
UserContext.displayName = "UserContext";
export default UserContext;
```

### Using Context in Functional Components (Footer Component)
```jsx
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

export const Footer = () => {
    // Accessing context values using useContext hook
    const { user } = useContext(UserContext);
    return (
        <>
            <h5>Footer</h5>
            <h3 className="text-green-700">{user.name}</h3>
            <h4 className="text-red-500">{user.email}</h4>
        </>
    );
};
```

### Using Context in Class Components (AboutUs Component)
```jsx
import { Component } from "react";
import UserContext from "../Utils/UserContext";

class AboutUs extends Component {
    render() {
        return (
            <div className="About-us">
                <h1>This is AboutUs class</h1>
                {/* Accessing context values using Context.Consumer and Using with JSX*/}
                <UserContext.Consumer>
                    {({ user }) => <h2>{user.name} - {user.email}</h2>}
                </UserContext.Consumer>
            </div>
        );
    }
}

export default AboutUs;
```

### Wrapping Components with Provider (AppLayout Component)
```jsx
import { useState } from "react";
import UserContext from "./Utils/UserContext";

const AppLayout = () => {
    // State for managing user details
    const [user, setUser] = useState({
        name: "Aditya Bhatt",
        email: "Adi@gmail.com"
    });
    return (
        // Wrapping the application with Context Provider
        <UserContext.Provider value={{ user }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    );
};

export default AppLayout;
```

---



