import React, { createContext, useRef, useState } from 'react'

type AppContextPropsType = {
  children: React.ReactNode
}

export type AppContextValueType = {
  validateUserAccess?: boolean
  setValidateUserAccess?: React.Dispatch<React.SetStateAction<boolean>>
  userId?: string
  setUserId?: React.Dispatch<React.SetStateAction<string | undefined>>
  menuState?: boolean
  setMenuState?: React.Dispatch<React.SetStateAction<boolean>>
  notification?: number
  setNotification?: React.Dispatch<React.SetStateAction<number>>
  dashboardMenuState?: boolean,
  setDashboardMenuState?: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext({} as AppContextValueType)

const AppContextProvider = ({children, ...props}: AppContextPropsType) => {

  const [validateUserAccess, setValidateUserAccess] = useState(false)
  const [userId, setUserId] = useState<string | undefined>(undefined)
  const [menuState, setMenuState] = useState<boolean>(false)
  const [notification, setNotification] = useState(0)
  const [dashboardMenuState, setDashboardMenuState] = useState(false)
  
  const valueObj = {
    validateUserAccess,
    setValidateUserAccess,
    userId,
    setUserId,
    menuState,
    setMenuState,
    notification,
    setNotification, 
    dashboardMenuState,
    setDashboardMenuState,
  }

  return (
    <AppContext.Provider value={valueObj}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
