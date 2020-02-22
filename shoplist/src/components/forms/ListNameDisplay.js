import React, {Component} from "react"



//import {dbGETFetch} from "./functions"


class ListNameDisplay extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
        
      } 


    render() {
      //console.log(this.props.lists)
        return (
          <div>
            <div className="DisplayBox" >
              <ul className="ListDisplay">
                {this.props.lists.map(list=>(
                  
                    <li key={list.id}
                    className="ListNameselect"
                    onClick={()=>this.props.listSelect(list.id)}
                    >
                    <h4>{list.name}</h4>
                    </li>
                ))}
                </ul>
               
            </div> 
            <div className="logbuttons">
                    
                    <button 
                    className="loginButton" 
                    type="button"
                    id="createlist"
                    onClick={()=>this.props.onclickHandler('createlist')}
                    >Create List</button>
                    
              </div> 
          </div>
        )
        
    }
}

export default ListNameDisplay