// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Proprietario from './pages/Proprietario';
import Veiculo from './pages/Veiculo';
import ProprietarioList from './pages/ProprietarioList';
import VeiculoList from './pages/VeiculoList';
import 'w3-css/w3.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proprietario" element={<Proprietario />} />
        <Route path="/proprietario/list" element={<ProprietarioList />} />
        <Route path="/veiculo" element={<Veiculo />} />
        <Route path="/veiculo/list" element={<VeiculoList />} />
      </Routes>
    </Router>
  );
};

export default App;
