import React, {useEffect, useState} from 'react';
import {getAllEmployees} from "../../api/employeeAPI.js";
import {getAllPosts} from "../../api/postAPI.js";
import Table from "../../components/UI/Table/Table.jsx";
import {getAllClients} from "../../api/userAPI.js";

const ClientsTable = () => {
  const [clients, setClients] = useState([])
  const headers = [
    'id',
    'Имя',
    'Фамилия',
    'Отчество',
    'Почта',
    'Номер телефона'
  ]
  const props = [
    'id',
    'name',
    'surName',
    'patronymic',
    'email',
    'phoneNumber'
  ]

  useEffect(() => {
    getAllClients()
      .then(data => {
        setClients(data)
      })
  },[])

  return (
    <Table headers={headers} data={clients} props={props} />
  );
};

export default ClientsTable;