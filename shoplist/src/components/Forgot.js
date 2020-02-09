import React, {Component} from "react"
import {dbPOSTFetch} from "./functions"

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
      
    handleChange(event) {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log(this.state.nickname);
        console.log(this.state.email); 
        
        event.preventDefault();

        const url = 'http://localhost:2112/users/forgot/';
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
                <form onSubmit={this.handleSubmit}>
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
                </form>
            </div>
        )
    }
}

export default Forgot