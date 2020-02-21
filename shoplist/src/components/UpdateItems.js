import React from "react";
import Auth from "../auth.js"
import Modal from "react-modal"
import {NavLink, Redirect} from "react-router-dom"

class UpdateItems extends React.Component {
    constructor(props) {
        super(props);
        var params = new URLSearchParams(document.location.search.substring(1));//get informations on url
        var id = params.get("id");

        this.state ={
            logged: Auth.isAuthenticated(),//verify if user is connected
            menuOpen: false,
            itemId:id,
            category_id:"",
            icon_id:"",
            category:"",
            icon:"",
            item : "",
            name:"",
            icon_selected:"",
            clicked:false
        }
        this.openMenu=this.openMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        this.handleClick=this.handleClick.bind(this);//different method
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //console.log(this.state.itemId);

        fetch("http://localhost:2112/categories" ,{//get all categories on database
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
        
        Modal.setAppElement(document.getElementById('formUpdate'));

        fetch(`http://localhost:2112/itemsInfo/${this.state.itemId}` ,{//get informations of items with an id
                method: 'GET',
                mode : 'cors',
        }).then(res => res.json())

        .catch(err => err)

        .then(res => {
            this.setState({ item : res})
            this.setState({ icon_selected : res.icon})
            this.setState({ category_id : res.category_id})
            this.setState({ icon_id : res.id_icon})
            return res;
        }) 
    }
       

        openMenu() {//open the navbar
            this.setState({ menuOpen: true })
            //console.log("something");
          }
      
        closeMenu() {//close the nav bar
            this.setState({ menuOpen: false })
        }

        handleClick() {//method on click
            fetch("http://localhost:2112/items/"+this.state.itemId ,{//delete an item with an id
                method: 'delete',
                //mode : 'cors',
        }).then(res => res.json())

        .catch(err => err)

        .then(res => {
            this.setState({ item : res})
            this.setState({clicked : true})
            return res;
        }) 
        }

        handleSubmit(event) {        //method on submit 
            event.preventDefault();  
            const data = 
                {
                    category_id:this.state.category_id,
                    icon_id: this.state.icon_id,
                    name: this.state.name
                };
            //console.log(data);
            fetch("http://localhost:2112/items/"+this.state.itemId, {//update item with id item
                method : 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>res.json()) 
        
            .catch(err => err)
        
            .then(res=>{
                //console.log(res);
                //console.log("Item modified");
                this.setState({clicked : true})
            })
        }

        openModal() {//open modal
            this.setState({modalIsOpen: true});
        }
         
        closeModal() {// close modal
            this.setState({modalIsOpen: false});
            //console.log(this.state.icon_id);
            fetch(`http://localhost:2112/icons/${this.state.icon_id}` ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ icon_selected : res.icon})
            return res;
        })
        }

        render() {
            if(this.state.clicked===false){
                return (
                    <div id="formUpdate">
                    <form>
    
                        <label>ItemCategory:<br/>
                        <select name="category_id" value={this.state.category_id} onChange={e => this.setState({category_id : e.target.value})} required>
                                <option name="category" value={this.state.item.category_id}>{this.state.item.name}</option>
                            {Object.entries(this.state.category).map(([key, category], i) => (//foreach row of this object
                                <option name="category" key={i} value={category.id_category}>{category.name}</option>
                            ))}
                        </select>
                        </label><br/>
    
                        <label>ItemIcon:</label><br/>
                        <button className="ItemButton" onClick={this.openModal}>Icon</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal"
                        >
                            <div id="divModal">
                                <form>
                                    <label htmlFor="icon">
                                        {Object.entries(this.state.icon).map(([key, icons], i) => (//foreach row of this object
                                            <div key={i}>
                                            <img className="imgItem" src={icons.icon} alt={icons.name_item}/>
                                            <input type="radio" id="icon" name="icon" value={icons.id_icon} onChange={e => this.setState({icon_id : e.target.value})}/>
                                            </div>
                                        ))} 
                                    </label>
                                </form>
                                <button className="ItemButton" onClick={this.closeModal}>Valider</button> {/* close modal */}
                            </div>
                        </Modal>
                        <br/>
                        <div id="imgUpdate"><img src={this.state.icon_selected} alt={this.state.icon_selected.name}></img></div>
                        <br/>
                        <label>ItemName:<br/>
                            <input 
                                type="text" 
                                placeholder={this.state.item.name_item} 
                                value= {this.state.name}
                                name="name" 
                                onChange={e => this.setState({name : e.target.value})}
                                required 
                            />
                        </label>
    
                        <button className="loginButton" onClick={this.handleSubmit}>Validate</button>
    
                        <button id="buttonDelete" className="loginButton" onClick={this.handleClick}>Delete this Item</button>
                        
                    </form>
                    </div>
                )
            }
            else {
                return <Redirect push to="/ShopList/Items" />
            }
        }
}

export default UpdateItems