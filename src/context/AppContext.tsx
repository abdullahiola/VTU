import React, { createContext, useState } from 'react'

type AppContextPropsType = {
  children: React.ReactNode
}

export type AppContextValueType = {
  validateUserAccess?: boolean
  setValidateUserAccess?: React.Dispatch<React.SetStateAction<boolean>>
  userId?: string
  setUserId?: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const AppContext = createContext({} as AppContextValueType)

const AppContextProvider = ({children, ...props}: AppContextPropsType) => {

  const [validateUserAccess, setValidateUserAccess] = useState(false)
  const [userId, setUserId] = useState<string | undefined>(undefined)

  return (
    <AppContext.Provider value={{validateUserAccess, setValidateUserAccess, userId, setUserId}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
