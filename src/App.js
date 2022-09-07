import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './Components/Contacto/Contacto';
import MiCarrito from './Components/MiCarrito/MiCarrito';

function App() {
  const [sumaTotalCompras, setSumaTotalCompras] = useState(0);
  
  const onAdd= (value) => {
    if(value > 0) setSumaTotalCompras(sumaTotalCompras + value);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar sumaTotalCompras={sumaTotalCompras} />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos!'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer onAdd={onAdd} />} />
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
