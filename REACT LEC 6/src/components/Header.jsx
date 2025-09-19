const Logo = () =>{

    return(
    <>
    <h3 id="logo"><b>Apna <br></br> Kitchen</b></h3>
    </>
    );
}

const Header = () =>{

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

    </div>
    );

}

export default Header;