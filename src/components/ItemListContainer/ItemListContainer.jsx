import React from "react";
import { useState } from "react";
import './ItemListContainer.css';
import { useEffect } from "react";
import {pedirProductos} from '../../helpers/pedirProductos';
import { ItemList } from "../ItemList/ItemList";
import {FaSpinner} from 'react-icons/fa'
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {

        setLoading(true)
        pedirProductos()
        .then((res) =>{

            if(categoryId){
              setItems(res.filter(prod => prod.category === categoryId)  )
            }else{
              setItems(res)
            }

          })
            .catch((error) => console.log(error))
            .finally(() => {setLoading(false)})

    },[categoryId])

    return (
        <>
         {
            loading
            ?<FaSpinner/>
            :<ItemList productos={items}/>
         }
        </>
    )
}

export default ItemListContainer;