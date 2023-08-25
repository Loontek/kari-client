import {$authHost, $host} from "./index.js";
import jwtDecode from "jwt-decode";

export const registration = async (user) => {
  const {data} = await $host.post('api/user/registration', user)
  localStorage.setItem('token', data.token)

  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)

  return jwtDecode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token)

  return jwtDecode(data.token)
}

export const getOne = async (id) => {
  const {data} = await $host.get(`api/user/${id}`)

  return data
}

export const getAllUsers = async () => {
  const {data} = await $host.get('api/user/')

  return data
}

export const getAllClients = async () => {
  const {data} = await $host.get('api/user/users')

  return data
}