import React, {Component} from "react"


//import {dbGETFetch} from "./functions"


class ListName extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    render() {
        return (
             <div className="ListName">
                <form onSubmit={this.props.handleSubmitName}>
                    <div>
                        <label className="Form">List Name:
                            <input 
                                type="text" 
                                placeholder="Enter Listname" 
                                value= {this.props.listname}
                                name="listname" 
                                onChange={this.props.handleChange}
                                required 
                            />
                        </label>
                        <div className="logbuttons">
                            <button type="button" className="forgotpw">Cancel</button>
                            <button 
                            className="loginButton" 
                            type="submit"
                            >Submit</button>
                        </div>
                        </div>
                    </form>
            </div>  
        )
    }
}

export default ListName