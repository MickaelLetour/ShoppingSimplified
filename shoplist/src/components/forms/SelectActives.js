import React, {Component} from "react" //Imports react, allow implementation of JSX

//Pick items to use on the next market run
class SelectActives extends Component {
  constructor(props){ //constructor prepared to receive props
    super(props) //allows the usage of props in class
      this.state = { //state field in class
        
    }
  } 

    
    render() {//render the component to the react DOM
      //console.log(this.props.items)
      //console.log(this.props.active)

      const selectedcolor={ //styling var, sotres a background color
        backgroundColor : "#97C552"
     }

     const activecolor={ //styling var, sotres a background color
        backgroundColor : "#f5ad28"
     }


      let selected = this.props.selected; //clicked items from current list
      let active = this.props.active; //active items previously saved
      return (//render info
        <div> {/* wrapper div */}
          <div className="DisplayBox" >
            <ul className="ListDisplay"> {/* list of items to display */}
                {this.props.items.map(item=>( //reads all items json object
                selected.includes(item.id) ? ( //if the item is selected by user
                active.includes(item.id) ? ( //if item was active in DB
                <li key={item.id} //stores item crresponding id in key
                onClick={()=>this.props.onclickHandler(item.id)} //clickable item. onclickhandler is set on parent component
                className="DisplayItem" //styling class
                style={selectedcolor} //if selected
                >
                <h4>{item.name_item}</h4> {/* item name display */}
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>) /* logo of item */: //else statment for active

                (<li key={item.id} /* same as before */
                    onClick={()=>this.props.onclickHandler(item.id)}
                    className="DisplayItem"
                    style={selectedcolor} //still same color becouse it verifyes if user has selected it
                >
                <h4>{item.name_item}</h4>
                <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>)) : //else statement for selected
                
                (active.includes(item.id) ? ( //if item was active in DB
                    <li key={item.id} //same as before
                    onClick={()=>this.props.onclickHandler(item.id)} 
                    className="DisplayItem"
                    style={activecolor} //if item is active and DB and not selected
                    >
                    <h4>{item.name_item}</h4>
                    <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>) : //else statment for active
    
                    (<li key={item.id} 
                        onClick={()=>this.props.onclickHandler(item.id)}
                        className="DisplayItem" //since it was not active in database or selected by user has only normal styling
                    >
                    <h4>{item.name_item}</h4>
                    <img src={item.icon_ID} alt="icon" width='55px' height="55px"></img></li>)))

                

            )}
            </ul>
            
            </div>
            <div className="logbuttons"> {/* button wrapper */}
            <button type="button" className="secondary">Delete</button> {/* not active */}
            <button 
              className="loginButton" 
              type="button"
              id="Activate"
              onClick={()=>this.props.send('Activate')} //executes clickhandler stored in parent component
              >Activate List</button>
          </div>
         </div>
        )
    }

}

export default SelectActives