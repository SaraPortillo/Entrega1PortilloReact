import React from "react";
import "./cart.css"
import {BiCart} from 'react-icons/bi'
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <div className="cart">
            <BiCart/>
            <span>{calcularCantidad()}</span>
        </div> 
    )
}

export default CartWidget
