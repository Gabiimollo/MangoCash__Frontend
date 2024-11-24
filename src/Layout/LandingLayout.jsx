import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Landing/Navbar/Navbar'
import Footer from '../Components/Landing/Footer/Footer'

const LandingLayout = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="display-flex">
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
};

export default LandingLayout;
