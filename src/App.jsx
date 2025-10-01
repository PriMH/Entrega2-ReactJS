import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a TechStore!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos filtrados por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
