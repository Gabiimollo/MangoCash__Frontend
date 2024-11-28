import React from 'react';
import './Perfil.css'; // Asegúrate de importar el archivo CSS

const Perfil = () => {
  // Datos hardcodeados del usuario
  const user = {
    name: 'Juan Gabriel',
    email: 'juan.gabriel@example.com',
    phone: '+54 9 11 2345 6789',
    address: 'Buenos Aires, Argentina',
    avatar: 'https://via.placeholder.com/150',
  };

  return (
    <div className="perfil-container">
      <h1 className="perfil-title">Perfil de Usuario</h1>
      <div className="perfil-info">
        <div className="perfil-avatar">
          <img src={user.avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="perfil-details">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Dirección:</strong> {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
