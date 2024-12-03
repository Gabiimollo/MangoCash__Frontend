import React from 'react';
import './Facturas.css';

const Facturas = () => {
  const facturasData = [
    { id: 1, numero: 'F001-0001', fecha: '2024-12-01', monto: '$1,000' },
    { id: 2, numero: 'F001-0002', fecha: '2024-12-02', monto: '$750' },
    { id: 3, numero: 'F001-0003', fecha: '2024-12-03', monto: '$500' },
    { id: 4, numero: 'F001-0004', fecha: '2024-12-04', monto: '$1,200' },
    { id: 5, numero: 'F001-0005', fecha: '2024-12-05', monto: '$900' },
    { id: 6, numero: 'F001-0006', fecha: '2024-12-06', monto: '$400' },
    { id: 7, numero: 'F001-0007', fecha: '2024-12-07', monto: '$650' },
    { id: 8, numero: 'F001-0008', fecha: '2024-12-08', monto: '$300' },
    { id: 9, numero: 'F001-0009', fecha: '2024-12-09', monto: '$2,000' },
  ];

  return (
    <div className="facturasContainer">
      <h2>Facturas</h2>
      <div className="facturasRowContainer">
        {facturasData.map((factura) => (
          <div className="factura" key={factura.id}>
            <p className="factura-title">Factura: {factura.numero}</p>
            <p>Fecha: {factura.fecha}</p>
            <p>Monto: {factura.monto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facturas;
