import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OrderForm from './Components/OrderForm/OrderForm';
import CartContainer from './Components/CartContainer/CartContainer';
import { CartProvider } from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos!'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<ItemListContainer />} />
              <Route path='/contacto' element={<OrderForm />} />
              <Route path='/cartContainer' element={<CartContainer />} />
            </Routes>
            <ToastContainer />
          </header>
        </div>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;


