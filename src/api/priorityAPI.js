import {$authHost, $host} from "./index.js";

export const createPriority = async (name, numericalVersion) => {
  const {data} = await $authHost.post('api/priority/', {
    name,
    numericalVersion
  })

  return data
}

export const getAllPriorities = async () => {
  const {data} = await $host.get(`api/priority/`)

  return data
}