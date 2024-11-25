import React from 'react'
import './Dashboard.css'

import InfoCards from './cards/InfoCards'
import GastosPorCategoria from './cards/GastosPorCategoria'
import BalanceMensual from './cards/BalanceMensual'

const Dashboard = () => {
  return (
    <div className='contenedor-principal'>
      <div className="row-dashboard">
        <InfoCards titulo={"Total Ingresos"} valor={"$5000"}/>
        <InfoCards titulo={"Total Gastos"} valor={"$2000"}/>
        <InfoCards titulo={"Saldo restante"} valor={"$3000"}/>
        <InfoCards titulo={"Total Facturas"} valor={"$1000"}/>
      </div>
      <div className="row-dashboard">
        <GastosPorCategoria />
      </div>
      <div className="row-dashboard">
        <BalanceMensual />
      </div>
    </div>
  )
}

export default Dashboard