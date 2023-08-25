import React from 'react';
import styles from './IconButton.module.css';

const IconButton = ({ icon, onClick }) => {
  return (
    <button type={"button"} className={styles.IconButton} onClick={onClick}>
      <img src={icon} alt="Icon button"/>
    </button>
  );
};

export default IconButton;