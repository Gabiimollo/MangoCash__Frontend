import React from 'react';
import './Facturas.css';

const Facturas = () => {
  const facturasData = [
    { id: 1, empresa: 'Metrogas', vencimiento: '2024-12-10', monto: '$1,000', estado: 'Pendiente' },
    { id: 2, empresa: 'Edenor', vencimiento: '2024-12-15', monto: '$750', estado: 'Pagada' },
    { id: 3, empresa: 'Netflix', vencimiento: '2024-12-20', monto: '$500', estado: 'Pendiente' },
    { id: 4, empresa: 'Personal Flow', vencimiento: '2024-12-25', monto: '$1,200', estado: 'Pagada' },
    { id: 5, empresa: 'Seguro Auto', vencimiento: '2024-12-30', monto: '$900', estado: 'Pendiente' },
    { id: 6, empresa: 'Aysa', vencimiento: '2025-01-05', monto: '$400', estado: 'Pagada' },
    { id: 7, empresa: 'Claro', vencimiento: '2025-01-10', monto: '$650', estado: 'Pendiente' },
    { id: 8, empresa: 'Spotify', vencimiento: '2025-01-15', monto: '$300', estado: 'Pagada' },
    { id: 9, empresa: 'Pilates', vencimiento: '2025-01-20', monto: '$2,000', estado: 'Pendiente' },
  ];

  return (
    <div className="facturasContainer">
      <h2>Facturas</h2>
      <div className="facturasRowContainer">
        {facturasData.map((factura) => (
          <div className={`factura ${factura.estado === 'Pendiente' ? 'pendiente' : 'pagada'}`} key={factura.id}>
            <p className="factura-title"> {factura.empresa}</p>
            <p>Vencimiento: {factura.vencimiento}</p>
            <p>Monto: {factura.monto}</p>
            <p>Estado: <span className='estado'>{factura.estado}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facturas;
