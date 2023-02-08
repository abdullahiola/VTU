import React, { createContext, useRef, useState } from 'react'
import {UserDataContextPropsType, UserDataContextValueType} from '../types/userData.type'

export const UserDataContext = createContext({} as UserDataContextValueType)
const UserDataContextProvider = ({children, ...props}: UserDataContextPropsType) => {

  const [userEmail, setUserEmail] = useState('')
  const userObj = {
    userEmail,
    setUserEmail,
  }

  return (
    <UserDataContext.Provider value={userObj}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserDataContextProvider
