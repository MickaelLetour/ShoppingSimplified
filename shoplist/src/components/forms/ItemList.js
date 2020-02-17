import React, {Component} from "react"


//import {dbGETFetch} from "./functions"


class ItemList extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
        
      } 


    
    render() {
      //console.log(this.props.mount.length)
        if(this.props.mount.length ===0 )
        {
          return (
            <li><div className="item" onClick={()=>this.props.onclickHandler(this.props.item.id)}>
                <h4>{this.props.item.name}</h4>
                <img src={this.props.item.icon_ID} alt="icon" width='60vw' height="60vh"></img>
                <label>{this.props.item.category_id}</label>
            </div></li> 
          )
        }
        else {
              return (
                <li><div className="item" onClick={()=>this.props.onclickHandler(this.props.item.id)}>
                    <h4>{this.props.item.name}</h4>
                    <img src={this.props.item.icon_ID} alt="icon" width='60vw' height="60vh"></img>
                    <label>{this.props.item.category_id}</label>
                </div></li> 
              )
        }
      
    }
}

export default ItemList