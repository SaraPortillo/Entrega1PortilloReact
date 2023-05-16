import React from "react";
/*import { useState } from "react";*/
import '../ItemCount/ItemCount.css'

const ItemCount = ({max, cantidad, modify}) => {

    /*const [counter, setCounter] = useState(0)*/
    
    const sumar = () => {
        if(cantidad < max) {
            modify(cantidad +1)
        }
    }
    const restar = () => {
        if(cantidad > 0) {
            modify(cantidad -1)
        }
    }

    return(
        <>
        <h4>Cantidad: {cantidad}</h4>
        <div>
            <button onClick={sumar}> + </button>
            <button onClick={restar}> - </button>
        </div>
        </>
    )
}

export default ItemCount;