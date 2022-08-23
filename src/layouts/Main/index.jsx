import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';

import './style.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-layout__container">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
