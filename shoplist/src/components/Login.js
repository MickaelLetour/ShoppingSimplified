import React, {Component} from "react"
import avatar from "../img/user.png"
import {createUser} from "./functions.js"


class Login extends Component {
    constructor(){
        super()
        this.state = {
          type: 'password',
          logged: false,
          email: '',
          password: '',
          name: '' 
        }
        this.showHide = this.showHide.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this);
      }
      



       showHide(){
        this.setState({
          type: this.state.type === 'password' ? 'input' : 'password'
        })  
      } 
      
    /* componentDidMount() {
        fetch("http://localhost:2112/users")
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
    } */

    handleChange(event) {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log(this.state.email);
        console.log(this.state.password);
        
        event.preventDefault();

        
        const Data = {nickname: "betatester",
        password: "ultimatepass",
        email: "one@MediaList.com",
        photo: "superphotourl"} ;

        const url = 'http://localhost:2112/users/';

        createUser(url,Data);
         /* fetch('http://localhost:2112/users/', {
            method: 'POST',
            mode: 'CORS',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },

            body: JSON.stringify({
                nickname: "betatester",
                password: "ultimatepass",
                email: "one@MediaList.com",
                photo: "superphotourl",
            }),
           
            }).then(res => res.json())
                .then(res =>{
                console.log(res);
                //return res;
            }).catch(err => err);
        
 */
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="imgContainer">
                        <img src={avatar} alt="Avatar"/>
                    </div>

                    <div>
                        <label className="Form">Email:
                            <input 
                                type="text" 
                                placeholder="Enter Email" 
                                value= {this.state.email}
                                name="email" 
                                onChange={this.handleChange}
                                required 
                            />
                        </label>
                        <div>
                            <label className="Form">Password:
                                <input 
                                    type={this.state.type} 
                                    className="Form__input" 
                                    placeholder="Enter Password" 
                                    value={this.state.pass}
                                    name="password"
                                    onChange={this.handleChange}
                                    required
                                />

                                <span className="Form__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
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