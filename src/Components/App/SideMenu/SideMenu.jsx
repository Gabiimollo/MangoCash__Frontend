import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SideMenu.css';

import LogoConNombre from '../../../../public/assets/Landing/logo-nombre.png'
import DasboardIconMenu from '../../../../public/assets/App/SideMenu/dashboardIconMenu.png'

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
            </div>
        </div>
    </>
  );
};

export default Sidemenu;
