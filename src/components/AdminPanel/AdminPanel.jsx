import React from 'react';
import Panel from "../UI/Panel/Panel.jsx";

const AdminPanel = () => {
  const panel = [
    'Аккаунт',
    'Обращения',
    'Редактировать обращения',
    'Клиенты',
    'Сотрудники',
    'Таблица приоритетов',
    'Таблица должностей',
    'Таблица статусов',
    'Форма "Приоритеты"',
    'Форма "Должности"',
    'Форма "Статусы"',
    'Форма "Сотрудники"'
  ]

  const paths = [
    'user-account',
    'appeals',
    'appeal-edit-form',
    'clients',
    'employees',
    'priority-table',
    'post-table',
    'status-table',
    'priority-form',
    'post-form',
    'status-form',
    'employee-form'
  ]

  return (
    <Panel panel={panel} paths={paths} />
  );
};

export default AdminPanel;