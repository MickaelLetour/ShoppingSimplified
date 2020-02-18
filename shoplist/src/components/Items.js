import React from "react";
import Auth from "../auth.js"
import Modal from "react-modal"
import {NavLink} from "react-router-dom"

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            logged: Auth.isAuthenticated(),
            menuOpen: false,
            itemId:"",
            listItem : ""
        }
        this.openMenu=this.openMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);

        fetch("http://localhost:2112/items" ,{
                method: 'GET',
                mode : 'cors',
        }).then(res => res.json())

        .catch(err => err)

        .then(res => {
            this.setState({ listItem : res})
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

        render() {
            return (
                <div id="item">
                    {Object.entries(this.state.listItem).map(([key, item], i)=> (
                        <div key={i} className="modal_item">
                            <ul id={item.id} className="item">
                                <li><img src={item.icon} /></li>
                                <li>Name : {item.name_item}</li>
                                <li>Catégory : {item.name}</li>
                                <li><button name="itemId" value={item.id}><NavLink to={"/ShopList/Items/UpdateItems?id="+item.id} >Update</NavLink></button></li>
                            </ul>
                        </div>
                    ))}
                    <button id="newItem" className="ItemButton"><NavLink to={"/ShopList/Items/CreateItems"}>Add New Item </NavLink></button>
                </div>
        )
    }
}

export default Items