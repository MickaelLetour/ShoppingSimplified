import React from "react";
import Auth from "../auth.js"
import Modal from "react-modal"
import {NavLink} from "react-router-dom"

class UpdateItems extends React.Component {
    constructor(props) {
        super(props);
        var params = new URLSearchParams(document.location.search.substring(1));
        var id = params.get("id");

        this.state ={
            logged: Auth.isAuthenticated(),
            menuOpen: false,
            itemId:id,
            category_id:"",
            icon_id:"",
            category:"",
            icon:"",
            item : "",
            name:"",
            icon_selected:""
        }
        this.openMenu=this.openMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(this.state.itemId);

        fetch("http://localhost:2112/categories" ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ category : res})
            return res;
        })

        fetch("http://localhost:2112/icons" ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ icon : res})
            return res;
        })
        
        Modal.setAppElement('body')

        fetch(`http://localhost:2112/items/${this.state.itemId}` ,{
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
        

        openMenu() {
            this.setState({ menuOpen: true })
            //console.log("something");
          }
      
        closeMenu() {
            this.setState({ menuOpen: false })
        }

        handleClick() {
            fetch("http://localhost:2112/items/"+this.state.itemId ,{
                method: 'delete',
                //mode : 'cors',
        }).then(res => res.json())

        .catch(err => err)

        .then(res => {
            this.setState({ item : res})
            return res;
        }) 
        }

        handleSubmit(event) {          
            const data = 
                {
                    category_id:this.state.category_id,
                    icon_id: this.state.icon_id,
                    name: this.state.name
                };
            console.log(data);
            fetch("http://localhost:2112/items/"+this.state.itemId, {
                method : 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>res.json()) 
        
            .catch(err => err)
        
            .then(res=>{
                console.log(res);
                console.log("Item modified");
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
            this.setState({ icon_selected : res.icon})
            return res;
        })
        }

        render() {
            return (
                <div>
                <form onSubmit={this.handleSubmit}>

                    <label>ItemCategory:<br/>
                    <select name="category_id" value={this.state.category_id} onChange={e => this.setState({category_id : e.target.value})} required>
                            <option name="category" value={this.state.item.category_id}>{this.state.item.name}</option>
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
                    <img src={this.state.icon_selected}></img>
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

                    <input type="submit"/>

                    <button className="ItemButton" onClick={this.handleClick}><NavLink to={"/ShopList/Items/CreateItems"}>Add New Item </NavLink>Delete this Item</button>
                    
                </form>
            </div>
        )
    }
}

export default UpdateItems