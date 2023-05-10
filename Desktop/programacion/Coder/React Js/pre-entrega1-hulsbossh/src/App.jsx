import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className='container-fluid'> 
      <Header />
      <ItemListContainer gretting={"No se encontraron productos agregados"}/>
      
    </div>
  );
}

export default App;
