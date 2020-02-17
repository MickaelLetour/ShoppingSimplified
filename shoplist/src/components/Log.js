import React from "react";
import Auth from "../auth.js"

import Login from "./Login.js"
/* 
import Forgot from "./Forgot.js"
import Navbar from "./Navbar.js"
import NewUser from "./NewUser.js"
import NewPassword from "./NewPassword.js"
import {dbPOSTFetch} from "./functions"
import {BrowserRouter as Router} from "react-router-dom" */
import {dbGETFetch} from "./functions"



class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            type: 'password',
            nickname: '',
            password: '',
            logged:false,
            menuOpen: false,
        }
        this.showHide = this.showHide.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this);
        
        //this.componentDidMount=this.componentDidMount.bind(this);
    }

/* 
    componentDidMount(){
        console.log("mikael "+Auth.isAuthenticated());
    } */

    showHide(){
        this.setState({
          type: this.state.type === 'password' ? 'input' : 'password'
          
        }) 
        console.log(this.state.type); 
      } 

    

      handleChange(event) {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        let nick =this.state.nickname;
        let pass= this.state.password;
        event.preventDefault();
        

        const url = `http://localhost:2112/users/pass/${nick}&${pass}`;

        //let response = dbGETFetch(url);

        dbGETFetch(url).then((res) => {
            //console.log("result "+res);
             this.setState({
                 logged: res  
             })
             //console.log(this.state.logged) 
             //let test = Auth.isAuthenticated();
             if(this.state.logged !==false){
                //console.log("this test" +test);
                //Auth.isAuthenticated();
                Auth.storeID(res);
                Auth.setLogout();
                Auth.login(()=> {
                this.props.history.push("/ShopList");
                })
                //console.log(Auth);
                //let test2 = Auth.storeID();
                //console.log("this test " +Auth.storeID(res));
             }
             
         });

         //console.log(this.state.logged);
         
           
    }  
/*     componentDidMount() {
         this.handleSubmit().then(result=> this.setState({
            logged : result,
        }))
        console.log(this.state.logged); 
    } */
    


    render() {
        return (

                <div>
                    <Login showHide={this.showHide} 
                        type={this.state.type}
                        handleChange={this.handleChange}
                        nickname={this.state.nickname}
                        password={this.state.password}
                        handleSubmit={this.handleSubmit}
                    />
                    {/* <Forgot /> */}
                    {/* <NewUser /> */}
                   {/*  <NewPassword />  */} 
                </div>

        )
    }
}

export default Log