import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SideMenu.css';

import LogoConNombre from '../../../../public/assets/Landing/logo-nombre.png'
import DasboardIconMenu from '../../../../public/assets/App/SideMenu/dashboardIconMenu.png'
import ObjetivosIcon from '../../../../public/assets/App/SideMenu/objetivoIcon.png'
import CuentasTarjetasIconMenu from '../../../../public/assets/App/SideMenu/creditCardIconMenu.png'
import TransaccionesIconMenu from '../../../../public/assets/App/SideMenu/transaccionesIconMenu.png'
import FacturasIconMenu from '../../../../public/assets/App/SideMenu/facturasIconMenu.png'
import UserProfile from '../../../../public/assets/App/SideMenu/userProfile.png'
import SignOut from '../../../../public/assets/App/SideMenu/SignOut.png'

import AvatarPic from '../../../../public/assets/App/SideMenu/AvatarPic/image.png'

const Sidemenu = () => {

  return (
    <>
        <div className="sidebar-container">
            <div className='sidebar-brand'>
                <img className="sidebar-img" src={LogoConNombre} alt="" />
            </div>
            <div className='sidebar-link-container'>
                <div className='sidebar-links-div'>
                    <Link to={"/app/dashboard"} className='sidebar-item'>
                        <img width="24px" src={DasboardIconMenu} alt="" />
                        <li className='sidebar-item-text'>Dasboard</li>
                    </Link>
                    <Link to={"/app/objetivos"} className='sidebar-item'>
                        <img width="24px" src={ObjetivosIcon} alt="" />
                        <li className='sidebar-item-text'>Metas Financieras</li>
                    </Link>
                    <Link to={"/app/cuentas-tarjetas"} className='sidebar-item'>
                        <img width="24px" src={CuentasTarjetasIconMenu} alt="" />
                        <li className='sidebar-item-text'>Cuentas y Tarjetas</li>
                    </Link>
                    <Link to={"/app/transacciones"} className='sidebar-item'>
                        <img width="24px" src={TransaccionesIconMenu} alt="" />
                        <li className='sidebar-item-text'>Transacciones</li>
                    </Link>
                    <Link to={"/app/facturas"} className='sidebar-item'>
                        <img width="24px" src={FacturasIconMenu} alt="" />
                        <li className='sidebar-item-text'>Facturas</li>
                    </Link>
                    <Link to={"/app/perfil"} className='sidebar-item'>
                        <img width="24px" src={UserProfile} alt="" />
                        <li className='sidebar-item-text'>Perfil</li>
                    </Link>
                </div>

                <div className='sidebar-links-div login-menu'>
                    <div className='sidebar-item profile-item'>
                        <img src={AvatarPic} alt="" width='50px'/>
                        <p className='sidebar-item-text'>Maria Martinez</p>
                    </div>
                    <Link to={"/login"} className='sidebar-item logout-item'>
                        <img width="24px" src={SignOut} alt="" />
                        <li className='sidebar-item-text'>Salir</li>
                    </Link>
                </div>
            </div>
        </div>
    </>
  );
};

export default Sidemenu;
