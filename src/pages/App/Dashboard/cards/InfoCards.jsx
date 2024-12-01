import React from 'react'

import Ingresos from '../../../../../public/assets/App/Dashboard/ingresos.png'
import Gastos from '../../../../../public/assets/App/Dashboard/gastos.png'
import Factura from '../../../../../public/assets/App/Dashboard/facturas.png'
import SaldoRestante from '../../../../../public/assets/App/Dashboard/saldoRestante.png'

const InfoCards = ({titulo, valor}) => {

  let src = ''
  switch(titulo) {
    case "Total Ingresos":
      src = Ingresos
      break;
    case "Total Gastos": 
      src = Gastos
      break;
    case "Saldo restante":
      src = SaldoRestante
      break;
    case "Total Facturas":
      src = Factura
      break;
    default:
  }

  return (
    <div className="card-dashboard --infoCards">
        <div>
          <h3>{titulo}</h3>
          <img src={src} alt="" />
        </div>
        <p>{valor}</p>
    </div>
  )
}

export default InfoCards