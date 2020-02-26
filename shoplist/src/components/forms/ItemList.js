import React, {Component} from "react" //Imports react, allow implementation of JSX

//Item display Form
class ItemList extends Component {
    constructor(props){ //constructor prepared to receive props
        super(props) //allows the usage of props in class
          this.state = { //state field in class
            
        }
        
      } 


    render() {//render the component to the react DOM
      //console.log(this.props.mount)
        if(this.props.mount.length ===0 && this.props.munt!==undefined) //verify if user used filter to display items
        { //if it didn't return all items Stored
          return ( //render items unfiltered
            <li> {/* list child */}
              <div /* div wrapper */
              className="item" //styling class
              onClick={()=>this.props.onclickHandler(this.props.item.id)}>  {/* on click method set in parent file */}
                <h4>{this.props.item.name_item}</h4> {/* name of item */}
                <img className="imgItem" src={this.props.item.icon_ID} alt="icon" width='60vw' height="60vh"></img> {/* logo of item */}
                <label>{this.props.item.category_id}</label> {/* category of item display */}
            </div>
            {/* auqntity of items preparation to implement */}
            {/* <input className="Quantity"              
                    type="text" pattern="[0-9]*" 
                    placeholder="Quantity/Numeric" 
                    value= {this.props.quantity}
                    name={this.props.item.id} 
                    onChange={this.props.handleChange}
                    required 
                /> */}
            </li> 
          )
        }
        else { //same as above but with item filter on
              return (
                <li><div className="item" onClick={()=>this.props.onclickHandler(this.props.item.id)}>
                    <h4>{this.props.item.name_item}</h4>
                    <img className="imgItem" src={this.props.item.icon_ID} alt="icon" width='60vw' height="60vh"></img>
                    <label>{this.props.item.category_id}</label>
                </div>
               {/*  <input className="Quantity"
                        type="text" pattern="[0-9]*" 
                        placeholder="Quantity/Numeric" 
                        value= {this.props.quantity}
                        name={this.props.item.id} 
                        onChange={this.props.handleChange}
                        required 
                    /> */}
                </li> 
              )
        }
      
    }
}

export default ItemList