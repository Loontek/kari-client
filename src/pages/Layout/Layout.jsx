import React from 'react';
import Header from "../../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;