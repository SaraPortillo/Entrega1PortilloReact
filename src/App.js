import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <h1>Futuro Mágico</h1>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
