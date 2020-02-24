import React from "react" //Imports react, allow implementation of JSX
import { slide as Menu } from "react-burger-menu"; //import slide from react-burger-menu
import {NavLink} from 'react-router-dom' //import NavLink from react router

//function for navbar
function Navbar() {
        return ( //render info
            <Menu > {/* opens menu */}
                <NavLink className="menu-item" to="/ShopList" > {/* Link for respective page */}
                 Shop List
                </NavLink>

                <NavLink className="menu-item" to="/ShopList/ActiveList" >
                 Active List
                </NavLink>

                <NavLink className="menu-item" to="/ShopList/Lists">
                 My Lists
                </NavLink>

                <NavLink className="menu-item" to="/ShopList/Items">
                    Items
                </NavLink>

                <NavLink className="menu-item" to="/ShopList/Profile">
                    Profile
                </NavLink>

                <NavLink className="menu-item" to="/ShopList/Account">
                    Account
                </NavLink>
            </Menu>
          )
        }

        

export default Navbar