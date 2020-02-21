import React, {Component} from "react"
import {NavLink} from "react-router-dom"

//import {dbGETFetch} from "./functions"


class ListName extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
        //this.props.categorie.map(cat =>  console.log(cat.id) )
      }



    render() {
        // console.log(this.props.provisional)


        let status=false;
        
        if(this.props.provisional.length !==0)
            status= true;
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
                                pattern= "[A-Za-z0-9]+"
                                required 
                            />
                        </label>

                        <label className="Form">Item Categorie to Add:
                            <input list="categorie" 
                                name="ncate" 
                                value={this.props.ncate} 
                                onChange={this.props.handleChange}
                                placeholder="Type corresponding Number or Name"
                                pattern= "[A-Za-z0-9]+"
                                />
                            <datalist id="categorie">
                            {this.props.categorie.map(cat =>  (
                            <option key={cat.id_category} value={cat.id_category}>{cat.name}</option>
                            ))}
                            </datalist>
                         </label>
                         <div className="InputBox" >
                             <ul className="ListDisplay">
                             { status ? (this.props.provisional.map(prov=>(
                                <li key={prov.id}
                                className="DisplayItem" 
                                onClick={()=>this.props.onclickHandler(prov.id)}>
                                <img src={prov.icon_ID} alt="icon" width='55px' height="55px"
                                    
                                ></img></li>
                             ))) : (<img src="https://image.flaticon.com/icons/svg/916/916912.svg" alt="icon" width='100%' height="100%"></img>)
                                 
                             }
                          </ul>  
                        </div> 

                        <div className="logbuttons">
                            <button type="button" className="forgotpw"><NavLink to={"/Shoplist"}>Cancel</NavLink></button>
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