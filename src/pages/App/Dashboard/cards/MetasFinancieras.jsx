import React from 'react'

import cerditoAhorro from '../../../../../public/assets/App/Dashboard/chanchitoAhorro.png'

const ObjetivosAhorroResumen = () => {

  const metas = [
    { nombre: 'Auto', valor: 1000 },
    { nombre: 'iPhone', valor: 2000 },
    { nombre: 'Vacaciones', valor: 3000 },
  ]

  return (
    <div className='card-dashboard --metasFinancieras'>
      <h3>Resumen Metas Financieras</h3>
      <div className='metas-container'>
        <div className='metas-resumenCard'>
          <div>
            <h4>Ahorros</h4>
            <img src={cerditoAhorro} alt="" />
          </div>
          <div>
            <p>En total:</p>
            <div>
              <p>$6000</p>
              <p>/$10000</p>
            </div>
          </div>
          <div>
            <p>Restan:</p>
            <p>$4000</p>
          </div>
        </div>

        <div className='metas-resumenCard'>
            <h4>Vacaciones</h4>
          <div>
            <p>En total:</p>
            <div>
              <p>$3000</p>
              <p>/$5000</p>
            </div>
          </div>
          <div>
            <p>Restan:</p>
            <p>$2000</p>
          </div>
        </div>

        <div className='metas-resumenCard'>
            <h4>Auto Nuevo</h4>
          <div>
            <p>En total:</p>
            <div>
              <p>$2000</p>
              <p>/$3000</p>
            </div>
          </div>
          <div>
            <p>Restan:</p>
            <p>$1000</p>
          </div>
        </div>
        
        <div className='metas-resumenCard'>
            <h4>Inversiones</h4>
          <div>
            <p>En total:</p>
            <div>
              <p>$1000</p>
              <p>/$2000</p>
            </div>
          </div>
          <div>
            <p>Restan:</p>
            <p>$1000</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ObjetivosAhorroResumen