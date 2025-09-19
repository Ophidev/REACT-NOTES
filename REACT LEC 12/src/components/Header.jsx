import {useState} from 'react';
import Rlogo from '../assets/img/logo.png'; //importing image

import {Link} from "react-router-dom";

import { useContext } from 'react';
import UserContext from '../Utils/UserContext';


const Logo = () =>{

    return(
    <>
    <img src={Rlogo} alt="logo" id="logo"/> 
    </>
    );
}


const Header = () =>{

    const [loggedInUser, setLoggedInUser] = useState(true);

    const {user} = useContext(UserContext); //using of useContext Hook to get the UserContext in Header.



    return(
    <div id="Header">

        <Logo/>

        <h1 className="text-green-500">{user.name}</h1>
        <div id="navbar">
            
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/about">
                <li>About us</li>
                </Link>

                <Link to="/contact">
                <li>Contact Us</li>
                </Link>

                <Link to="/instamart">
                    <li>Intamart</li>
                </Link>

                <li>cart</li>
            </ul>

            
        </div>
       
       {
       loggedInUser?
        (<button className="loggedInBtn" onClick={()=>{setLoggedInUser(false)}}>Login</button>):
        (<button className="loggedOutBtn" onClick={()=>{setLoggedInUser(true);}}>Logout</button>)
       }
       
    </div>
    );

}

export default Header;