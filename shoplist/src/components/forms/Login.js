import React, {Component} from "react" //Imports react, allow implementation of JSX
import avatar from "../../img/user.png" //avatar image set by default
import {NavLink} from "react-router-dom" //imports NavLink component from react router, allows on press link

//login form
class Login extends Component {
    constructor(props){ //constructor prepared to receive props
        super(props) //allows the usage of props in class
          this.state = { //state field in class
            
        }
      } 

    render() { //render the component to the react DOM
        return (//render info
            <div> {/* wrapper div */}
                <form id="loginform" onSubmit={this.props.handleSubmit} autoComplete="on"> {/* form for login, subimithandler set on parent component */}
                    <div className="imgContainer">
                        <img src={avatar} alt="Avatar"/> {/* avatar display */}
                    </div>

                    <div> {/* input wrapper */}
                        <label className="Form">Username:
                            <input 
                                type="text" 
                                placeholder="Enter Username" //text in input if empty
                                className="Form__input"  //styling class
                                value= {this.props.nickname}  //stores value written in input
                                name="nickname" //input name
                                onChange={this.props.handleChange} //stores changes on input
                                pattern= "[A-Za-z0-9]+" //only allows user to write numbers and letters
                                autoComplete="on" //autocomplete feature on
                                required  //field reauired
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
                                    pattern= "[A-Za-z0-9]+"
                                    autoComplete="off" //everything teh same as above with exception to autocomplete
                                    required
                                />
                                
                                <span className="Form__show" //if showhide is eqaul to input password is not visible, if it's set to password it shows and changes image accordingly
                                onClick={this.props.showHide}>{this.props.type === 'input' ? <img src="https://img.icons8.com/material-sharp/24/000000/preview-pane.png" alt='Hide' width="24" /> : 
                                <img src="https://img.icons8.com/material-rounded/24/000000/hide.png" alt="show" width="24" />}</span>
                            </label>
                        </div>
                        <div className="logbuttons"> {/* button wrapper */}
                            <button type="button" 
                                className="forgotpw">
                                <NavLink to={"/Login/Forgot"}>Forgot Password?</NavLink></button> {/* sends user to "../Login/Forgot" when pressed */}
                            <button 
                            className="loginButton" 
                            type="submit" /* submits form and if everything is valid sends fetch request */
                            onClick={this.props.headerHandler} //header handler set on parent component (routes)
                            >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login