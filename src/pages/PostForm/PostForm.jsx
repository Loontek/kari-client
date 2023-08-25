import React, {useContext, useState} from 'react';
import styles from './PostForm.module.css';
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {createPost} from "../../api/postAPI.js";
import {Context} from "../../main.jsx";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const PostForm = observer(() => {
  const [name, setName] = useState('')
  const {user} = useContext(Context)
  const navigate = useNavigate()

  if(user.user.role !== 'ADMIN') {
    navigate('/user-account')
  }
  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createPost(name)

    setName('')
  }

  return (
    <form className={styles.PostForm}>
      <h2 className={styles.title}>Форма "Должности"</h2>
      <input value={name} type="text" placeholder={'Название'} onChange={handleChange}/>
      <PrimaryButton title={'Отправить'} onClick={handleSubmit}/>
    </form>
  );
});

export default PostForm;