import React, {Component} from "react"  //Imports react, allow implementation of JSX
import {NavLink} from "react-router-dom" //imports NavLink component from react router, allows on press link

//Item creation and update form.
class DisplayList extends Component { //used a class but could have been a function since it wont use state or methods
    constructor(props){
        super(props) // allow to access parent file proporties
          this.state = { //opens state field. Empty in this case
            
        }
        
      } 
    
    render() { //render the component to the react DOM
      //console.log(this.props.items)
      return ( //render info
        <div> {/* Div wrap for the render info */}
          <div className="DisplayBox" > {/* Item Wrapper */}
            <ul className="ListDisplay"> {/* Opens unorded list of Items */}
              {this.props.items.map(item=>( //similar to a for, goes through the json array to retrieve info of the item
                <li key={item.id}   //stores item id retrieved form the DB and sores it as chield Key
                className="DisplayItem" //classname used for css styling
                >
                <h4>{item.name_item}</h4> {/* displays item name */}
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li> //item icon retrieved from DB
              ))}
            </ul>
          </div>

          <div className="logbuttons"> {/* Button Wrapper */}
            <button /* button tag */
              type="button" //it's type, turning it clicable
              className="secondary"> {/* class for styling */}
              <NavLink to={"/Shoplist"}>Cancel</NavLink> {/* If pressed will redirect user to ../Shoplist */}
            </button> 

            <button 
              className="loginButton" 
              type="button"
              id="updateList" //setting id for the buton to implement on click action
              onClick={()=>this.props.onclickHandler('updateList')} //on click method set in parent component
              >Update</button>
            
          </div> {/* wrapper close */}
         </div> /* return wrapp close */
        )
    }

}

export default DisplayList //exports class for import in parent file