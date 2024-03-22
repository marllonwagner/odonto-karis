import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Localizacao from './pages/localizacao/Localizacao';
import PlanosOdonto from './pages/planos/PlanosOdonto';
import Tratamentos from './pages/tratamentos/Tratamentos';
import Quee from './pages/quee/Quee';
import Administration from './pages/administracao/Administration';


function App() {
  return (
    
    <div className="App">
<Routes>
  <Route path='/' element={ <Home/> } />
  <Route path='/tratamentos' element={ <Tratamentos/> } />
  <Route path='/planos' element={ <PlanosOdonto/> } />
  <Route path='/contato' element={ <Localizacao/> } />
  <Route path='/fila-virtual' element={ <Quee/> } />
  <Route path='/adm-odk-frtx22wq' element={ <Administration/> } />
</Routes>
    </div>
   
  );
}

export default App;
