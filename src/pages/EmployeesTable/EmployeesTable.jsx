import React, {useEffect, useState} from 'react';
import {getAllEmployees} from "../../api/employeeAPI.js";
import {getAllPosts} from "../../api/postAPI.js";
import Table from "../../components/UI/Table/Table.jsx";

const EmployeesTable = () => {
  const [employees, setEmployees] = useState([])
  const headers = [
    '№',
    'Имя',
    'Фамилия',
    'Отчество',
    'Почта',
    'Номер телефона',
    'Дата рождения',
    'Дата регистрации',
    'Должность',
  ]
  const props = [
    'id',
    'name',
    'surName',
    'patronymic',
    'email',
    'phoneNumber',
    'birthDate',
    'registrationDate',
    'post',
  ]

  useEffect(() => {
    getAllEmployees()
      .then(data => {
        getAllPosts()
          .then(posts => {
            setEmployees(data.map(item => {
              return {
                ...item,
                post: posts[item.postId - 1].name
              }
            }))
          })
      })
  },[])

  return (
    <Table headers={headers} data={employees} props={props} />
  );
};

export default EmployeesTable;