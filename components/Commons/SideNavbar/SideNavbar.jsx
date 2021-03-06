import React from "react";
import { NavLink } from "react-router-dom"
import { GiMountaintop, GiBlackFlag, GiAnchor } from "react-icons/gi";
import "./SideNavbar.css"

function SideNavbar(props) {      
    return (
        <div className="navbarContainer">       
            <div class="siderContainer">
                <div className="logo">
                    <NavLink to={`/`}>
                        <img src="https://res.cloudinary.com/pachuley/image/upload/v1614811234/adventure_co._ldbxll.png" alt="#" className="imgLogo" />
                    </NavLink>
                </div>
                <div className="navItems">
                    <div className="navLinkContainer">
                        <GiAnchor size={20} className="navIcon"/>
                        <NavLink to={`/`}>
                            <h4 className="navItem">Captain's Log</h4>
                        </NavLink>
                    </div>
                    <div className="navLinkContainer">
                        <GiMountaintop size={20} className="navIcon"/>
                        <NavLink to={`/aboutme`}>
                            <h4 className="navItem">About Me</h4>
                        </NavLink>
                    </div>
                    <div className="navLinkContainer">
                        <GiBlackFlag size={20} className="navIcon"/>
                        <NavLink to={`/create_post`}>
                            <h4 className="navItem">New Chapter</h4>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNavbar;