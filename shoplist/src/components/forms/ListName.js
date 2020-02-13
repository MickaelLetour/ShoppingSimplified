import React, {Component} from "react"


//import {dbGETFetch} from "./functions"


class ListName extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
        //this.props.categorie.map(cat =>  console.log(cat.id) )
      }

    
      

    render() {
        //console.log(this.props.categorie)
        return (
             <div className="ListName">
                <form onSubmit={this.props.handleSubmitName}>
                    <div>
                        <label className="Form">List Name:
                            <input 
                                type="text" 
                                placeholder="Enter Listname" 
                                value= {this.props.listname}
                                name="listname" 
                                onChange={this.props.handleChange}
                                required 
                            />
                        </label>

                            <label className="Form">Item Categorie to Add:
                            <input 
                                list="categorie" 
                                name="ncate" 
                                value={this.props.ncate} 
                                onChange={this.props.handleChange}
                                />
                            <datalist id="categorie">
                            {this.props.categorie.map(cat =>  (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                            </datalist>
                         </label>
                            

                        <div className="logbuttons">
                            <button type="button" className="forgotpw">Cancel</button>
                            <button 
                            className="loginButton" 
                            type="submit"
                            >Submit</button>
                        </div>
                        </div>
                    </form>
            </div>  
        )
    }
}

export default ListName