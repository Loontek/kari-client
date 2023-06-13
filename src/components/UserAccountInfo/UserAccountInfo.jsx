import React from 'react';
import styles from './UserAccountInfo.module.css';

const UserAccountInfo = ({ user, post }) => {
  return (
    <div className={styles.UserAccountInfo}>
      <img className={styles.avatar} src="/assets/user.png" alt="user"/>
      <div className={styles.content}>
        <h2 className={styles.title}>{user.name}</h2>
        <span><b>Телефон</b>: {user.phoneNumber}</span>
        <span><b>Email</b>: {user.email}</span>
        <span><b>Дата регистрации</b>: {user.createdAt?.split('T')[0]}</span>
        {user.role === undefined &&
          <>
            <span><b>Должность</b>: {post}</span>
            <span><b>Дата рождения</b>: {user.birthDate?.split('T')[0]}</span>
          </>
        }
      </div>
    </div>
  );
};

export default UserAccountInfo;