import "./Ayuda.css";
import React from "react";


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
            <img class="hero-img-about" src="./src/assets/Landing/Images/Ayuda/Servicio.png" alt="" />
          </div>
        </div>
      </section>

      <div className="help-options">
        <h2>Tema de ayuda frecuente</h2>

        <div className="help-icons-container">
          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Info.png" alt="clocksand" />
            <p>Sobre MangoCash</p>
          </div>

          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Comienzo.png" alt="clocksand" />
            <p>Guía para principiantes</p>
          </div>

          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Banco.png" alt="clocksand" />
            <p>Apertura de cuenta</p>
          </div>

          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Libros.png" alt="clocksand" />
            <p>Educación Financiera</p>
          </div>

          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Calculadora.png" alt="clocksand" />
            <p>Herramientas Financieras</p>
          </div>

          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Descuentos.png" alt="clocksand" />
            <p>Promoción Especial</p>
          </div>

          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Presupuesto.png" alt="clocksand" />
            <p>Gestión de Presupuestos</p>
          </div>

          <div className="help-icon">
            <img src="./src/assets/Landing/Images/Ayuda/Descargar.png" alt="clocksand" />
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
