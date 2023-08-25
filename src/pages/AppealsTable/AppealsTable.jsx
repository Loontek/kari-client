import React, {useContext, useEffect, useState} from 'react';
import {getAllAppeals} from "../../api/appealAPI.js";
import Table from "../../components/UI/Table/Table.jsx";
import {getAllStatuses} from "../../api/statusAPI.js";
import {getAllPriorities} from "../../api/priorityAPI.js";
import {getAllUsers} from "../../api/userAPI.js";
import {getAllEmployees} from "../../api/employeeAPI.js";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";

const AppealsTable = observer(() => {
  const [appeals, setAppeals] = useState([])
  const [priorities, setPriorities] = useState([])
  const [statuses, setStatuses] = useState([])
  const [employees, setEmployees] = useState([])
  const [users, setUsers] = useState([])
  const {user} = useContext(Context)
  const headers = [
    'id',
    'Тема',
    'Описание',
    'Создано',
    'Отправивший пользователь',
    'Ответственный сотрудник',
    'Статус',
    'Приоритет'
  ]
  const props = [
    'id',
    'title',
    'description',
    'createdAt',
    'user',
    'employee',
    'status',
    'priority'
  ]

  useEffect(() => {
    getAllUsers()
      .then(data => {
        setUsers(data)
      })

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
  },[])

  useEffect(() => {
    if(employees.length !== 0 && statuses.length !== 0 && priorities.length !== 0 && users.length !== 0) {
      if(user.isAuth) {
        getAllAppeals()
          .then(data => {
            setAppeals(data.map(item => {
              return {
                ...item,
                user: `${users.find(user => user.id === item.id)?.surName} ${users.find(user => user.id === item.id)?.name} ${users.find(user => user.id === item.id)?.patronymic}`,
                status: statuses[item.statusId - 1].name,
                priority: priorities[item.priorityId - 1].name,
                employee: employees[item.employeeId - 1]
                  ? `${employees[item.employeeId - 1].surName} ${employees[item.employeeId - 1].name} ${employees[item.employeeId - 1].patronymic}`
                  : '',
              }
            }))
          })
      }
    }

  }, [employees, statuses, priorities, users])

  return (
    <Table headers={headers} data={appeals} props={props}/>
  );
});

export default AppealsTable;