import axios from 'axios'

const client = axios.create({baseURL: 'http://localhost:4000/'})

export const request = async ({...options}) => {
  client.defaults.headers.common.Authorization = `Bearer token`
  const onSuccess = (response: object) => response
  const onError = (error: object) => error

  return client(options).then(onSuccess).catch(onError)
}

