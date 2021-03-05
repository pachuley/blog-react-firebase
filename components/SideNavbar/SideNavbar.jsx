import React from "react";
import { NavLink } from "react-router-dom"
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
                    <NavLink to={`/`} className="navItem">
                        All the entries
                    </NavLink>
                    <NavLink to={`/aboutme`} className="navItem">
                        About me
                    </NavLink>
                    <NavLink to={`/createpost`} className="navItem">
                        Let's write something!
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default SideNavbar;