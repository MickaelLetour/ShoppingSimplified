import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import Log from "./components/Log.js";
//import ShopList from "./components/ShopList.js";
import Navbar from "./components/Navbar"
import ActiveList from "./components/ActiveList.js"
import AllLists from "./components/AllLists.js"
import Items from "./components/Items.js"
import Auth from "./auth"
import { ProtectedRoute } from './protRoute.js';
import NewUser from './components/NewUser';
import ShopList from './components/ShopList';
import Forgot from './components/Forgot';
import CreateItems from './components/CreateItems';
import UpdateItems from './components/UpdateItems';


class Routes extends React.Component {

  constructor() {
    super();
    this.state = {
      button : Auth.button(),
      status : Auth.isAuthenticated(),
      register: false,

    }
    this.openMenu=this.openMenu.bind(this);
    this.closeMenu=this.closeMenu.bind(this);
    this.headerHandler = this.headerHandler.bind(this);
    this.componentDidMount= this.componentDidMount.bind(this);
  } 


  openMenu() {
    this.setState({ menuOpen: true })
    //console.log("something");
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }




componentDidMount(){
  let stats=Auth.isAuthenticated();
   if(stats === true){
   console.log("i entered mount")
    Auth.setLogout();
        console.log("i entered3")
        console.log(Auth.button())
        this.setState({
          button : Auth.button(),
        })
  } 
}


  headerHandler(){
    console.log(this.state.status);
      if(this.state.button=== 'Register' && (this.state.status === false))
      {
        Auth.setLoginButton();
        console.log("i entered")
        console.log(Auth.button())
        this.setState({
          button : Auth.button(),
        })
      }
      
      if(this.state.button === 'Login' && (this.state.status === false)){
        Auth.setRegister();
        console.log("i entered2")
        console.log(Auth.button())
        this.setState({
          button : Auth.button(),
        })
      }

      if(this.state.button === 'Logout' && (this.state.status === true)){
        Auth.logout();
        Auth.setLogout();
        Auth.isAuthenticated()
        console.log("i entered2")
        console.log(Auth.button())
        this.setState({
          button : Auth.button(),
        })
      }
  }

  render() {
    return (
      <Router>
      <div>      
          <Switch>
          
            <Route exact path="/" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler} button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <Log />
                  </div>
                </div>
              ); 
            }}/>

            <Route exact path="/Login" component={()=>{
              return(
                <div><Header headerHandler={this.headerHandler} button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <Log />
                  </div>  
                </div>
              ); 
            }} />

            <Route exact path="/Register" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler} button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <NewUser />
                  </div>  
                </div>
              ); 
            }} />

            <Route exact path="/Login/Forgot" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler} button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <Forgot />
                  </div>  
                </div>
              ); 
            }} />
            
            <ProtectedRoute exact path="/ShopList" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler}button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <ShopList />
                  </div> 
                  <Navbar />
                </div>
              ); 
            }} />

            <ProtectedRoute exact path="/ShopList/ActiveList" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler}button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <ActiveList />
                  </div> 
                  <Navbar />
                </div>
              ); 
            }} />

            <ProtectedRoute exact path="/ShopList/Lists" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler}button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <AllLists />
                  </div> 
                  <Navbar />
                </div>
              ); 
            }} />
            
            <ProtectedRoute exact path="/ShopList/Items" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler}button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <Items />
                  </div> 
                  <Navbar />
                </div>
              ); 
            }} />
             
            <ProtectedRoute exact path="/ShopList/Items/CreateItems" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler}button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <CreateItems />
                  </div> 
                  <Navbar />
                </div>
              ); 
            }} />

            <ProtectedRoute exact path="/ShopList/Items/UpdateItems" component={()=>{
              return(
                <div>
                  <Header headerHandler={this.headerHandler}button={this.state.button} status={this.state.status}/>
                  <div className="main">
                    <UpdateItems />
                  </div> 
                  <Navbar />
                </div>
              ); 
            }} />
        
            <Route path="*" component={() => "404 NOT FOUND"}>
            </Route>
          </Switch>
          
          </div>
        <Footer />
    </Router>
    )
  }
}

 export default Routes
  
