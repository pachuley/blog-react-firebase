import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import "./SideNavbar.css"

function SideNavbar(props) {      
    return (
        <div className="navbarContainer">       
            <div class="siderContainer">
                <div className="logo">
                    <img src="https://res.cloudinary.com/pachuley/image/upload/v1614811234/adventure_co._ldbxll.png" alt="#" className="imgLogo" />
                </div>
                <div className="navItems">
                  <a href="#">About</a>
                  <a href="#">Services</a>
                  <a href="#">Clients</a>
                  <a href="#">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default SideNavbar;