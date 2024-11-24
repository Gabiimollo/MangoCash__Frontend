import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingLayout from './Layout/LandingLayout';
import RegistroLoginLayout from './Layout/RegistroLoginLayout';
import AppLayout from './Layout/AppLayout';

import Home from './pages/Landing/Home/Home';
import SobreNosotros from './pages/Landing/SobreNosotros/SobreNosotros';
import PorqueElegirnos from './pages/Landing/PorqueElegirnos/PorqueElegirnos';
import Ayuda from './pages/Landing/Ayuda/Ayuda';
import Registro from './pages/Landing/Registro/Registro';
import Login from './pages/Landing/Login/Login';

import Dashboard from './pages/App/Dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre_nosotros" element={<SobreNosotros />} />
          <Route path="/porque_elegirnos" element={<PorqueElegirnos />} />
          <Route path="/ayuda" element={<Ayuda />} />
        </Route>
        <Route element={<RegistroLoginLayout />}>
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path='/app/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
