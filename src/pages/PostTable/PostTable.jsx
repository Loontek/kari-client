import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../api/postAPI.js";
import Table from "../../components/UI/Table/Table.jsx";
import styles from './PostTable.module.css';

const PostTable = () => {
  const [posts, setPosts] = useState([])
  const headers = ['№', 'Название']
  const props = ['id', 'name']

  useEffect(() => {
    getAllPosts()
      .then(data => setPosts(data))
  }, [])

  return (
    <Table headers={headers} data={posts} props={props} />
  );
};

export default PostTable;