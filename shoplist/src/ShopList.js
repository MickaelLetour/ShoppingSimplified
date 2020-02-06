import React from "react";
import Auth from "./auth.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import Lists from "./components/Lists"
//import NewUser from "./components/NewUser.js";
import {BrowserRouter as Router, Switch} from "react-router-dom"
import {dbGETFetch} from "./components/functions"
import auth from "./auth.js";
import { ProtectedRoute } from './protRoute.js';



class ShopList extends React.Component {
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
        console.log("something");
      }
    
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    componentDidMount() {
        console.log(this.state.logged);
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Navbar /* pageWrapId={"page-wrap"} outerContainerId={"App"} */
                        openMenu={this.openMenu}
                        closeMenu={this.closeMenu}
                    />
                        <Switch>
                            <ProtectedRoute exact path="/ShopList/ActiveList" component={Home}/>
                            <ProtectedRoute exact path="/ShopList/Lists" component={Lists} />
                        </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default ShopList