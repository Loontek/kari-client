import React, {useContext, useEffect, useState} from 'react';
import styles from './Registration.module.css';
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";
import {registration} from "../../api/userAPI.js";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";

const Registration = observer(() => {
  const [localUser, setLocalUser] = useState({})
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSame, setIsSame] = useState(false)
  const [isShort, setIsShort] = useState(false)
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const handleInput = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    if(inputName === 'password') {
      setPassword(value)
      return
    }

    if(inputName === 'confirmPassword') {
      setConfirmPassword(value)
      return;
    }

    setLocalUser(prevState => {
      return {
        ...prevState,
        [inputName]: value
      }
    })
  }

  useEffect(() => {
    if(password.length < 8) {
      setIsShort(true)
      return
    };

    setIsShort(false)

    if(password !== confirmPassword || password === '') {
      setIsSame(false)
      return
    }

    setIsSame(true)
    setLocalUser(prevState => {
      return {
        ...prevState,
        password
      }
    })
  }, [password, confirmPassword])

  const handleSubmit = (e) => {
    e.preventDefault()

    const res = registration(localUser)

    res.then(data => {
      user.setUser(data)
      user.setIsAuth(true)
      navigate('/user-account')
    })
  }

  return (
    <div className={styles.Registration}>
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Регистрация</h2>
        <input value={user.surName} type="text" placeholder={'Фамилия'} name={'surName'} onInput={handleInput} required />
        <input value={user.name} type="text" placeholder={'Имя'} name={'name'} onChange={handleInput} required />
        <input value={user.patronymic} type="text" placeholder={'Отчество'} name={'patronymic'} onChange={handleInput} required />
        <input value={user.phoneNumber} type="tel" placeholder={'Телефон'} name={'phoneNumber'} onChange={handleInput} required />
        <input value={user.email} type="email" placeholder={'Почта'} name={'email'} onChange={handleInput} required />
        <div className={styles.password}>
          <input value={user.password} type="password" placeholder={'Пароль'} name={'password'} onChange={handleInput} required />
          {isShort && <span className={styles.error}>Пароль меньше 8 символов</span>}
          <input type="password" placeholder={'Повторите пароль'} name={'confirmPassword'} onChange={handleInput} required />
          {!isSame && <span className={styles.error}>Пароль не совпадает</span>}
        </div>
        <div className={styles.buttons}>
          <PrimaryButton title={'Создать аккаунт'} />
        </div>
      </form>
    </div>
  );
});

export default Registration;