import React, { Component } from "react"
import shopcart from "../img/shopcart.jpg"
import Auth from "../auth"

function Header (){
        if ("" === false){
            return (
                <div className="mainNav">
                <img className="imgNav" src={shopcart} alt="Example"></img>
                <h1 id="title">Welcome to <span id="titleColor">Shopping</span>Simplified</h1>
                <h1 id="register" ><a href='http://localhost:21012/Register'>Register</a></h1>
                </div>
            )
        }
        else {
            return (
                <div className="mainNav">
                <img className="imgNav" src={shopcart} alt="Example"></img>
                <h1 id="title">Welcome to <span id="titleColor">Shopping</span>Simplified</h1>
                <h1 id="register" ><a href='#'>Log out</a></h1>
                </div>
            )
        }
    } 


export default Header;