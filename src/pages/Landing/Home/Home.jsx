import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

import DashboardPNG from "../../../../public/assets/Landing/Images/Home/Dashboard.png";
import OnlinePaymentPNG from "../../../../public/assets/Landing/Images/Home/OnlinePayments.png"
import PayPalPNG from "../../../../public/assets/Landing/Images/Home/PayPal.png";
import FinanceAppPNG from "../../../../public/assets/Landing/Images/Home/FinanceApp.png"
import PersonalFinancePNG from "../../../../public/assets/Landing/Images/Home/PersonalFinance.png"

function Home() {
  return (
    <div>
      <section className="container-main">
        <div className="row">
          <div className="column-left">
            <div className="text-container">
              <h2>Tu Aliado Financiero,</h2>
              <h2>Siempre A Mano</h2>

              <p>Gestionar tus finanzas nunca fue tan simple</p>
            </div>

            <div className="button-container">
              <Link to={"/login"}>
                <button className="button --comienza">Comienza</button>
              </Link>
              <button className="button right-button">Mira cómo funciona</button>
            </div>
          </div>

          <div className="column-right">
            <div className="container-image">
              <img
                src={DashboardPNG}
                alt="dashboard-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-why">
        <div className="why-title">
          <p>¿Por qué elegir MangoCash?</p>
          <h2>Diseñado especialmente para la gestión financiera</h2>
        </div>
        <div className="why-cards">
          <div className="card">
            <img
              src={OnlinePaymentPNG}
              alt="payment"
            />
            <h3>Seguimiento en tiempo real</h3>
            <p>
              Obtenga actualizaciones instantáneas de sus transacciones y
              balances para mantener el control de sus finanzas.
            </p>
          </div>
          <div className="card">
            <img
              src={PayPalPNG}
              alt="multiple_accounts"
            />
            <h3>Gestione múltiples cuentas</h3>
            <p>
              Centralice y administre todas sus cuentas bancarias y tarjetas de
              crédito en un solo lugar de forma segura
            </p>
          </div>
          <div className="card">
            <img
              src={FinanceAppPNG}
              alt="analisis"
            />
            <h3>Análisis personalizado</h3>
            <p>
              Obtenga informes detallados y visualizaciones de sus hábitos de
              gasto y progreso hacia sus metas financieras.
            </p>
          </div>
        </div>

        <div className="why-gestion">
          <div className="why-row">
            <div className="why-left">
              <h2>Gestión Financiera Simple y Efectiva</h2>
              <p>
                Usar MangoCash es la manera más fácil de gestionar tus finanzas
                personales. Equipada con herramientas de análisis que facilitan
                el seguimiento de gastos, presupuestos y ahorros de forma
                automática.
              </p>
              <Link to={"/login"}>
                <button className="button --comienza">Comienza</button>
              </Link>
            </div>

            <div className="why-right">
              <img
                src={PersonalFinancePNG}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
