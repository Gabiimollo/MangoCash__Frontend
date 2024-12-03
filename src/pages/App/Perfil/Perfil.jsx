import React from 'react';
import './Perfil.css'; // Asegúrate de importar el archivo CSS
import AvatarPic from '../../../../public/assets/App/SideMenu/AvatarPic/image.png'


const Perfil = () => {
  // Datos hardcodeados del usuario
  const user = {
    name: 'María Martinez',
    email: 'mariamartinez@example.com',
    phone: '+54 9 11 2345 6789',
    address: 'Buenos Aires, Argentina',
  };

  return (
    <div className="perfil-container">
      <h1 className="perfil-title">Perfil de Usuario</h1>
      <div className="perfil-info">
        <div className="perfil-avatar">
          <img src={AvatarPic} alt="Avatar" className="avatar" />
          <h2>{user.name}</h2>
        </div>
        <div className="perfil-details">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Dirección:</strong> {user.address}</p>
        </div>
      </div>
       <div className="perfil-buttons">
        <button className="btn-edit">Editar Perfil</button>
        <button className="btn-save">Guardar Cambios</button>
      </div>
    </div>
  );
};

export default Perfil;
