import React from 'react';
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <h1>Добро пожаловать в центр поддержки Kari г. Истра</h1>
      <img src="/assets/goryachaya-liniya-kari.jpg" alt="Горячая линия"/>
    </div>
  );
};

export default HomePage;