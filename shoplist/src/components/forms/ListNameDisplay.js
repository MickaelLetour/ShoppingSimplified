import React, {Component} from "react" //Imports react, allow implementation of JSX

//displays existing listNames and makes the name clickable
class ListNameDisplay extends Component {
  constructor(props){ //constructor prepared to receive props
    super(props) //allows the usage of props in class
      this.state = { //state field in class
        
    }
  }


    render() {//render the component to the react DOM
      //console.log(this.props.lists)
        return (//render info
          <div> {/* wrapper */}
            <div className="DisplayBox" > {/* field that will display all list names */}
              <ul className="ListDisplay"> {/* unordered list of list names */}
                {this.props.lists.map(list=>( /* opens json object and reads all lists */
                  
                    <li key={list.id} //assign key with the corresponding list id
                    className="ListNameselect" //styling class
                    onClick={()=>this.props.listSelect(list.id)} //onclick method sotred in parent component
                    >
                    <h4>{list.name}</h4> {/* list name display */}
                    </li>
                ))}
                </ul>
               
            </div> 
              <div className="logbuttons"> {/* button wrapper */}  
                <button 
                className="loginButton" 
                type="button"
                id="createlist" //button that allows user to acess create new list form
                onClick={()=>this.props.onclickHandler('createlist')}
                >Create List</button>    
              </div> 
          </div>
        )
        
    }
}

export default ListNameDisplay