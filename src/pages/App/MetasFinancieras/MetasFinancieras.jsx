import React from "react";
import "./MetasFinancieras.css";
import AddSvg from '../../../../public/assets/App/agregar.png'


const MetasFinancieras = () => {
  const metasFinancieras = [
    { descripcion: "Auto nuevo", progress: { max: 10000000, value: 1000000 }, fechaLimite: "Jun/2025" },
    { descripcion: "Vacaciones", progress: { max: 500000, value: 100000 }, fechaLimite: "Dic/2024" },
    { descripcion: "Inversiones", progress: { max: 30000, value: 10000 }, fechaLimite: "Abr/2026" },
    { descripcion: "Fondo de Emergencias", progress: { max: 30000, value: 10000 }, fechaLimite: "Abr/2026" },
    { descripcion: "Jubilacion", progress: { max: 30000, value: 10000 }, fechaLimite: "Abr/2026" },
  ];

  // Formateo numérico
  function formateoNumerico(numero, cantDecimales) {
    return Number(numero)
      .toFixed(cantDecimales)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="metasFinancieras-container">
      <div className="metas">
        <h2>Metas y Objetivos</h2>
        <img src={AddSvg} className="add-icon" alt="add-icon" />
      </div>
    

          <div className="card-container-metas">
          {metasFinancieras.map((meta) => {
            const porcentaje = ((meta.progress.value / meta.progress.max) * 100).toFixed(2).replace(".", ",");
            const max = formateoNumerico(meta.progress.max, 0);
            const value = formateoNumerico(meta.progress.value, 0);
            return (
              <div className="card-dashboard --cardMetas">
                <div className="cardMetasHeader">
                  <h4>{meta.descripcion}</h4>
                  <p className="porcentajeMetas">{porcentaje} %</p>
                </div>
                <div>
                  <p className="fechaLimiteMetas">Fecha límite: {meta.fechaLimite}</p>
                  <progress max={meta.progress.max} value={meta.progress.value}></progress>
                  <p>{value} de {max}</p>
                </div>
              </div>
          );
        })}
        </div>
      </div>
  );
};

export default MetasFinancieras;
