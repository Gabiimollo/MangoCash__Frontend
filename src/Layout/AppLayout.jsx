import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import SideMenu from '../Components/App/SideMenu/SideMenu';


const AppLayout = () => {
  return (
    <>
        <aside>
            <SideMenu />
        </aside>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default AppLayout