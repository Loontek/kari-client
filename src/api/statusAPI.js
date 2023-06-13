import {$authHost, $host} from "./index.js";

export const createStatus = async (name) => {
  const {data} = await $authHost.post('api/status/', {
    name
  })

  return data
}

export const getAllStatuses = async () => {
  const {data} = await $host.get(`api/status/`)

  return data
}