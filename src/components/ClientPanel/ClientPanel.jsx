import React from 'react';
import Panel from "../UI/Panel/Panel.jsx";

const ClientPanel = () => {
  const panel = [
    'Аккаунт',
    'Мои Обращения'
  ]

  const paths = [
    'user-account',
    'my-appeals'
  ]

  return (
    <Panel panel={panel} paths={paths} />
  );
};

export default ClientPanel;