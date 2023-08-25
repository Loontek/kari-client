import React, {useEffect, useState} from 'react';
import styles from "./PriorityTable.module.css";
import {getAllPriorities} from "../../api/priorityAPI.js";
import Table from "../../components/UI/Table/Table.jsx";

const PriorityTable = () => {
  const [priorities, setPriorities] = useState([])
  const headers = ['№', 'Название', 'Номерной вариант']
  const props = ['id', 'name', 'numericalVersion']

  useEffect(() => {
    getAllPriorities()
      .then(data => setPriorities(data))
  }, [])

  return (
    <Table headers={headers} data={priorities} props={props}/>
  );
};

export default PriorityTable;