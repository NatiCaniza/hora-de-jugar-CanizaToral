import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacto from './Components/Contacto/Contacto';
import CartContainer from './Components/CartContainer/CartContainer';
import { useState } from 'react';
import { CartProvider } from './Context/CartContext';

function App() {
  const [numCarrito, setNumCarrito] = useState(0);
  const onAdd2 = (value) => {
    if (value > 0) setNumCarrito(numCarrito + value)
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar sumaTotalCompras={numCarrito} />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos!'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:productId' element={<ItemDetailContainer onAdd2={onAdd2} />} />
              <Route path='*' element={<ItemListContainer />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/cartContainer' element={<CartContainer />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


