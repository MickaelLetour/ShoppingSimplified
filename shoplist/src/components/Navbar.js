import React, {Component} from "react" //Imports react, allow implementation of JSX
import { slide as Menu } from "react-burger-menu"; //import slide from react-burger-menu
import {NavLink} from 'react-router-dom' //import NavLink from react router

//navbar of type burguer menu with list of links
class Navbar extends Component {
    constructor(props){ //constructor prepared to receive props
        super(props) //allows the usage of props in class
          this.state = { //state field in class 
        }
      } 
    
     
    
      render() {//render the component to the react DOM
        return (//render items unfiltered
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