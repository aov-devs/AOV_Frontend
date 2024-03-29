import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './style.scss';

const Layout = ({ title = 'AOV', styles = {}, children }) => {
  return (
    <div className="layout" style={styles}>
      <Helmet>
        <title>{title} | The Archive of Vanitas</title>
      </Helmet>
      <Navbar />
      <div className="layout__container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
