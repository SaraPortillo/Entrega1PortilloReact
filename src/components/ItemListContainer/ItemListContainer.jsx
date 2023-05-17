import React from "react";
import { useState } from "react";
import './ItemListContainer.css';
import { useEffect } from "react";
/*import {pedirProductos} from '../../helpers/pedirProductos';*/
import { ItemList } from "../ItemList/ItemList";
import {FaSpinner} from 'react-icons/fa'
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase/config'

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {

      const db =getFirestore();

      const productos = db.collection('productos')

      productos.get()
        .then ((res) => {
          const newItem = res.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        })
        console.table(newItem)

        }) 
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