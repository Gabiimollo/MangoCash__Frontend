import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../Components/App/SideMenu/SideMenu';
import './AppLayout.css'; // Importamos el archivo CSS

const AppLayout = () => {
  return (
    <div className="layout">
      <aside>
        <SideMenu />
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
