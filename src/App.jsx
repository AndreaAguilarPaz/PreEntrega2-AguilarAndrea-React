
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (
    
    <BrowserRouter>

      <Navbar/> 
      <Routes>
        <Route path="/" element = {<ItemListContainer/>}/>
        <Route path="/productos/:categoriaId" element = {<ItemListContainer/>}/>
        <Route path="/articulo/:articuloId" element = {<ItemDetailContainer/>}/>

      </Routes> 

     
    </BrowserRouter>

  )
}

export default App
