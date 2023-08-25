import {$host} from "./index.js";

export const createAppeal = async (appeal) => {
  const {data} = await $host.post('api/appeal/', appeal)

  return data
}

export const updateAppeal = async (edit) => {
  const {data} = await $host.patch('api/appeal/', edit)

  return data
}

export const getAllAppeals = async () => {
  const {data} = await $host.get('api/appeal/')

  return data
}

export const getUserAppeals = async (id) => {
  const {data} = await $host.get(`api/appeal/user-appeals/${id}`)

  return data
}