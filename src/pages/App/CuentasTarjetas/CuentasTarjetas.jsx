import React from 'react';
import './CuentasTarjetas.css'
import addSvg from '../../../../public/assets/App/CuentasTarjetas/agregar.png'

const CuentasTarjetas = () => {
  // Datos simulados de cuentas y tarjetas del usuario
  const cuentas = [
    { id: 1, nombre: 'Cuenta de Ahorros', saldo: 5000 },
    { id: 2, nombre: 'Cuenta Corriente', saldo: 15000 },
    { id: 3, nombre: 'Cuenta de Inversión', saldo: 25000 },
  ];

  const tarjetas = [
    { id: 1, nombre: 'Tarjeta de Crédito Visa', limite: 10000, saldo: 3000 },
    { id: 2, nombre: 'Tarjeta de Crédito JCB', limite: 20000, saldo: 7000 },
  ];

  const coloresTarjetas = [
    'rgb(203, 178, 125)',
    'rgb(231, 76, 60)', 
  ];

  return (
    <div className="contenedor-principal container-tarjetas">
      <h2>Mis Cuentas y Tarjetas</h2>
      
      {/* Cuentas */}
      <div className="seccion-cuentas">
        <h3>Cuentas</h3>
          <div className='cards-cuentas'>

            <div className="card-dashboard --cardCuentas crearCuentas">

              <div className='add-container'>
                <img src={addSvg} alt="add" className='add-icon-cuentas' />
                <p>Nueva Cuenta</p>
              </div>
              
            </div>
            {cuentas.map((cuenta) => (
              <div key={cuenta.id} className="card-dashboard cuentasCreadas">
              <h4>{cuenta.nombre}</h4>
              <p>Saldo: <span>${cuenta.saldo}</span></p>
            </div>
            ))}
            


        </div>
      </div>

      {/* Tarjetas */}
      <div className="seccion-tarjetas">
        <h3>Tarjetas</h3>
        <div className="cards-tarjetas">

          <div className='card-dashboard --cardTarjetas crearTarjetas'>

            <div className='add-container'>
                <img src={addSvg} alt="add" className='add-icon-cuentas' />
                <p>Nueva Tarjeta</p>
              </div>
              
          </div>
          {tarjetas.map((tarjeta, index) => (
              <div key={tarjeta.id} className="card-dashboard tarjetasCreadas" style={{ backgroundColor: coloresTarjetas[index % coloresTarjetas.length] }}>
              <h4>{tarjeta.nombre}</h4>
              <p>Límite: {tarjeta.limite}</p>
              <p>Saldo: <span>${tarjeta.saldo}</span></p>
            </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default CuentasTarjetas;