import { createContext } from "react";

const UserContext = createContext({

    user:{
        name:"dummyName",
        email:"dummy@gmail.com"
    }
});

UserContext.displayName = "UserContext";
export default UserContext;