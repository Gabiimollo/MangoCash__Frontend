import React from 'react';
import cerditoAhorro from '../../../../../public/assets/App/Dashboard/chanchitoAhorro.png';

const ObjetivosAhorroResumen = () => {
  const metasFinancieras = [
    { descripcion: "Auto nuevo", progress: { max: 10000000, value: 1000000 }, fechaLimite: "Jun/2025" },
    { descripcion: "Vacaciones", progress: { max: 500000, value: 100000 }, fechaLimite: "Dic/2024" },
    { descripcion: "Inversiones", progress: { max: 30000, value: 10000 }, fechaLimite: "Abr/2026" },
  ];

  // Formateo de números
  function formateoNumerico(numero) {
    return Number(numero)
      .toFixed(0)
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <div className="card-dashboard --metasFinancieras">
      <h3>Resumen Metas Financieras</h3>
      <div className="metas-container">
        {/* Resumen general */}
        <div className="metas-resumenCard">
          <div>
            <h4>Ahorros</h4>
            <img src={cerditoAhorro} alt="" />
          </div>
          <div>
            <p>En total:</p>
            <div>
              <p style={{ color: "orange" }} >${formateoNumerico(metasFinancieras.reduce((acc, meta) => acc + meta.progress.value, 0))}</p>
              <p>/${formateoNumerico(metasFinancieras.reduce((acc, meta) => acc + meta.progress.max, 0))}</p>
            </div>
            <p style={{ paddingTop: 10 }}>Restan:</p>
            <p>
              ${formateoNumerico(metasFinancieras.reduce((acc, meta) => acc + (meta.progress.max - meta.progress.value), 0))}
            </p>
          </div>
        </div>

        {/* Resumen individual */}
        {metasFinancieras.map((meta, index) => {
          const restante = meta.progress.max - meta.progress.value;

          return (
            <div key={index} className="metas-resumenCard">
              <div style={{ height: 40 }}>
                <h4>{meta.descripcion}</h4>
              </div>
              <div>
                <p>En total:</p>
                <div>
                  <p style={{ color: "orange" }}>${formateoNumerico(meta.progress.value)}</p>
                  <p>/${formateoNumerico(meta.progress.max)}</p>
                </div>
                <p style={{ paddingTop: 10 }}>Restan:</p>
                <p>${formateoNumerico(restante)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ObjetivosAhorroResumen;
