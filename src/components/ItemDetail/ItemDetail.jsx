import React from "react";
import {Card,Button} from 'react-bootstrap'

export const ItemDetail = ({id, description, price, image, category}) => {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Title>Categoría: {category}</Card.Title>
          <Button variant="primary">Agregar al carrito</Button>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam deserunt possimus, temporibus animi porro ab repudiandae sed. Enim quis, vero incidunt rerum adipisci facere! Quaerat doloremque fugiat laudantium numquam?</p>
      </Card.Body>
    </Card>
    )
}