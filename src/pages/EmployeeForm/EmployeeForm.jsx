import React, {useContext, useEffect, useState} from 'react';
import styles from './EmployeeForm.module.css';
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {Context} from "../../main.jsx";
import {useNavigate} from "react-router-dom";
import {getAllPosts} from "../../api/postAPI.js";
import {createEmployee} from "../../api/employeeAPI.js";
import {observer} from "mobx-react-lite";

const EmployeeForm = observer(() => {
  const [localEmployee, setLocalEmployee] = useState({
    email: '',
    password: '',
    name: '',
    surName: '',
    patronymic: '',
    phoneNumber: '',
    birthDate: '',
    registrationDate: '',
    postId: 1
  })
  const [password, setPassword] = useState('')
  const [isShort, setIsShort] = useState(false)
  const [posts, setPosts] = useState([])
  const {user} = useContext(Context)
  const navigate = useNavigate()

  if(user.user.role !== 'ADMIN') {
    navigate('/user-account')
  }

  const handleInput = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    if(inputName === 'password') {
      setPassword(value)
      return
    }

    setLocalEmployee(prevState => {
      return {
        ...prevState,
        [inputName]: value
      }
    })
  }

  const handleSelect = (e) => {
    setLocalEmployee(prevState => {
      return {
        ...prevState,
        postId: e.target.value
      }
    })
  }

  useEffect(() => {
    getAllPosts()
      .then(data => {
        setPosts(data)
      })
  }, [])

  useEffect(() => {
    if(password.length < 8) {
      setIsShort(true)
    };

    if(password.length >= 8) {
      setIsShort(false)
    }

    setLocalEmployee(prevState => {
      return {
        ...prevState,
        password
      }
    })
  }, [password])

  const handleSubmit = (e) => {
    e.preventDefault()

    createEmployee({
      ...localEmployee,
      registrationDate: new Date(Date.now()).toISOString()
    })

    setLocalEmployee({
      email: '',
      password: '',
      name: '',
      surName: '',
      patronymic: '',
      phoneNumber: '',
      birthDate: '',
      registrationDate: '',
      postId: 1
    })
  }

  return (
    <form className={styles.EmployeeForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Регистрация</h2>
      <input value={localEmployee.surName} type="text" placeholder={'Фамилия'} name={'surName'} onInput={handleInput} required />
      <input value={localEmployee.name} type="text" placeholder={'Имя'} name={'name'} onChange={handleInput} required />
      <input value={localEmployee.patronymic} type="text" placeholder={'Отчество'} name={'patronymic'} onChange={handleInput} required />
      <input value={localEmployee.phoneNumber} type="tel" placeholder={'Телефон'} name={'phoneNumber'} onChange={handleInput} required />
      <input value={localEmployee.email} type="email" placeholder={'Почта'} name={'email'} onChange={handleInput} required />
      <input value={localEmployee.birthDate} type="date" placeholder={'Дата рождения'} name={'birthDate'} onChange={handleInput} required />
      <select name={'postId'} onChange={handleSelect} required defaultValue={0}>
        <option value="" disabled>Выберите должность</option>
        {posts.map(item => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))}
      </select>
      <div className={styles.password}>
        <input value={localEmployee.password} type="password" placeholder={'Пароль'} name={'password'} onChange={handleInput} required />
        {isShort && <span className={styles.error}>Пароль меньше 8 символов</span>}
      </div>
      <PrimaryButton title={'Отправить'} type={'submit'}/>
    </form>
  );
});

export default EmployeeForm;