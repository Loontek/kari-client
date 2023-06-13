import React from 'react';
import Panel from "../UI/Panel/Panel.jsx";

const EmployeePanel = () => {
  const panel = [
    'Аккаунт',
    'Обращения',
    'Редактировать обращения',
    'Клиенты',
    'Таблица приоритетов',
    'Таблица статусов',
  ]

  const paths = [
    'user-account',
    'appeals',
    'appeal-edit-form',
    'clients',
    'priority-table',
    'status-table',
  ]

  return (
    <Panel panel={panel} paths={paths} />
  );
};

export default EmployeePanel;