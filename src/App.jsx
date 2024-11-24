import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingLayout from './Layout/LandingLayout';
import RegistroLoginLayout from './Layout/RegistroLoginLayout';

import Home from './pages/Landing/Home/Home';
import SobreNosotros from './pages/Landing/SobreNosotros/SobreNosotros';
import PorqueElegirnos from './pages/Landing/PorqueElegirnos/PorqueElegirnos';
import Ayuda from './pages/Landing/Ayuda/Ayuda';
import Registro from './pages/Landing/Registro/Registro';
import Login from './pages/Landing/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas con el layout Landing */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre_nosotros" element={<SobreNosotros />} />
          <Route path="/porque_elegirnos" element={<PorqueElegirnos />} />
          <Route path="/ayuda" element={<Ayuda />} />
        </Route>

        {/* Rutas con el layout Registro/Login */}
        <Route element={<RegistroLoginLayout />}>
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
