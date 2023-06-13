import React, {useContext} from 'react';
import styles from './Header.module.css';
import Logo from "../UI/Logo/Logo.jsx";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import IconButton from "../UI/IconButton/IconButton.jsx";

const Header = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const goToAuth = () => navigate('/login')

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header className={styles.Header}>
      <Logo />
      <div className={styles.buttons}>
        {user.isAuth
          ?
          <>
            <IconButton icon={'/assets/user.png'} onClick={() => navigate('/user-account')}/>
            <PrimaryButton title={'Выйти'} onClick={logOut} />
          </>
          : <PrimaryButton title={'Войти или зарегетстрироваться'} onClick={goToAuth} />
        }
      </div>
    </header>
  );
});

export default Header;