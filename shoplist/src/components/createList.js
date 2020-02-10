import React, {Component} from "react"
import avatar from "../img/user.png"
//import {dbGETFetch} from "./functions"


class createList extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <label className="Form">List Name:
                            <input 
                                type="text" 
                                placeholder="Enter Listname" 
                                value= {this.props.listname}
                                name="nickname" 
                                onChange={this.props.handleChange}
                                required 
                            />
                        </label>
                        <div>
                            <label className="Form">Items:
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

export default CreateList