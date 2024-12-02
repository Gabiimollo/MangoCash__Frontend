import React from 'react'
import './Dashboard.css'

import InfoCards from './cards/InfoCards'
import GastosPorCategoria from './cards/GastosPorCategoria'
import BalanceMensual from './cards/BalanceMensual'
import MetasFinancieras from './cards/MetasFinancieras';


const Dashboard = () => {

  return (
    <div className='contenedor-principal'>
      <div className="row-dashboard">
        <InfoCards titulo={"Total Ingresos"} valor={"$700.000"}/>
        <InfoCards titulo={"Total Gastos"} valor={"$600.000"}/>
        <InfoCards titulo={"Saldo restante"} valor={"$100.000"}/>
        <InfoCards titulo={"Total Facturas"} valor={"$50.000"}/>
      </div>
      <div className="row-dashboard">
        <GastosPorCategoria />
        <MetasFinancieras />
      </div>
      <div className="row-dashboard">
        <BalanceMensual />
      </div>
    </div>
  )
}

export default Dashboard