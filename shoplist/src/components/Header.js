import React, { Component } from "react"
import shopcart from "../img/shopcart.jpg"
import {NavLink} from "react-router-dom"

function Header (props) {

            return (
                
                <div className="mainNav">
                    <img className="imgNav" src={shopcart}
                        alt="Example"></img>
                    <h1 id="title">Welcome to <span id="titleColor">Shopping</span>Simplified</h1>
                    <span className="headerButton">
                    <h2 id="button"><NavLink to="/Register" onClick={props.headerHandler}>{props.button}</NavLink> 
                    </h2></span>
                </div>
            )
}

export default Header;