import React, {Component} from "react"


//import {dbGETFetch} from "./functions"


class ItemList extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    render() {
        return (
            
                <li><div>
                    {this.props.item.name}
                </div></li>
           
        )
    }
}

export default ItemList