import React, {Component} from "react"
import avatar from "../img/user.png"

//import {dbGETFetch} from "./functions"


class CreateList extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    render() {
        return (
/*             <div>
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
                        </label> */
                        <div>
                            <label className="Form">Items:
{/*                                 <input 
                                
                                type="checkbox" 
                                checked={this.props.item.} 
                                //onChange={() => props.handleChange(props.item.id)}
                                 /> */}
                                <p >{this.props.item.name}</p>
                                />
                                
                            </label> 
                        {/*</div>
                         <div className="logbuttons">
                            <button type="button" className="cancel">Cancel</button>
                            <button 
                            className="SubmitButton" 
                            type="submit"
                            >Submit</button>
                        </div>
                    </div>
                </form>*/}
            </div> 
        )
    }
}

export default CreateList