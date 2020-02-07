import React from "react"
import shopcart from "../img/shopcart.jpg"

function Header (props) {

        return (
            <div className="mainNav">
                <img className="imgNav" src={shopcart}
                alt="Example"></img>
                <h1 id="title">Welcome to <span id="titleColor">Shopping</span>Simplified</h1>
                <h1 id="register" >Register</h1>
            </div>
        )
    
}

export default Header;