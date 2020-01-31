import React from "react"
import shopcart from "../img/shopcart.jpg"

function Header () {



        return (
            <div className="mainNav">
                <img className="imgNav" src={shopcart}
                alt="Example"></img>
                <h1>Shopping Simplified</h1>
                <h1>Contacts</h1>
            </div>
        )
    

}

export default Header;