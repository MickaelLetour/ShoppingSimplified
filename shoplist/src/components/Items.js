import React from "react";
import Auth from "../auth.js"
/* import Header from "./Header.js"
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Lists from "./Lists"
//import NewUser from "./components/NewUser.js";
import {BrowserRouter as Router, Switch} from "react-router-dom"
import {dbGETFetch} from "./functions"
import { ProtectedRoute } from '../protRoute.js'; */



class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            logged: Auth.isAuthenticated(),
            menuOpen: false,
        }
        this.openMenu=this.openMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        //this.componentDidMount=this.componentDidMount.bind(this);
    }

    openMenu() {
        this.setState({ menuOpen: true })
        //console.log("something");
      }
    
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    componentDidMount() {
        console.log(this.state.logged);
    }
    
    render() {
        return (
            
                <div>
                    <h3> Items list</h3>
                </div>
            
        )
    }
}

export default Items