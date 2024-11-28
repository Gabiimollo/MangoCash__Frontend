import React from 'react';
import './Facturas.css'; // Asegúrate de importar el archivo CSS

const Facturas = () => {
  // Facturas hardcodeadas
  const facturas = [
    {
      id: 'FAC123',
      fecha: '2024-11-25',
      monto: 1500,
      estado: 'Pagada',
    },
    {
      id: 'FAC124',
      fecha: '2024-11-20',
      monto: 3200,
      estado: 'Pendiente',
    },
    {
      id: 'FAC125',
      fecha: '2024-11-18',
      monto: 780,
      estado: 'Pagada',
    },
    {
      id: 'FAC126',
      fecha: '2024-11-15',
      monto: 2120,
      estado: 'Pendiente',
    },
  ];

  return (
    <div className="facturas-container">
      <h1 className="facturas-title">Listado de Facturas</h1>
      <table className="facturas-table">
        <thead>
          <tr>
            <th>ID de Factura</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura) => (
            <tr key={factura.id}>
              <td>{factura.id}</td>
              <td>{factura.fecha}</td>
              <td>${factura.monto}</td>
              <td className={factura.estado === 'Pagada' ? 'pagada' : 'pendiente'}>{factura.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Facturas;
