import React, {Component} from "react"
import { slide as Menu } from "react-burger-menu";
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
        }
      }
    
     
    
      render() {
        return (
            <Menu >
                <NavLink className="menu-item" to="/ShopList" >
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
          )}
        }

        

export default Navbar