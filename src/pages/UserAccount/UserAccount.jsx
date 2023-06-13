import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import styles from './UserAccount.module.css';
import AdminPanel from "../../components/AdminPanel/AdminPanel.jsx";
import {Outlet} from "react-router-dom";
import ClientPanel from "../../components/ClientPanel/ClientPanel.jsx";
import EmployeePanel from "../../components/EmployeePanel/EmployeePanel.jsx";

const UserAccount = observer(() => {
  const {user} = useContext(Context)

  return (
    <div className={styles.UserAccount}>
      {JSON.parse(JSON.stringify(user.user)).role === 'ADMIN' && <AdminPanel />}
      {JSON.parse(JSON.stringify(user.user)).role === 'EMPLOYEE' && <EmployeePanel />}
      {JSON.parse(JSON.stringify(user.user)).role === 'USER' && <ClientPanel />}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});

export default UserAccount;