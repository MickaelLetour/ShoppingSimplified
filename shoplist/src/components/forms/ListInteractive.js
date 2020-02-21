import React, {Component} from "react"
//import {NavLink} from "react-router-dom"
import {NavLink } from "react-router-dom";


//import {dbGETFetch} from "./functions"


class Listinteractive extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
        
      } 
    
    render() {
        const Done={
            backgroundColor : "#97C552"
        }

        const NotDone={
            backgroundColor : "#250463"
        }
        let selected =this.props.selected;

        selected.forEach(element => {
            //console.log(element)
        });
      return (
        <div>
          <div className="InputBox" >
            <ul className="ListDisplay">
              {this.props.items.map(item=>(
                  
              selected.includes(item.id) ? (
                <li key={item.id} 
                onClick={()=>this.props.onclickHandler(item.id)}
                className="DisplayItem"
                style={Done}
                >
                <h4>{item.name_item}</h4>
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>) :

                (<li key={item.id} 
                    onClick={()=>this.props.onclickHandler(item.id)}
                    className="DisplayItem"
                    style={NotDone}
                    >
                  <h4>{item.name_item}</h4>
                  <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>)))
              }
            </ul>
            
            </div>
            <div className="logbuttons">
              <button  
              className="forgotpw"
              type="button"
              id="Clear"
              onClick={()=>this.props.clearHandler('Clear')}>Clear List</button>

              <button 
              className="forgotpw"
              type="button"
              id="change"
              ><label><NavLink to={"/Shoplist"}>Change List</NavLink></label></button>
              
            </div>
          
         </div>
        )
    }

}

export default Listinteractive