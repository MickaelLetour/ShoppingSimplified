import React, {Component} from "react"
import avatar from "../img/user.png"
//import {showHide} from "./functions.js"


class Login extends Component {
    constructor(){
        super();
        this.state = {
          type: 'password'
        }
        this.showHide = this.showHide.bind(this);
      }
      



       showHide(){
        this.setState({
          type: this.state.type === 'password' ? 'input' : 'password'
        })  
      } 
      

    render() {
        return (
            <div>
                <form>
                    <div className="imgContainer">
                        <img src={avatar} alt="Avatar"/>
                    </div>

                    <div>
                        <label className="Form">Username:
                            <input type="text" placeholder="Enter Username" name="uname" required />
                        </label>
                        <div>
                            <label className="Form">Password:
                                <input type={this.state.type} className="Form__input" placeholder="Enter Password" />
                                <span className="Form__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                            </label>
                        </div>
                        <div className="logbuttons">
                            <button type="button" className="forgotpw">Forgot Password?</button>
                            <button className="loginButton" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login