import React from 'react'

const InfoCards = ({titulo, valor}) => {
  return (
    <div className="card-dashboard">
        <h3>{titulo}</h3>
        <p>{valor}</p>
    </div>
  )
}

export default InfoCards