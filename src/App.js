import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount'

import {
  BrowserRouter as Router, 
  Routes, 
  Navigate,
  Route,
} from 'react-router-dom';
import {CartContext} from './components/context/CartContext'
import { useState } from 'react';

function App() {

  const [carrito, SetCarrito] = useState([])

  console.log(carrito)

  const addToCart = (item) => {
    SetCarrito([...carrito, item])
  }

  const calcularCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.counter, 0)
  }

  

  return (
    <CartContext.Provider value={{
      addToCart, 
      calcularCantidad
    }}>
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/counter' element={<ItemCount/>}/>
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </Router>
    </div>
    </CartContext.Provider>
  );
}

export default App;
