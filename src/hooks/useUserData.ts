import { useMutation, useQuery } from 'react-query'
import {queryClient} from '../App'
import { UserType } from '../global.types'
import { request } from '../utils/axios.utils'

const urlPath = '/users'

export type DetailsTypes = {
  data: UserType[]
}

export type SingleType = {
  data: UserType
}

export type ErrorTypes = {
  [key: string]: object | string
  message: string
}

const fetchUser = async () => {
  const data: {[key: string]: any} = await request({url: urlPath, method: 'get'})
  if (data.toString() === 'AxiosError: Network Error') {
    throw new Error(data.message)
  }
  return data
}

export const useUserData = (id: string, successFn?: (values: DetailsTypes) => void, errorFn?: (errors: ErrorTypes) => void) => {
  return useQuery(
    ['user', id],
    fetchUser,
    {
      onSuccess: successFn,
      onError: errorFn,
      enabled: false
    }
  )
}


const fetchSingleUser = async (id: string) => {
  const data: {[key: string]: any} = await request({url: `${urlPath}/${id}`, method: 'get'})
  if (data.toString() === 'AxiosError: Network Error') {
    throw new Error(data.message)
  }
  return data
}

export const useSingleUser = (id: string, successFn?: (values: SingleType) => void, errorFn?: (errors: ErrorTypes) => void) => {
  return useQuery(
    ['single-user'],
    () => fetchSingleUser(id),
    {
      onSuccess: successFn,
      onError: errorFn,
      enabled: false
    }
  )
}


const createUser = async (details: UserType) => {
  return await request({url: urlPath, method: 'post', data: details})
}

export const useCreateUser = () => {
  return useMutation(createUser, 
    {
      onSuccess: () => {
        queryClient.invalidateQueries("login")
      },
      onError: (error: ErrorTypes) => {
        throw new Error(error.message)
      }
    })
}


const editUser = async (details: UserType) => {
  return await request({url: `${urlPath}/${details.id}`, method: 'patch', data: details})
}

export const useEditUser = () => {
  return useMutation(editUser, 
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", "login"])
        queryClient.invalidateQueries(["user", "signup"])
        queryClient.invalidateQueries(['single-user'])
      },
      onError: (error: ErrorTypes) => {
        throw new Error(error.message)
      }
    })
}
