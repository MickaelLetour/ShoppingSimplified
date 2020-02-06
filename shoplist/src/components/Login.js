import React, {Component} from "react"
import avatar from "../img/user.png"
import {dbGETFetch} from "./functions"


class Login extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="imgContainer">
                        <img src={avatar} alt="Avatar"/>
                    </div>

                    <div>
                        <label className="Form">Username:
                            <input 
                                type="text" 
                                placeholder="Enter Username" 
                                value= {this.props.nickname}
                                name="nickname" 
                                onChange={this.props.handleChange}
                                required 
                            />
                        </label>
                        <div>
                            <label className="Form">Password:
                                <input 
                                    type={this.props.type} 
                                    className="Form__input" 
                                    placeholder="Enter Password" 
                                    value={this.props.pass}
                                    name="password"
                                    onChange={this.props.handleChange}
                                    required
                                />

                                <span className="Form__show" onClick={this.props.showHide}>{this.props.type === 'input' ? 'Hide' : 'Show'}</span>
                            </label>
                        </div>
                        <div className="logbuttons">
                            <button type="button" className="forgotpw">Forgot Password?</button>
                            <button 
                            className="loginButton" 
                            type="submit"
                            >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login