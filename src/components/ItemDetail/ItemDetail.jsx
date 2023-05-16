import React, {useContext, useState} from "react";
import {Card,Button} from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({id, description, price, image, category, stock}) => {


  const {addToCart} = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      description,
      image,
      price,
      category,
      counter,
    }
    console.log(newItem)
    addToCart(newItem)
  }

    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Title>Categoría: {category}</Card.Title>
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
          <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam deserunt possimus, temporibus animi porro ab repudiandae sed. Enim quis, vero incidunt rerum adipisci facere! Quaerat doloremque fugiat laudantium numquam?</p>
      </Card.Body>
    </Card>
    )
}