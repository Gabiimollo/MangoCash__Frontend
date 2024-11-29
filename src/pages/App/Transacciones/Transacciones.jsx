import React, {useState} from 'react';
import './Transacciones.css'; // Asegúrate de importar el archivo CSS
import EditSvg from '../../../../public/assets/App/Transactions/edit.png'
import DeleteSvg from '../../../../public/assets/App/Transactions/delete.png'

const Transacciones = () => {

  // Datos hardcodeados de transacciones
  const transactions = [
    { id: 1, description: 'Pago de servicios', date: '2024-11-01', amount: -50.00, type: 'Egreso' },
    { id: 2, description: 'Ingreso de salario', date: '2024-11-05', amount: 1200.00, type: 'Ingreso' },
    { id: 3, description: 'Compra en tienda', date: '2024-11-10', amount: -200.00, type: 'Egreso' },
    { id: 4, description: 'Transferencia recibida', date: '2024-11-12', amount: 500.00, type: 'Ingreso' },
    { id: 5, description: 'Pago de alquiler', date: '2024-11-15', amount: -450.00, type: 'Egreso' }
  ];

  //Logica de filtro por ingreso/egreso
  const [filter, setFilter] = useState('Todos')

  const filteredTransactions = transactions.filter((transaction) => {
    if(filter === 'Todos') return true;
    return transaction.type === filter
  })

  

  return (
    <div className="transacciones-container">
      <h1 className="transacciones-title">Transacciones</h1>

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
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.date}</td>
              <td className={transaction.amount < 0 ? 'negative' : 'positive'}>
                ${transaction.amount.toFixed(2)}
              </td>
              <td className={transaction.type === 'Ingreso' ? 'income' : 'expense'}>
                {transaction.type}
              </td>
              <td>
                <img src={EditSvg} alt="edit" className='edit-icon' />
              </td>
              <td>
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
