import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import Log from "./components/Log.js";
//import ShopList from "./components/ShopList.js";
import Navbar from "./components/Navbar"
import Home from "./components/Home.js"
import Lists from "./components/Lists"
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

      if(this.state.button === 'Register' && (this.state.status === true)){
        Auth.setLogout();
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
        <Header 
          headerHandler={this.headerHandler}
          button={this.state.button}
         />
          <Switch>
            <Route exact path="/" component={Log} />
            <Route exact path="/Login" component={Log} />
            <Route exact path="/Register" component={NewUser}/>
            <ProtectedRoute exact path="/ShopList"
              component={()=>{return(<div><ShopList />  <Navbar /> </div>); }}
            />

            <ProtectedRoute exact path="/ShopList/ActiveList"
              component={()=>{return(<div><Home />  <Navbar /> </div>); }} 
              
           />
            <ProtectedRoute exact path="/ShopList/Lists"
              component={()=>{return(<div><Lists />  <Navbar /> </div>); }}
            />

            {/* <ProtectedRoute exact path="/ShopList/Items" 
              component={()=>{return(<div><Items />  <Navbar /> </div>); }}
            /> */}

            <ProtectedRoute exact path="/ShopList/Items/CreateItems">
              <CreateItems />
              <Navbar />
            </ProtectedRoute>

            <ProtectedRoute exact path="/ShopList/Items">
              <Items />
              <Navbar />
            </ProtectedRoute>

            <ProtectedRoute exact path="/ShopList/Items/UpdateItems">
              <UpdateItems />
              <Navbar />
            </ProtectedRoute>
            
            <ProtectedRoute exact path="/ForgotPassword">
              <Forgot />
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
  
