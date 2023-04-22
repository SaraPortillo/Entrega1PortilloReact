import React from "react";
import { useState } from "react";
import '../ItemCount/ItemCount.css'

const ItemCount = () => {

    const [counter, setCounter] = useState(0)
    
    const sumar = () => {
        setCounter(counter +1)
    }
    const restar = () => {
        if(counter > 0) {
            setCounter(counter -1)
        }
    }
    const resetear = () => {
        setCounter(0)
    }

    return(
        <>
        <h4>Cantidad: {counter}</h4>
        <div>
            <button onClick={sumar}> + </button>
            <button onClick={restar}> - </button>
            <button onClick={resetear}> resetear</button>
        </div>
        </>
    )
}

export default ItemCount;