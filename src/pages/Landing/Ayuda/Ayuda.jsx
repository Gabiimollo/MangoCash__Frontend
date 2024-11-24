import "./Ayuda.css";
import React from "react";

import servicioPNG from '../../../../public/assets/Landing/Images/Ayuda/Servicio.png'
import infoPNG from '../../../../public/assets/Landing/Images/Ayuda/Info.png'
import comienzoPNG from '../../../../public/assets/Landing/Images/Ayuda/Comienzo.png'
import bancoPNG from '../../../../public/assets/Landing/Images/Ayuda/Banco.png'
import librosPNG from '../../../../public/assets/Landing/Images/Ayuda/Libros.png'
import calcuPNG from '../../../../public/assets/Landing/Images/Ayuda/Calculadora.png'
import descuentosPNG from '../../../../public/assets/Landing/Images/Ayuda/Descuentos.png'
import presupPNG from '../../../../public/assets/Landing/Images/Ayuda/Presupuesto.png'
import descargarPNG from '../../../../public/assets/Landing/Images/Ayuda/Descargar.png'


function Help() {
  return (
    <div className="help-page">
      <section class="container-main">
        <div class="row">
          <div class="column-left">
            <div class="text-container">
              <p className="support">Support Center</p>
              <h2>Bienvenido al Centro de Soporte de <span>MangoCash</span>.</h2>
              <p className="help-wanted">¿Puedo ayudarte?</p>
            </div>
          </div>

          <div class="column-right">
            <img class="hero-img-about" src={servicioPNG} alt="" />
          </div>
        </div>
      </section>

      <div className="help-options">
        <h2>Tema de ayuda frecuente</h2>

        <div className="help-icons-container">
          <div className="help-icon">
            <img src={infoPNG} alt="clocksand" />
            <p>Sobre MangoCash</p>
          </div>

          <div className="help-icon">
            <img src={comienzoPNG} alt="clocksand" />
            <p>Guía para principiantes</p>
          </div>

          <div className="help-icon">
            <img src={bancoPNG} alt="clocksand" />
            <p>Apertura de cuenta</p>
          </div>

          <div className="help-icon">
            <img src={librosPNG} alt="clocksand" />
            <p>Educación Financiera</p>
          </div>

          <div className="help-icon">
            <img src={calcuPNG} alt="clocksand" />
            <p>Herramientas Financieras</p>
          </div>

          <div className="help-icon">
            <img src={descuentosPNG} alt="clocksand" />
            <p>Promoción Especial</p>
          </div>

          <div className="help-icon">
            <img src={presupPNG} alt="clocksand" />
            <p>Gestión de Presupuestos</p>
          </div>

          <div className="help-icon">
            <img src={descargarPNG} alt="clocksand" />
            <p>Descargar plataforma</p>
          </div>
        </div>

        <h3>¿Aún no has encontrado la respuesta a tu pregunta?</h3>

        <div className="help-button-contact">
          <button>Contactanos</button>
        </div>
      </div>
    </div>
  );
}

export default Help;
