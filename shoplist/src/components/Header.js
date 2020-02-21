import React from "react"
import shopcart from "../img/shopcart.jpg"
import {NavLink} from "react-router-dom"
import Auth from "../auth"




function Header (props) {
    let status = Auth.isAuthenticated();
    function logout(){
        Auth.logout(()=> {
            console.log("i entered in")
        })
        props.headerHandler()
    }
    
        if (status===false){
            return (
                <div className="mainNav">
                    <img className="imgNav" src={shopcart}
                        alt="Example"></img>
                    <h1 id="title">Welcome to <span id="titleColor">Shopping</span>Simplified</h1>
                     <span className="headerButton">
                    <h2 id="button"><NavLink to={"/"+props.button} onClick={props.headerHandler}>{props.button}</NavLink> 
                    </h2></span>
                </div>
            )
        }
        else if (status===true){
            return (
                <div className="mainNav">
                    <img className="imgNav" src={shopcart}
                        alt="Example"></img>
                    <h1 id="title">Welcome to <span id="titleColor">Shopping</span>Simplified</h1>
                     <span className="headerButton">
                    <h2 id="button"><NavLink to={"/"+props.button} onClick={logout}>Logout</NavLink> 
                    </h2></span>
                </div>
            )
        }
    }

    


export default Header;