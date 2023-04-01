import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h2>Destino</h2>
            <div>
                <button>Signos</button>
                <button>Numeros</button>
                <button>Cartas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;