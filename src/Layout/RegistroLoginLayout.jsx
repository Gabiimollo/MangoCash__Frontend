import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import LogoNombreMangoCash from '../../public/assets/Landing/logo-nombre.png'

const RegistroLoginLayout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={"/"} className="link-home">
            <img className="img-logo" src={LogoNombreMangoCash} alt="logo con nombre mangocash" />
        </Link>
      </header>
      <main>
        <div style="display: flex;">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RegistroLoginLayout;
