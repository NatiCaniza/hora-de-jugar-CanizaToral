import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos!'}/>
      </header>
    </div>
  );
}

export default App;
