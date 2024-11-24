import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RegistroLoginLayout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={"/"} className="link-home">
            <img className="img-logo" src="./src/assets/Landing/logo-nombre.png" alt="logo con nombre mangocash" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RegistroLoginLayout;
