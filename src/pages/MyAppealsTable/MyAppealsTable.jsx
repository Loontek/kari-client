import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../main.jsx";
import {getAllClients} from "../../api/userAPI.js";
import {getAllStatuses} from "../../api/statusAPI.js";
import {getAllEmployees} from "../../api/employeeAPI.js";
import {getUserAppeals} from "../../api/appealAPI.js";
import Table from "../../components/UI/Table/Table.jsx";
import {observer} from "mobx-react-lite";

const MyAppealsTable = observer(() => {
  const [appeals, setAppeals] = useState([])
  const [statuses, setStatuses] = useState([])
  const [employees, setEmployees] = useState([])
  const [clients, setClients] = useState([])
  const {user} = useContext(Context)
  const headers = [
    'id',
    'Тема',
    'Описание',
    'Создано',
    'Ответственный сотрудник',
    'Статус'
  ]
  const props = [
    'id',
    'title',
    'description',
    'createdAt',
    'employee',
    'status'
  ]

  useEffect(() => {
    getAllClients()
      .then(data => {
        setClients(data)
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
    if(employees.length !== 0 && statuses.length !== 0 && clients.length !== 0) {
      if(user._isAuth) {
        // console.log(user._isAuth)
        getUserAppeals(user._user.id)
          .then(data => {
            setAppeals(data.map(item => {
              return {
                ...item,
                status: statuses[item.statusId - 1].name,
                employee: employees[item.employeeId - 1]
                  ? `${employees[item.employeeId - 1].surName} ${employees[item.employeeId - 1].name} ${employees[item.employeeId - 1].patronymic}`
                  : '',
              }
            }))
          })
      }
    }
  }, [employees, statuses, clients])

  return (
    // <div></div>
    <Table headers={headers} data={appeals} props={props}/>
  );
});

export default MyAppealsTable;