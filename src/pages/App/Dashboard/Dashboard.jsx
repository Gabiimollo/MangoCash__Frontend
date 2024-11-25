import React from 'react'
import './Dashboard.css'

import InfoCards from './cards/InfoCards'
import GastosPorCategoria from './cards/GastosPorCategoria'
import BalanceMensual from './cards/BalanceMensual'
import GoalCard from './cards/ObjetivosAhorroResumen';


const Dashboard = () => {

  const goals = [
    { name: 'Fondo de Emergencia', target: 5000, current: 1500 },
    { name: 'Ahorro para Viaje', target: 3000, current: 2000 },
    { name: 'Compra de Electrodomésticos', target: 1500, current: 700 },
  ];

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

      <div className="card-dashboard --goals-card-container">
        <h2>Mis Metas Financieras</h2>
        <div>
          {goals.map((goal, index) => (
              <GoalCard
                key={index}
                goalName={goal.name}
                targetAmount={goal.target}
                currentAmount={goal.current}
              />
            ))}
        </div>

      </div>

      </div>
      <div className="row-dashboard">
        <BalanceMensual />
      </div>
    </div>
  )
}

export default Dashboard