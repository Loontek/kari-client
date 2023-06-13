import React, {useContext, useEffect, useState} from 'react';
import styles from './Auth.module.css';
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";
import {login} from "../../api/userAPI.js";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user} = useContext(Context)

  const goToRegistration = () => navigate('/reg')

  const submitHandler = (e) => {
    e.preventDefault()

    login(email, password)
      .then(data => {
        user.setUser(data)
        user.setIsAuth(true)
        navigate('/user-account')
      })
      .catch(error => setError(error.response.data.message))
  }

  useEffect(() => {
    setError('')
  }, [email, password])

  return (
    <div className={styles.Auth}>
      <form action="#" className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>Вход</h2>
        <input type="email" required placeholder={'Email'} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" required placeholder={'Пароль'} onChange={(e) => setPassword(e.target.value)} />
        {error && <span className={styles.error}>{error}</span>}
        <div className={styles.buttons} style={{marginTop: error ? 20 : 50}}>
          <PrimaryButton title={'Войти'} type={'submit'}/>
          <PrimaryButton title={'Создать аккаунт'} onClick={goToRegistration}/>
        </div>
      </form>
    </div>
  );
});

export default Auth;