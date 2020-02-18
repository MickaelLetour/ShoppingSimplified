import React, {Component} from "react"
import {dbPOSTFetch} from "./functions"
import {NavLink} from "react-router-dom"

class Forgot extends Component {
    constructor(){
        super()
        this.state = {
          logged: false,
          email: '',
          nickname: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    handleChange(event) {//change value of state with value of form
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {//send nickame and email for forgot password
        console.log(this.state.nickname);
        console.log(this.state.email); 
        
        event.preventDefault();

        const url = 'http://localhost:2112/users/forgot/';// the route for this request
        const Data = 
            {
                nickname: this.state.nickname,
                email: this.state.email,
            };
        dbPOSTFetch(url,Data);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> {/* method on submit */}
                    <h2>Forgot Password</h2>
                    <hr/>
                    <div>
                        <label className="Form">Nickname:
                            <input 
                                type="text" 
                                placeholder="Enter Nickname" 
                                value= {this.state.nickname}
                                name="nickname" 
                                onChange={this.handleChange}
                                required 
                            />
                        </label>
                    </div>
                    <div>
                        <label className="Form">Email:
                            <input 
                                type="email" 
                                placeholder="Enter Email" 
                                value= {this.state.email}
                                name="email" 
                                onChange={this.handleChange}
                                required 
                            />
                        </label>
                    </div>
                    
                    <div className="logbuttons">
                            <button 
                            className="loginButton" 
                            type="submit"
                            >Submit</button>
                    </div>
                    <hr/>
                    <button type="button" className="loginButton"><NavLink to={"/Login"}>Sign In</NavLink></button> {/* redirect on click */} 
                </form>
            </div>
        )
    }
}

export default Forgot