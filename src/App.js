import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {useState} from 'react';

function App() {
  const [sumaTotalCompras, setSumaTotalCompras] = useState(0);
  
  const onAdd= (value) => {
    if(value > 0) setSumaTotalCompras(sumaTotalCompras + value);
  }

  return (
    <div className="App">
      <header>
        <NavBar sumaTotalCompras={sumaTotalCompras}/>
        <ItemListContainer greeting={'Bienvenidos!'}/>
        <ItemDetailContainer onAdd={onAdd}/>
      </header>
    </div>
  );
}

export default App;
