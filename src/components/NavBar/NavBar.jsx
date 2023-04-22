import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css'

const NavBar = () => {
    return (
            <div className="menu">
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to='/productos/signos'>Signos</Link>
                <Link className='link' to='/counter'>Contador</Link>
                <Link className='link' to='/cart'><CartWidget/></Link>
            </div>
    )
}

export default NavBar;