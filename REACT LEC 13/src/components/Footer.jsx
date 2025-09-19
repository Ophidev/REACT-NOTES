import {useContext} from "react";
import UserContext from "../Utils/UserContext";

export const Footer = () =>{

    const {user} = useContext(UserContext);

    return(
        <>
        <h5>footer</h5>
        <h3 className="text-green-700">{user.name}</h3>
        <h4 className="text-red-500">{user.email}</h4>
        </>
    );
}