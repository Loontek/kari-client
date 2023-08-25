import React, {useContext, useState} from 'react';
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {createPriority} from "../../api/priorityAPI.js";
import styles from './PriorityForm.module.css';
import {Context} from "../../main.jsx";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const PriorityForm = observer(() => {
  const [name, setName] = useState('')
  const [numericalVersion, setNumericalVersion] = useState('')
  const {user} = useContext(Context)
  const navigate = useNavigate()

  if(user.user.role !== 'ADMIN') {
    navigate('/user-account')
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleNumericalVersionChange = (e) => {
    setNumericalVersion(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createPriority(name, numericalVersion)

    setName('')
    setNumericalVersion('')
  }

  return (
    <form className={styles.PriorityForm}>
      <h2 className={styles.title}>Форма "Приоритеты"</h2>
      <input value={name} type="text" placeholder={'Название'} onChange={handleNameChange}/>
      <input value={numericalVersion} type="text" placeholder={'Номерной вариант'} onChange={handleNumericalVersionChange}/>
      <PrimaryButton title={'Отправить'} onClick={handleSubmit}/>
    </form>
  );
});

export default PriorityForm;