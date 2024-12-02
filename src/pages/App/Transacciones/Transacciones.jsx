import React, {useState} from 'react';
import './Transacciones.css'; // Asegúrate de importar el archivo CSS
import EditSvg from '../../../../public/assets/App/Transactions/edit.png'
import DeleteSvg from '../../../../public/assets/App/Transactions/delete.png'

const Transacciones = () => {

  // Datos hardcodeados de transacciones
  const transactions = [
    { id: 1, description: 'Salario', date: '1/12/2024', amount: 700000.00, type: 'Ingreso' },
    { id: 2, description: 'Transferencia recibida', date: '1/12/2024', amount: 2500.00, type: 'Ingreso' },
    { id: 3, description: 'Compra en tienda', date: '2/12/2024', amount: 200000.00, type: 'Egreso' },
    { id: 4, description: 'Pago de alquiler', date: '3/12/2024', amount: 450000.00, type: 'Egreso' }
  ];

  //Logica de filtro por ingreso/egreso
  const [filter, setFilter] = useState('Todos')

  const filteredTransactions = transactions.filter((transaction) => {
    if(filter === 'Todos') return true;
    return transaction.type === filter
  })

  return (
    <div className="transacciones-container">
      <h2 >Transacciones</h2>

      <div className='container-mini-menu'>
        <ul className='mini-menu'>
          <li className={`menu-option ${filter === 'Todos' ? 'active' : ''}`} onClick={() => setFilter('Todos') }>Todos</li>
          <li className={`menu-option ${filter === 'Ingreso' ? 'active' : '' } `} onClick={() => setFilter('Ingreso') } >Ingresos</li>
          <li className={`menu-option ${filter === 'Egreso' ? 'active' : '' } `} onClick={() => setFilter('Egreso')} >Egresos</li>
        </ul>
      </div>

      <table className="transacciones-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Descripción</th>
            <th style={{ textAlign: 'center' }} >Fecha</th>
            <th style={{ textAlign: 'center' }} >Monto</th>
            <th style={{ textAlign: 'center' }} >Tipo</th>
            <th style={{ textAlign: 'center' }} >Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.sort((a, b) => b.id - a.id).map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td style={{ textAlign: 'center' }}>{transaction.date}</td>
              <td style={{ textAlign: 'center' }} className={transaction.type === 'Ingreso' ? 'positive' : 'negative'}>
                ${transaction.amount.toFixed(2)}
              </td>
              <td style={{ textAlign: 'center' }} className={transaction.type === 'Ingreso' ? 'income' : 'expense'}>
                {transaction.type}
              </td>
              <td style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
                <img src={EditSvg} alt="edit" className='edit-icon' />
                <img src={DeleteSvg} alt="delete" className='delete-icon' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transacciones;
