import React, {useContext, useEffect, useState} from 'react';
import {getAllPriorities} from "../../api/priorityAPI.js";
import {getAllStatuses} from "../../api/statusAPI.js";
import {getAllEmployees} from "../../api/employeeAPI.js";
import {getAllAppeals, updateAppeal} from "../../api/appealAPI.js";
import styles from './EditForm.module.css';
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";

const EditForm = observer(() => {
  const [appeals, setAppeals] = useState([])
  const [priorities, setPriorities] = useState([])
  const [statuses, setStatuses] = useState([])
  const [employees, setEmployees] = useState([])
  const [edit, setEdit] = useState({})
  const {user} = useContext(Context)

  useEffect(() => {
    getAllPriorities()
      .then(data => {
        setPriorities(data)
      })

    getAllStatuses()
      .then(data => {
        setStatuses(data)
      })

    getAllEmployees()
      .then(data => {
        setEmployees(data)
      })

    getAllAppeals()
      .then(data => {
        setAppeals(data)
      })
  },[])

  const handleSelect = (e) => {
    setEdit(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    updateAppeal({
      id: edit.appeals,
      employeeId: edit.employees,
      statusId: edit.statuses,
      priorityId: edit.priorities,
    })

    setEdit({})
  }

  return (
    <form className={styles.EditForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Редактировать обращения</h2>
      <select name="appeals" placeholder={'Выберите обращение'} required onChange={handleSelect}>
        <option value="">Выберите обращение</option>
        {appeals.map(item => (
          <option value={item.id} key={item.id}>{item.title}</option>
        ))}
      </select>
      {user._user.role === 'ADMIN' &&
        <select name="employees" placeholder={'Выберите сотрудника'} onChange={handleSelect}>
          <option value="">Выберите сотрудника</option>
          {employees.map(item => (
            <option value={item.id} key={item.id}>{item.surName} {item.name} {item.patronymic}</option>
          ))}
        </select>
      }
      <select name="statuses" placeholder={'Выберите статус'} onChange={handleSelect}>
        <option value="">Выберите статус</option>
        {statuses.map(item => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))}
      </select>
      <select name="priorities" placeholder={'Выберите приоритет'} onChange={handleSelect}>
        <option value="">Выберите приоритет</option>
        {priorities.map(item => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))}
      </select>
      <PrimaryButton title={'Сохранить'} type={'submit'}/>
    </form>
  );
});

export default EditForm;