import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    <Footer />
    </>
  );
};

export default Layout;