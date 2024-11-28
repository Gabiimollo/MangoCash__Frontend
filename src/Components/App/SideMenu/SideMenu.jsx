import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SideMenu.css';

import LogoConNombre from '../../../../public/assets/Landing/logo-nombre.png'
import DasboardIconMenu from '../../../../public/assets/App/SideMenu/dashboardIconMenu.png'
import ObjetivosIcon from '../../../../public/assets/App/SideMenu/ObjetivoIcon.png'
import CuentasTarjetasIconMenu from '../../../../public/assets/App/SideMenu/creditCardIconMenu.png'
import TransaccionesIconMenu from '../../../../public/assets/App/SideMenu/transaccionesIconMenu.png'
import FacturasIconMenu from '../../../../public/assets/App/SideMenu/facturasIconMenu.png'
import UserProfile from '../../../../public/assets/App/SideMenu/userProfile.png'

const Sidemenu = () => {

  return (
    <>
        <div className="sidebar-container">
            <div className='sidebar-brand'>
                <img className="sidebar-img" src={LogoConNombre} alt="" />
            </div>
            <div className='sidebar-link-container'>
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
            <div className="logout-item">
                <Link to={"/login"} className='sidebar-item'>
                    <img src="" alt="" />
                    <li className='sidebar-item-text'>Salir</li>
                </Link>
            </div>
            <div className="profile-item">
                <Link to={"/login"} className='sidebar-item'>
                    <img src="" alt="" />
                    <li className='sidebar-item-text'></li>
                </Link>
            </div>
        </div>
    </>
  );
};

export default Sidemenu;
