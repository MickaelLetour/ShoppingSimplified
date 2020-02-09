import React, {Component} from "react"
import {dbPOSTFetch} from "./functions"
import Auth from "../auth.js"

class NewUser extends Component {
    constructor(){
        super()
        this.state = {
          type: 'password',
          logged: false,
          email: '',
          password: '',
          confirmPassword:'',
          nickname: '',
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

      componentDidMount(){
          console.log(Auth.button())
      }

    handleChange(event) {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
       /*  console.log(this.state.nickname);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);   */
        
        event.preventDefault();

        if (this.state.confirmPassword===this.state.password){
            const url = 'http://localhost:2112/users/';
            const Data = 
                {
                    nickname: this.state.nickname,
                    email: this.state.email,
                    password: this.state.password,
                    photo: ""
                };
            dbPOSTFetch(url,Data)

            .then((res) => {
                Auth.setRegister();
                this.props.history.push("/"); 
                           
            })
        }
        else {
            console.log("password different confirmPassword");
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign UP</h2>
                    <hr/>
                    <div>
                        <label className="Form">Nickname:
                            <input 
                                type="text" 
                                placeholder="Enter Nickname" 
                                value= {this.state.nickname}
                                name="nickname" 
                                onChange={this.handleChange}
                                //required 
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

export default NewUser