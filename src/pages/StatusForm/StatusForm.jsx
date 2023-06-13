import React, {useContext, useState} from 'react';
import styles from './StatusForm.module.css';
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {createStatus} from "../../api/statusAPI.js";
import {Context} from "../../main.jsx";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const StatusForm = observer(() => {
  const [name, setName] = useState('')
  const {user} = useContext(Context)
  const navigate = useNavigate()

  if(user.user.role !== 'ADMIN') {
    navigate('/user-account')
  }
  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createStatus(name)

    setName('')
  }

  return (
    <form className={styles.StatusForm}>
      <h2 className={styles.title}>Форма "Статусы"</h2>
      <input value={name} type="text" placeholder={'Название'} onChange={handleChange}/>
      <PrimaryButton title={'Отправить'} onClick={handleSubmit}/>
    </form>
  );
});

export default StatusForm;