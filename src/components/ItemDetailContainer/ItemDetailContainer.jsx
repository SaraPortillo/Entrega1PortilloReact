import React from "react";
import {pedirProductos} from '../../helpers/pedirProductos'
import {FaSpinner} from 'react-icons/fa'
import { useState } from "react";
import { useEffect } from "react";
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() =>{
    
        setLoading(true)
        pedirProductos()
            .then(res =>{
                setItem( res.find( prod => prod.id === Number(itemId)))
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    },[itemId])


    return(
        <section>
            {
                loading
                ?<FaSpinner/>
                :<ItemDetail {...item}/>
            }
        </section>
    )
}

export default ItemDetailContainer