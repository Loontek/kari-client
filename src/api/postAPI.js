import {$authHost, $host} from "./index.js";

export const createPost = async (name) => {
  const {data} = await $authHost.post('api/post/', {
    name
  })

  return data
}

export const getAllPosts = async () => {
  const {data} = await $host.get(`api/post/`)

  return data
}

export const getOnePost = async (id) => {
  const {data} = await $host.get(`api/post/${id}`)

  return data
}