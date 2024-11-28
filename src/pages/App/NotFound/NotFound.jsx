import React from "react";
import "./NotFound.css"; // Archivo CSS para el estilo
import MangoNotFound from "../../../../public/assets/App/NotFound.jpg";
import LogoNombre from "../../../../public/assets/Landing/logo-nombre.png";
const NotFound = () => {
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
            <button>INICIO</button>
          </div>
        </div>
        <div className="footer-notfound">
          <img className="LogoNombre-NotFound" src={LogoNombre} />
        </div>
      </>
  );
};

export default NotFound;
