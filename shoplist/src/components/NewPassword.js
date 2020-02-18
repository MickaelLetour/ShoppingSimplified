import React, {Component} from "react";
import {dbPOSTFetch} from "./functions";

let params = new URLSearchParams(document.location.search.substring(1));//get information on url
let token = params.get("token");

class NewPassword extends Component {
    constructor(){
        super()
        this.state = {
          type: 'password',
          logged: false,
          password: '',
          confirmPassword:'',
          token: token
        }
        this.showHide = this.showHide.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
       showHide(){
        this.setState({
          type: this.state.type === 'password' ? 'input' : 'password'
        })  
      } 

    handleChange(event) {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log(this.state.token);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);  
        
        event.preventDefault();//cancel the default evenemement

        if (this.state.confirmPassword===this.state.password){//verify if the 2 password are the sames
            const url = 'http://localhost:2112/forgot/update/';
            const Data = 
                {
                    password: this.state.password,
                    token: this.state.token
                };
            dbPOSTFetch(url,Data);//Create a new user
        }
        else {
            console.log("password different confirmPassword");
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>{/* method on submit */}
                    <h2>Update Password</h2>
                    <hr/>
                    <div>
                        <label className="Form">Password:
                            <input 
                                type={this.state.type} 
                                className="Form__input" 
                                placeholder="Enter Password" 
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                                required
                            />

                        </label>
                    </div>
                    <div>
                        <label className="Form">Confirm Password:
                            <input 
                                type={this.state.type} 
                                className="Form__input" 
                                placeholder="Confirm Password" 
                                value={this.state.confirmPassword}
                                name="confirmPassword"
                                onChange={this.handleChange}
                            />

                            <span className="Form__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                        </label>
                    </div> 
                    <div className="logbuttons">
                            <button 
                            className="loginButton" 
                            type="submit"
                            >Submit</button>
                    </div>
                    <hr/>
                </form>
            </div>
        )
    }
}

export default NewPassword