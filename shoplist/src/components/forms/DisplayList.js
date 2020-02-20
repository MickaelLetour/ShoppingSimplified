import React, {Component} from "react"
//import {NavLink} from "react-router-dom"
//import {Redirect } from "react-router-dom";


//import {dbGETFetch} from "./functions"


class DisplayList extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
        
      } 
    
    render() {
      //console.log(this.props.items)
      return (
        <div>
          <div className="InputBox" >
            <ul className="ListDisplay">
              {this.props.items.map(item=>(
                <li key={item.id}
                className="DisplayItem"
                >
                <h4>{item.name_item}</h4>
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>
              ))}
            </ul>
            
            </div>
            <div className="logbuttons">
            <button type="button" className="forgotpw">Delete</button>
            <button 
            className="loginButton" 
            type="button"
            id="updateList"
            onClick={()=>this.props.onclickHandler('updateList')}
            >Update</button>
          </div>
         </div>
        )
    }

}

export default DisplayList