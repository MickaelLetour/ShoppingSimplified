import React, {Component} from "react"
import avatar from "../img/user.png"
import {NavLink} from "react-router-dom"
//import {dbGETFetch} from "./functions"


class Login extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} autoComplete="on">
                    <div className="imgContainer">
                        <img src={avatar} alt="Avatar"/>
                    </div>

                    <div>
                        <label className="Form">Username:
                            <input 
                                type="text" 
                                placeholder="Enter Username"
                                className="Form__input"  
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
                                    autoComplete="off"
                                />

                                <span className="Form__show" onClick={this.props.showHide}>{this.props.type === 'input' ? <img src="https://img.icons8.com/material-sharp/24/000000/preview-pane.png" alt='Hide' width="24" /> : <img src="https://img.icons8.com/material-rounded/24/000000/hide.png" alt="show" width="24" />}</span>
                            </label>
                        </div>
                        <div className="logbuttons">
                            <button type="button" className="forgotpw"><NavLink to={"/Login/Forgot"}>Forgot Password?</NavLink></button>
                            <button 
                            className="loginButton" 
                            type="submit"
                            onClick={this.props.headerHandler}
                            >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login