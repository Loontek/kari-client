import React from 'react';
import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ title, type, onClick }) => {
  return (
    <button className={styles.PrimaryButton} type={type ? type : 'button'} onClick={onClick}>
      {title}
    </button>
  );
};

export default PrimaryButton;