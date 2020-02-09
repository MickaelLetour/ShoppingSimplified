import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import Log from "./components/Log.js";
import ShopList from "./components/ShopList.js";
import Home from "./components/Home.js"
import Lists from "./components/Lists"
import Items from "./components/Items.js"
import CreateItem from "./components/CreateItem.js"
import { ProtectedRoute } from './protRoute.js';
import Navbar from './components/Navbar';
import NewUser from './components/NewUser';

class Routes extends React.Component {

  constructor() {
    super();
    this.state = {
      show : false,
    }
  } 

  render() {
    return (
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Log} />
          <ProtectedRoute exact path="/Register">
            <NewUser />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ShopList">
            <Home />
            <Navbar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ShopList/ActiveList">
            <Home />
            <Navbar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ShopList/Lists">
            <Lists />
            <Navbar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ShopList/CreateItem" >
            <CreateItem />
            <Navbar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ShopList/Items" >
            <Items />
            <Navbar />
          </ProtectedRoute>
          <Route path="*" component={() => "404 NOT FOUND"}>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    )
  }
}

 export default Routes
  
