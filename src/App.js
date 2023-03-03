import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Localizacao from './pages/localizacao/Localizacao';
import PlanosOdonto from './pages/planos/PlanosOdonto';
import Tratamentos from './pages/tratamentos/Tratamentos';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={ <Home/> } />
  <Route path='/tratamentos' element={ <Tratamentos/> } />
  <Route path='/planos' element={ <PlanosOdonto/> } />
  <Route path='/contato' element={ <Localizacao/> } />
</Routes>
    </div>
  );
}

export default App;
