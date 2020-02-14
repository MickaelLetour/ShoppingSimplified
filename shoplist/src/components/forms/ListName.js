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
         console.log(this.props.provisional)
        /*if(this.props.provisional.length !==0)
        {
            this.props.provisional.map(obj => 
               
                
             )
        } */
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
                                required 
                            />
                        </label>

                        <label className="Form">Item Categorie to Add:
                            <input list="categorie" 
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
                         <div className="InputBox" >
                             { status ? (this.props.provisional.map(prov=>(
                                <li onClick={()=>this.props.onclickHandler(prov.id)}>
                                <img src={prov.icon_ID} alt="icon" width='30%' height="30%"
                                    key={prov.id+1000000000}
                                ></img></li>
                             ))) : (<img src="https://image.flaticon.com/icons/svg/916/916912.svg" alt="icon" width='100%' height="100%"></img>)
                                 
                         /*         return (<li onClick={()=>this.props.onclickHandler(prov.id)}>
                                     <img src={prov.icon_ID} alt="icon" width='30%' height="30%"
                                    key={prov.id}
                                 ></img></li>
                             ) */
                             }
                            
                        </div> 

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