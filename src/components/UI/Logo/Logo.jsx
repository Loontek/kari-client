import React from 'react';
import styles from './Logo.module.css';
import {NavLink} from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className={styles.Logo} to={'/'}>
      <img src="/assets/16697308190d27788b7515d042b6e152581d7ea994.svg" alt="Logo"/>
    </NavLink>
  );
};

export default Logo;