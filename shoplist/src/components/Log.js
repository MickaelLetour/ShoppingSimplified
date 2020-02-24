import React from "react"; //Imports react, allow implementation of JSX
import Auth from "../auth.js" //imports local storage class auth
import Login from "./forms/Login.js" //ilmports login component
import {Redirect} from "react-router-dom" //Import Redirect component
import {dbGETFetch} from "./functions" //import functions


//login management component
//loads login form component
class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            type: 'password', //display type of input
            nickname: '', // stores usernickname
            password: '', //store user password
            logged: false,
        }
        //methods used in the component
        this.showHide = this.showHide.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }

    //show or hides password input
    showHide(){
        this.setState({ //updates state acording to current value
          type: this.state.type === 'password' ? 'input' : 'password'
          
        }) 
        //console.log(this.state.type); 
      } 

      handleChange(event) { //stores input target form values on change and updates
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) { //sends form on user login press
        let nick =this.state.nickname;
        let pass= this.state.password;
        event.preventDefault(); //prevents default submit behavior
        

        const url = `http://localhost:2112/users/pass/${nick}&${pass}`;

        //let response = dbGETFetch(url);
        //verify if data inserted by user was correct
        dbGETFetch(url).then((res) => {

             if(res!==false){ //if user inserted good username and password
                //console.log("this test" +test);
                //Auth.isAuthenticated();
                Auth.storeID(res);//store user id on Auth
                Auth.setLogout(); //set value of user to logged out
                Auth.login(()=> { //Sets user in Auth to loged in
                    this.setState({ //sets state to logged in
                        logged: true  
                    })
                /* this.props.history.push("/ShopList");  other way to change page*/
                })
                
             }

             else { //if data inserted by user was wrong
                alert("Bad Username or Password!");
             }
             
         });

    }  
    


    render() {//render the component to the react DOM
        if(this.state.logged !==true){ //if user is logged off
            return (//render info
                <div>{/* wrapper div */}
                    <Login 
                        showHide={this.showHide} //loads Login component
                        type={this.state.type} //sends type of input as props
                        handleChange={this.handleChange} //sends handlechange as props
                        nickname={this.state.nickname} //send nickname as props
                        password={this.state.password} //sends password as props
                        handleSubmit={this.handleSubmit} //sends handlesubmit as props
                    />
                </div>
            )
        }
        else{ //if user is logged in
            return <Redirect push to="/ShopList" /> //send user to "../ShopList"
        }
    }
}

export default Log