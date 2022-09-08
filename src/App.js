import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './Components/Contacto/Contacto';
import MiCarrito from './Components/MiCarrito/MiCarrito';
import { useState } from 'react';

function App() {
  const [numCarrito , setNumCarrito] = useState(0);
  const onAdd2 =(value)=>{
    if(value > 0) setNumCarrito(numCarrito + value)
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar sumaTotalCompras={numCarrito} />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos!'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer onAdd2={onAdd2} />} />
            <Route path='*' element={<ItemListContainer />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='/miCarrito' element={<MiCarrito />}/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
