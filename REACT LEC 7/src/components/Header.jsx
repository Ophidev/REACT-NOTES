import {useState} from 'react';

const Logo = () =>{

    return(
    <>
    <h3 id="logo"><b>Apna <br></br> Kitchen</b></h3>
    </>
    );
}


const Header = () =>{

    const [loggedInUser, setLoggedInUser] = useState(true);

    return(
    <div id="Header">

        <Logo/>

        <div id="navbar">
            
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contacts</li>
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