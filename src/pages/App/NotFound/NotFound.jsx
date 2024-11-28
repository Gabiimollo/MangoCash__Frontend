import React from "react";
import "./NotFound.css"; // Archivo CSS para el estilo
import MangoNotFound from "../../../../public/assets/App/NotFound.jpg";
import LogoNombre from "../../../../public/assets/Landing/logo-nombre.png";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => {

  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 10000);

  return (
      <>
        <div class="container-notfound">
          <img src={MangoNotFound} alt="" />
          <div>
            <h1>404</h1>
            <h2>OH NO! Mango Not Found.</h2>
            <p>
              La página que buscas, no se encuentra. Podemos llevarte a nuestra
              página principal.
            </p>
            <Link to={"/"}><button href="">INICIO</button></Link>
          </div>
        </div>
        <div className="footer-notfound">
          <img className="LogoNombre-NotFound" src={LogoNombre} />
        </div>
      </>
  );
};

export default NotFound;
