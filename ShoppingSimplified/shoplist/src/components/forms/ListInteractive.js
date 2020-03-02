import React, {Component} from "react" //Imports react, allow implementation of JSX
import {NavLink } from "react-router-dom"; //imports NavLink component from react router, allows on press link

//Active list display form
//Designed to change item background change on click
//Parent ActiveList
class Listinteractive extends Component {
  constructor(props){ //constructor prepared to receive props
    super(props) //allows the usage of props in class
      this.state = { //state field in class
        
    }
  } 
    
    render() { //render the component to the react DOM
        const Done={ //styling var, sotres a background color
            backgroundColor : "#97C552"
        }

        const NotDone={ //styling var, sotres a background color
            backgroundColor : "#fc1d00b6"
        }
        let selected =this.props.selected; //all items clicked by user

        selected.forEach(element => {
            //console.log(element)
        });

      return (//render info
        <div> {/* wrapper div */}
          <div className="DisplayBox" > 
            <ul className="ListDisplay"> {/* unordered list of items */}
              {this.props.items.map(item=>( //opens all items available
                  
              selected.includes(item.id) ? ( //verify if the item zas clicked by user
                <li key={item.id} /* assigns item id to its chield key */
                onClick={()=>this.props.onclickHandler(item.id)} //on click metod defined in parent file, recovers item id
                className="DisplayItem" //general styling class
                style={Done} //defines background color of item
                >
                <h4>{item.name_item}</h4> {/* item name display */}
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>)/* item icon display */ : //else statement

                (<li key={item.id} //same as the before but with diferent background
                    onClick={()=>this.props.onclickHandler(item.id)}
                    className="DisplayItem"
                    style={NotDone}
                    >
                  <h4>{item.name_item}</h4>
                  <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>)))
              }
            </ul>
            
            </div> 
            <div className="logbuttons"> {/* button wrapper */}
              <button  
              className="secondary" //styling class
              type="button"
              id="Clear"
              onClick={()=>this.props.clearHandler('Clear')}>Clear List</button> {/* onclick method set on parent page, resets selected */}

              <button 
              className="loginButton"
              type="button"
              id="change"
              ><NavLink to={"/Shoplist"} className="textButtonsColor" >Change List</NavLink></button> {/* Sends user to "../Shoplist" */}
              
            </div>
          
         </div>
        )
    }

}

export default Listinteractive