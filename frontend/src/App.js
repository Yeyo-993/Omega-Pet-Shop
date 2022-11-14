import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import CompProductosCrear from './components/productos/ProductosCrear';

//import Navigator from './components/Navigator'
import CompProductosList from './components/productos/ProductosListar';
import CompProductsEditar from './components/productos/ProductosEditar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CompProductosList/>}/>
        <Route path='/producto/crear' element={<CompProductosCrear/>}/>
        <Route path='/producto/actualizar/:id' element={<CompProductsEditar/>}/>
      </Routes>
    </Router>
  );
}

export default App;