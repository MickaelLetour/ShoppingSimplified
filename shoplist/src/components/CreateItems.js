import React, {Component} from "react"
import Modal from "react-modal"
import {NavLink} from "react-router-dom"
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
            icon_selected:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        fetch("http://localhost:2112/categories" ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ category : res})
            return res;
        })

        fetch("http://localhost:2112/iconsNotUsed" ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ icon : res})
            return res;
        })
        
        Modal.setAppElement('body')
        }

        handleSubmit(event) {
            event.preventDefault();
            const data = 
                {
                    category_id:this.state.category_id,
                    icon_id: this.state.icon_id,
                    name: this.state.name
                };
            console.log(data);
            fetch("http://localhost:2112/items", {
                method : 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>res.json()) 
        
            .catch(err => err)
        
            .then(res=>{
                console.log(res);
                console.log("Item Created");
            })
        }

        openModal() {
            this.setState({modalIsOpen: true});
        }
         
        closeModal() {
            this.setState({modalIsOpen: false});
            console.log(this.state.icon_id);
            fetch(`http://localhost:2112/icons/${this.state.icon_id}` ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ icon_selected : res})
            console.log(this.state.icon_selected.icon)
            return res;
        })
        }

    render() {
        return (
            <div>
                <form>

                    <label>ItemCategory:<br/>
                    <select name="category_id" value={this.state.category_id} onChange={e => this.setState({category_id : e.target.value})} required>
                            <option></option>
                        {Object.entries(this.state.category).map(([key, category], i) => (
                            <option name="category" key={i} value={category.id_category}>{category.name}</option>
                        ))}
                    </select>
                    </label><br/>

                    <label>ItemIcon:</label><br/>
                    <button onClick={this.openModal}>Icon</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        contentLabel="Example Modal"
                    >
                        <div id="divModal">
                            <form>
                                <label htmlFor="icon">
                                    {Object.entries(this.state.icon).map(([key, icons], i) => (
                                        <div key={i}>
                                            <input type="radio" id="icon" name="icon" value={icons.id_icon} onChange={e => this.setState({icon_id : e.target.value})}/><img src={icons.icon} />
                                        </div>
                                    ))} 
                                </label>
                            </form>
                            <button onClick={this.closeModal}>Valider</button>
                        </div>
                    </Modal>
                    <br/>
                    <img src={this.state.icon_selected.icon}></img>
                    <br/>
                    <label>ItemName:<br/>
                        <input 
                            type="text" 
                            placeholder="Enter Name of item" 
                            value= {this.state.name}
                            name="name" 
                            onChange={e => this.setState({name : e.target.value})}
                            required 
                        />
                    </label>
                
                    <button onClick={this.handleSubmit}><NavLink to={"/ShopList/Items"}>OK</NavLink></button>
                </form>
            </div>
        )
    }
}

export default CreateItem