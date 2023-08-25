import React, {useEffect, useState} from 'react';
import {getAllStatuses} from "../../api/statusAPI.js";
import Table from "../../components/UI/Table/Table.jsx";
import styles from './StatusTable.module.css';

const StatusTable = () => {
  const [statuses, setStatuses] = useState([])
  const headers = ['№', 'Название']
  const props = ['id', 'name']

  useEffect(() => {
    getAllStatuses()
      .then(data => setStatuses(data))
  }, [])

  return (
    <Table headers={headers} data={statuses} props={props} />
  );
};

export default StatusTable;