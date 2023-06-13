import React from 'react';
import styles from "./Table.module.css";

const Table = ({headers, data, props}) => {
  return (
    <table className={styles.Table}>
      <thead>
      <tr>
        {headers.map(item => (
          <th key={item}>{item}</th>
        ))}
      </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {props.map(prop => (
              <th key={prop}>{item[prop]}</th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;