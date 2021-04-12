import React from "react";
import { NavLink } from "react-router-dom"
import { GiBookshelf, GiCompass, GiBookmarklet, GiEntryDoor, GiExitDoor} from "react-icons/gi";
import LogOut from "../../AccountManagement/LogOut/LogOut"
import "./SideNavbar.css"

function SideNavbar(props) {

    return (
        <div className="navbarContainer">       
            <div className="siderContainer">
                <div className="logo">
                    <NavLink to={`/`}>
                        <img src="https://res.cloudinary.com/pachuley/image/upload/v1614811234/adventure_co._ldbxll.png" alt="#" className="imgLogo" />
                    </NavLink>
                </div>
                <div className="navItems">
                    <div className="navLinkContainer">
                        <GiCompass size={20} className="navIcon"/>
                        <NavLink to={`/writers`}>
                            <h4 className="navItem">Our Writers</h4>
                        </NavLink>
                    </div>
                    {(props.user &&
                        <div>
                            <div className="navLinkContainer">
                                <GiBookshelf size={20} className="navIcon"/>
                                <NavLink to={`/author_posts/${props.user.email}`}>
                                    <h4 className="navItem">My Entries</h4>
                                </NavLink>
                            </div>
                            <div className="navLinkContainer">
                                <GiBookmarklet size={20} className="navIcon"/>
                                <NavLink to={`/create_post`}>
                                    <h4 className="navItem">New Chapter</h4>
                                </NavLink>
                            </div>
                        </div>
                    )}
                    {(props.user
                        ?
                        <div className="navLinkContainer">
                            <GiEntryDoor size={20} className="navIcon"/>
                            <LogOut />
                        </div> 
                        :
                        <div className="navLinkContainer">
                            <GiExitDoor size={20} className="navIcon"/>
                            <NavLink to={`/log_in`}>
                                <h4 className="navItem">Log In</h4>
                            </NavLink>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    );
}

export default SideNavbar;