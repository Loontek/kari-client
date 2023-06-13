import React, {useContext, useEffect, useState} from 'react';
import UserAccountInfo from "../../components/UserAccountInfo/UserAccountInfo.jsx";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton.jsx";
import {Context} from "../../main.jsx";
import {getOne} from "../../api/userAPI.js";
import {observer} from "mobx-react-lite";
import styles from './Account.module.css';
import {createAppeal} from "../../api/appealAPI.js";
import {getOneEmployee} from "../../api/employeeAPI.js";
import {getOnePost} from "../../api/postAPI.js";

const Account = observer(() => {
  const {user} = useContext(Context)
  const [localUser, setLocalUser] = useState({})
  const [post, setPost] = useState('')
  const [appeal, setAppeal] = useState({
    title: '',
    description: '',
    userId: localUser.id
  })

  useEffect(() => {
    if(user.isAuth) {
      if(user.user.role === 'EMPLOYEE') {
        getOneEmployee(JSON.parse(JSON.stringify(user.user.email)))
          .then(data => setLocalUser(data))
        return
      }

      getOne(JSON.parse(JSON.stringify(user.user.id)))
        .then(data => setLocalUser(data))
    }
  }, [user.isAuth])

  useEffect(() => {
    if(user.user.role === 'EMPLOYEE' && localUser.postId) {
      getOnePost(localUser.postId)
        .then(data => {
          setPost(data.name)
        })

      return
    }
  },[localUser])
  const handleInput = (e) => {
    setAppeal(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createAppeal({
      ...appeal,
      userId: localUser.id
    })

    setAppeal({
      title: '',
      description: '',
      userId: localUser.id
    })
  }

  return (
    <>
      <UserAccountInfo user={localUser} post={post}/>
      {user.user.role === 'USER' &&
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Обращение</h2>
          <input type="text" required placeholder={'Тема обращения'} name={'title'} onChange={handleInput}/>
          <textarea name="description" required placeholder={'Комментарий'} onChange={handleInput}/>
          <PrimaryButton title={'Отправить'} type={'submit'}/>
        </form>
      }
    </>
  );
});

export default Account;