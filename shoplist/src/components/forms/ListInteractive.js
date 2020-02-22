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
            backgroundColor : "#fc1d00b6"
        }
        let selected =this.props.selected;

        selected.forEach(element => {
            //console.log(element)
        });
      return (
        <div>
          <div className="DisplayBox" >
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
              className="secondary"
              type="button"
              id="Clear"
              onClick={()=>this.props.clearHandler('Clear')}>Clear List</button>

              <button 
              className="loginButton"
              type="button"
              id="change"
              ><NavLink to={"/Shoplist"} className="textButtonsColor" >Change List</NavLink></button>
              
            </div>
          
         </div>
        )
    }

}

export default Listinteractive