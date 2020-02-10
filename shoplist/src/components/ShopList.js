import React from "react";
import Auth from "../auth.js"
//import {dbGETFetch} from "./functions"
import {BrowserRouter as Redirect} from 'react-router-dom';
/* import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Lists from "./Lists"
import Items from "./Items.js"
//import NewUser from "./components/NewUser.js";
import {BrowserRouter as Router, Switch} from "react-router-dom"

import { ProtectedRoute } from '../protRoute.js'; */



class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            logged: Auth.isAuthenticated(),
            page : "",
            menuOpen: false,
        }
        
        this.componentDidMount=this.componentDidMount.bind(this);
        this.listCeck=this.listCeck.bind(this);
    }


    componentDidMount(props) {
        if(this.state.logged===false)
        return <Redirect to="/" />

        
       
    }

    listCeck(){
        
    }
    
    render() {
        return (
        <h1> home </h1>
        )
    }
}

export default ShopList