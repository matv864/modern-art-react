import React from "react";

import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

 
const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/" activeStyle>
                    MainPage
                </NavLink>
                <NavLink to="/thoughts-of-artist" activeStyle>
                    thoughts-of-artist
                </NavLink>
                <NavLink to="/8" activeStyle> 
                    курсы акварели
                </NavLink>
                <NavLink to="/contacts" activeStyle>
                    contacts
                </NavLink>
                <NavLink to="/about" activeStyle>
                    about
                </NavLink>
            </NavMenu>
        </Nav>
        );
    };
     
    export default Navbar;


/*
const Navbar = () => {
    return (
        <div>
            <a href="..">MainPage</a>
            <br/>
            <a href="./thoughts-of-artist">go to thoughts-of-artist</a>
            
        </div>
    );
};
 
export default Navbar;*/