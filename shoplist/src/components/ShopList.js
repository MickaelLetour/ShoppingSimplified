import React from "react";
import Auth from "../auth.js"

/* import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Lists from "./Lists"
import Items from "./Items.js"
//import NewUser from "./components/NewUser.js";
import {BrowserRouter as Router, Switch} from "react-router-dom"
import {dbGETFetch} from "./functions"
import { ProtectedRoute } from '../protRoute.js'; */



class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            logged: Auth.isAuthenticated(),
            menuOpen: false,
        }
        
        this.componentDidMount=this.componentDidMount.bind(this);
    }



    componentDidMount() {
        console.log(this.state.logged);
    }
    
    render() {
        return (
        <h1> home </h1>
        )
    }
}

export default ShopList