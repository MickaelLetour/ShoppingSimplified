import React, {Component} from "react"
import { slide as Menu } from "react-burger-menu";

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          menuOpen: false,
        }
      }
    
      openMenu() {
        this.setState({ menuOpen: true })
      }
    
      closeMenu() {
        this.setState({ menuOpen: false })
      }
    
      render() {
        return (
            <Menu >
                <a className="menu-item" href="/ActiveList">
                 Active List
                </a>

                <a className="menu-item" href="/Lists">
                 My Lists
                </a>

                <a className="menu-item" href="/Items">
                    Items
                </a>

                <a className="menu-item" href="/Profile">
                    Profile
                </a>

                <a className="menu-item" href="/Account">
                    Account
                </a>
            </Menu>
          )}
        }

        

export default Navbar