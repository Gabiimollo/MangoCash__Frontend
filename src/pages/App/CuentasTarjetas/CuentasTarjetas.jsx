import React from 'react';
import './CuentasTarjetas.css'

const CuentasTarjetas = () => {
  // Datos simulados de cuentas y tarjetas del usuario
  const cuentas = [
    { id: 1, nombre: 'Cuenta de Ahorros', saldo: 5000 },
    { id: 2, nombre: 'Cuenta Corriente', saldo: 15000 },
    { id: 3, nombre: 'Cuenta de Inversión', saldo: 25000 },
  ];

  const tarjetas = [
    { id: 1, nombre: 'Tarjeta de Crédito Visa', limite: 10000, saldo: 3000 },
    { id: 2, nombre: 'Tarjeta de Débito MasterCard', limite: 5000, saldo: 1000 },
  ];

  return (
    <div className="contenedor-principal">
      <h2>Mis Cuentas y Tarjetas</h2>
      
      {/* Cuentas */}
      <div className="seccion-cuentas">
        <h3>Cuentas</h3>
        <div className="lista-cuentas">
          {cuentas.map(cuenta => (
            <div key={cuenta.id} className="tarjeta-cuenta">
              <h4>{cuenta.nombre}</h4>
              <p>Saldo: ${cuenta.saldo.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tarjetas */}
      <div className="seccion-tarjetas">
        <h3>Tarjetas</h3>
        <div className="lista-tarjetas">
          {tarjetas.map(tarjeta => (
            <div key={tarjeta.id} className="tarjeta-tarjeta">
              <h4>{tarjeta.nombre}</h4>
              <p>Saldo: ${tarjeta.saldo.toFixed(2)}</p>
              <p>Limite: ${tarjeta.limite.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuentasTarjetas;