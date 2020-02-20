import React, {Component} from "react"
//import {NavLink} from "react-router-dom"
//import {Redirect } from "react-router-dom";


//import {dbGETFetch} from "./functions"


class SelectActives extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
        
      } 
    
    render() {
      //console.log(this.props.items)
      //console.log(this.props.active)

      const selectedcolor={
        backgroundColor : "#97C552"
     }

     const activecolor={
        backgroundColor : "#f5ad28"
     }

     const deactive={
        backgroundColor : "white"
     }


      let selected = this.props.selected;
      let active = this.props.active;
      return (
        <div>
          <div className="InputBox" >
            <ul className="ListDisplay">
                {this.props.items.map(item=>( 
                selected.includes(item.id) ? (
                active.includes(item.id) ? (
                <li key={item.id} 
                onClick={()=>this.props.onclickHandler(item.id)}
                className="DisplayItem"
                style={selectedcolor}
                >
                <h4>{item.name_item}</h4>
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>) :

                (<li key={item.id} 
                    onClick={()=>this.props.onclickHandler(item.id)}
                    className="DisplayItem"
                    style={selectedcolor}
                >
                <h4>{item.name_item}</h4>
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>)) : 
                
                (active.includes(item.id) ? (
                    <li key={item.id} 
                    onClick={()=>this.props.onclickHandler(item.id)}
                    className="DisplayItem"
                    style={activecolor}
                    >
                    <h4>{item.name_item}</h4>
                    <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>) :
    
                    (<li key={item.id} 
                        onClick={()=>this.props.onclickHandler(item.id)}
                        className="DisplayItem"
                    >
                    <h4>{item.name_item}</h4>
                    <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>)))

                

            )}
            </ul>
            
            </div>
            <div className="logbuttons">
            <button type="button" className="forgotpw">Delete</button>
            <button 
            className="loginButton" 
            type="button"
            id="Activate"
            onClick={()=>this.props.send('Activate')}
            >Activate List</button>
          </div>
         </div>
        )
    }

}

export default SelectActives