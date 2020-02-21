import React, {Component} from "react"
import Modal from "react-modal"
import {NavLink, Redirect} from "react-router-dom"
//import {RadioGroup, Radio} from 'react-radio-group'
/* import avatar from "../img/user.png"
import {dbGETFetch} from "./functions" */


class CreateItem extends Component {
    constructor(props){
        super(props)
          this.state = {
            category : "",
            icon : "",
            name :"",
            category_id :"",
            icon_id:"",
            icon_selected:"",
            clicked:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        fetch("http://localhost:2112/categories" ,{// get all categories of database
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ category : res})
            return res;
        })

        fetch("http://localhost:2112/iconsNotUsed" ,{//get all icons not used by items 
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ icon : res})
            return res;
        })
        
        Modal.setAppElement('body')//relate modal on body
        }

        handleSubmit(event) {// method on submit for create item
            event.preventDefault();
            const data = 
                {
                    category_id:this.state.category_id,
                    icon_id: this.state.icon_id,
                    name: this.state.name
                };
            //console.log(data);
            fetch("http://localhost:2112/items", {
                method : 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>res.json()) 
        
            .catch(err => err)
        
            .then(res=>{
                //console.log(res);
                //console.log("Item Created");
                this.setState({clicked : true})
            })
        }

        openModal() {// change the state for open modal
            this.setState({modalIsOpen: true});
        }
         
        closeModal() {//close the modal and get informations of icon with an id selected
            this.setState({modalIsOpen: false});
            //console.log(this.state.icon_id);
            fetch(`http://localhost:2112/icons/${this.state.icon_id}` ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ icon_selected : res})
            //console.log(this.state.icon_selected.icon)
            return res;
        })
        }

    render() {
        if(this.state.clicked===false){
            return (
                <div>
                    <form>
    
                        <label>ItemCategory:<br/>
                        <select name="category_id" value={this.state.category_id} onChange={e => this.setState({category_id : e.target.value})} required>
                                <option></option>
                            {Object.entries(this.state.category).map(([key, category], i) => (// for each row on object
                                <option name="category" key={i} value={category.id_category}>{category.name}</option>
                            ))}
                        </select>
                        </label><br/>
    
                        <label>ItemIcon:</label><br/>
                        <button className="ItemButton" onClick={this.openModal}>Icon</button>  {/* for open modal */}
                        <Modal
                            isOpen={this.state.modalIsOpen}//settings of modal
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal"
                        >
                            <div id="divModal">{/* inside modal */}
                                <form>
                                    <label htmlFor="icon">
                                        {Object.entries(this.state.icon).map(([key, icons], i) => (
                                            <div key={i}>
                                                <img className="imgItem" src={icons.icon} alt={icons.name} />
                                                <input type="radio" id="icon" name="icon" value={icons.id_icon} onChange={e => this.setState({icon_id : e.target.value})}/>
                                            </div>
                                        ))} 
                                    </label>
                                </form>
                                <button onClick={this.closeModal}>Valider</button>{/*  for close modal */}
                            </div>
                        </Modal>
                        <br/>
                        <div id="imgUpdate"><img src={this.state.icon_selected.icon} alt={this.state.icon_selected.name}></img></div> {/* icon selected */}
                        <br/>
                        <label>ItemName:<br/>
                            <input 
                                type="text" 
                                placeholder="Enter Name of item" 
                                value= {this.state.name}                    //update the state with value of input
                                name="name" 
                                onChange={e => this.setState({name : e.target.value})}
                                required 
                            />
                        </label>
                    
                        <button className="loginButton" onClick={this.handleSubmit}>Validate</button> {/* submit the form with the method related */}
                    </form>
                </div>
            )
        }
        else {
            return <Redirect push to="/ShopList/Items" />
        }
    }           
}

export default CreateItem