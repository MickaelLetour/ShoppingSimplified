import React from "react";
import Auth from "../auth.js"
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

        fetch("http://localhost:2112/itemsInfo" ,{//get items and informations related
                method: 'GET',
                mode : 'cors',
        }).then(res => res.json())

        .catch(err => err)

        .then(res => {
            this.setState({ listItem : res})
            console.log(this.state.listItem)
            return res;
        }) 
        }

        openMenu() {//for open modal
            this.setState({ menuOpen: true })
            //console.log("something");
          }
      
        closeMenu() {//for close modal
            this.setState({ menuOpen: false })
        }

        render() {
            return (
                <div id="item">
                    {Object.entries(this.state.listItem).map(([key, item], i)=> (//for each row in object of state item
                        <div key={i} className="modal_item">
                            <ul id={item.id} className="item">
                                <li><img className="imgItem" src={item.icon} alt={item.name_item}/></li>
                                <li>{item.name_item}</li>
                                <li><button name="itemId" className="buttonUpdate" value={item.id}><NavLink to={"/ShopList/Items/UpdateItems?id="+item.id} >Update</NavLink></button></li>{/* redirect after click */}
                            </ul>
                        </div>
                    ))}
                    <button id="newItem" className="ItemButton"><NavLink to={"/ShopList/Items/CreateItems"}>New</NavLink></button>{/* redirect after click */}
                </div>
        )
    }
}

export default Items