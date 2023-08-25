import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import styles from "./Panel.module.css";

const Panel = ({ panel, paths }) => {
  const location = useLocation()

  return (
    <aside className={styles.Panel}>
      <ul className={styles.list}>
        {panel.map(item => {
          const isActive = location.pathname === '/user-account' && panel.indexOf(item) === 0
            ? true
            : paths.indexOf(location.pathname.split('/')[2]) === panel.indexOf(item)

          return (
            <li key={item} className={
              isActive
                ? [styles.item, styles.item_active].join(' ')
                : styles.item
            }>
              <NavLink className={styles.link} to={
                panel.indexOf(item)
                  ? `/user-account/${paths[panel.indexOf(item)]}`
                  : '/user-account'
              } >
                {item}
              </NavLink>
            </li>
          )})}
      </ul>
    </aside>
  );
};

export default Panel;