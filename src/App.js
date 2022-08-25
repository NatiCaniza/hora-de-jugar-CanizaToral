import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {useState} from 'react';

function App() {
  const [sumaTotalCompras, setSumaTotalCompras] = useState(0);
  const onAdd = (value) =>{
    setSumaTotalCompras(sumaTotalCompras + value)
  }

  return (
    <div className="App">
      <header>
        <NavBar sumaTotalCompras={sumaTotalCompras}/>
        <ItemListContainer greeting={'Bienvenidos!'} onAdd={onAdd}/>
      </header>
    </div>
  );
}

export default App;
