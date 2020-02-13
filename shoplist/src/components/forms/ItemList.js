import React, {Component} from "react"


//import {dbGETFetch} from "./functions"


class ItemList extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    
    render() {
        //console.log(this.props.item)
        return (
                <li><div className="item">
                    <h4>{this.props.item.name}</h4>
                    <img src={this.props.item.icon_ID} alt="icon" width='60vw' height="60vh"></img>
                    <label>{this.props.item.category_id}</label>
                </div></li>
           
        )
    }
}

export default ItemList