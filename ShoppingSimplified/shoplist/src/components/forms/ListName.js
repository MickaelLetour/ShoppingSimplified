import React, {Component} from "react" //Imports react, allow implementation of JSX
import {NavLink} from "react-router-dom" //imports NavLink component from react router, allows on press link


//List name assignment form
//Filter items to click and add
class ListName extends Component {
    constructor(props){ //constructor prepared to receive props
      super(props) //allows the usage of props in class
        this.state = { //state field in class
          
      }
    }



    render() { //render the component to the react DOM
        // console.log(this.props.provisional)
        let status=false;
        
        if(this.props.provisional.length !==0) //verifies if user has allready selected any items or not
            status= true;
        return (//render info
             <div className="ListName"> {/* div Wrapper */}
                <form onSubmit={this.props.handleSubmitName}> {/* form with it's submit handler set on parent page */}
                    <div> {/* input wrapper */}
                        <label className="Form">List Name: 
                            <input /* input for List name */
                                type="text" /* type of input */
                                placeholder="Enter Listname" /* Text displayed in field when empty */
                                value= {this.props.listname} //stores value written 
                                name="listname" /* name of input */
                                onChange={this.props.handleChange} /* registers all charecters inserted in input. on change set in parent component */
                                pattern= "[A-Za-z0-9]+" /* allows user to type only Letters and Numbers, no special Charecters */
                                autoComplete="off" //Autocomplete is set to off
                                required //Its reauired to type something
                            />
                        </label>

                        <label className="Form">Item Categorie to Add:
                            <input list="categorie" //input that allows user to choose a category from a list
                                name="ncate" //name of input
                                value={this.props.ncate}  //value of input writen, Checks for ids and Names
                                onChange={this.props.handleChange} //saves charecters written
                                placeholder="Type corresponding Number or Name" //text on input field when empty
                                pattern= "[A-Za-z0-9]+" /* allows user to type only Letters and Numbers, no special Charecters */
                                autoComplete="off" //Autocomplete is set to off
                                />
                            <datalist id="categorie"> {/* list of categories charged from DB */}
                            {this.props.categorie.map(cat =>  ( //Similar to a for, reads all json object
                            <option key={cat.id_category} value={cat.id_category}>{cat.name}</option> /* displays each category by name and Id */
                            ))}
                            </datalist>
                         </label>
                         <div className="InputBox" > {/* display selected itemsfield */}
                             <ul className="ListDisplay"> {/* unordered list of items */}
                             { status ? (this.props.provisional.map(prov=>( //if status=== true displays items
                                <li key={prov.id}
                                className="DisplayItem" 
                                onClick={()=>this.props.onclickHandler(prov.id)}> {/* items displayed are clickable. onclick Set in parent component */}
                                <img src={prov.icon_ID} alt="icon" width='55px' height="55px" //logo of item
                                    
                                ></img></li>
                             ))) : (<img src="https://image.flaticon.com/icons/svg/916/916912.svg" alt="icon" width='100%' height="100%"></img>)
                                    /* if status===false display image */
                             }
                          </ul>  
                        </div> {/* wrapper close */}
                        <h6>Click on Items to Select/Deselect</h6> {/* small instruction for user */}
                        <div className="logbuttons"> {/* buttons wrapper */}
                            <button type="button" 
                                className="secondary"> {/* styling class */}
                                <NavLink to={"/Shoplist"}>Cancel</NavLink> {/* send user to "../Shoplist" on Click */}
                            </button>
                            <button 
                            className="loginButton" 
                            type="submit" //button type, executes form and if all necessary information is valid executes fetch
                            >Submit</button>
                        </div>
                        </div>
                    </form>
            </div>  
        )
    }
}

export default ListName