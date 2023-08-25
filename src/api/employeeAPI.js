import {$authHost, $host} from "./index.js";

export const createEmployee = async (employee) => {
  const {data} = await $authHost.post('api/employee/', employee)

  return data
}

export const getAllEmployees = async () => {
  const {data} = await $host.get('api/employee/')

  return data
}

export const getOneEmployee = async (email) => {
  const {data} = await $host.get(`api/employee/${email}`)

  return data
}
