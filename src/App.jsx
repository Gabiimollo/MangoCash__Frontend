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
import CuentasTarjetas from './pages/App/CuentasTarjetas/CuentasTarjetas';
import Transacciones from './pages/App/Transacciones/Transacciones';
import Facturas from './pages/App/Facturas/Facturas';
import Perfil from './pages/App/Perfil/Perfil';
import NotFound from './pages/App/NotFound/NotFound';

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
          <Route path='/app/cuentas-tarjetas' element={<CuentasTarjetas />} />
          <Route path='/app/transacciones' element={<Transacciones />} />
          <Route path='/app/facturas' element={<Facturas />} />
          <Route path='/app/perfil' element={<Perfil />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
