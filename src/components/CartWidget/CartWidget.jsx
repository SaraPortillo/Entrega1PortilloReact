import React from "react";
import "./cart.css"
import {BiCart} from 'react-icons/bi'


const CartWidget = () => {
    return (
        <div className="cart">
            <BiCart/>
            0
        </div> 
    )
}

export default CartWidget
