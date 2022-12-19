import { useMutation, useQuery } from 'react-query'
import {queryClient} from '../App'
import { request } from '../utils/axios.utils'


const fetchUser = async () => {
  return await request({url: '/users', method: 'get'})
}
export const useUserData = (onSuccess, onError) => {
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


const fetchSingleUser = async (id) => {
  return await request({url: `/users/${id}`, method: 'get'})
}
export const useSingleUser = (onSuccess, onError, id) => {
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


const createUser = async (details) => {
  return await request({url: '/users', method: 'post', data: details})
}
export const useCreateUser = () => {
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("login")
    }
  })
}


const editUser = async (details) => {
  return await request({url: `/users/${details.id}`, method: 'patch', data: details})
}
export const useEditUser = () => {
  return useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("login")
    }
  })
}
