import { useMutation, useQuery } from 'react-query'
import {queryClient} from '../App'
import { UserType } from '../components/form/Types'
import { request } from '../utils/axios.utils'

export type DetailsTypes = {
  // [key: string]: object[]
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
  return await request({url: '/users', method: 'get'})
}
export const useUserData = (onSuccess?: (values: DetailsTypes) => void, onError?: (errors: ErrorTypes) => void) => {
  return useQuery(
    ['login'],
    fetchUser,
    {
      onSuccess,
      onError,
      enabled: false
    }
  )
}


const fetchSingleUser = async (id: string) => {
  return await request({url: `/users/${id}`, method: 'get'})
}
export const useSingleUser = (id: string, onSuccess?: (values: SingleType) => void, onError?: (errors: ErrorTypes) => void) => {
  return useQuery(
    ['single-user'],
    () => fetchSingleUser(id),
    {
      onSuccess,
      onError,
      enabled: false
    }
  )
}


const createUser = async (details: UserType) => {
  return await request({url: '/users', method: 'post', data: details})
}
export const useCreateUser = () => {
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("login")
    }
  })
}


const editUser = async (details: UserType) => {
  return await request({url: `/users/${details.id}`, method: 'patch', data: details})
}
export const useEditUser = () => {
  return useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("login")
    }
  })
}
