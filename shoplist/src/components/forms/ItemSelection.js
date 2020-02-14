import React, {Component} from "react"


//import {dbGETFetch} from "./functions"


class ItemSelection extends Component {
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
            <div className="InputBox">
                <img src="https://image.flaticon.com/icons/svg/916/916912.svg" alt="icon" width='100%' height="100%"></img>
            </div> 
          )
        }
        else {
              return (
                <div className="InputBox">
                    <li><img src="" alt="icon" width='30vw' height="30vh"></img></li>
                </div>
              )
        }
      
    }
}

export default ItemSelection