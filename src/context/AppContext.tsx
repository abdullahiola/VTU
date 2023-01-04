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
  flowState:  {
      airtime: boolean;
      data: boolean;
      convert: boolean;
  }
  setFlowState: React.Dispatch<React.SetStateAction<{
      airtime: boolean;
      data: boolean;
      convert: boolean;
  }>>
  actionFn: (action: string, payload: boolean) => void
}

export const AppContext = createContext({} as AppContextValueType)

const AppContextProvider = ({children, ...props}: AppContextPropsType) => {

  const flowStateVal = {
    airtime: false,
    data: false,
    convert: false,
  }

  const [validateUserAccess, setValidateUserAccess] = useState(false)
  const [userId, setUserId] = useState<string | undefined>(undefined)
  const [menuState, setMenuState] = useState<boolean>(false)
  const [notification, setNotification] = useState(0)
  const [dashboardMenuState, setDashboardMenuState] = useState(false)
  const [flowState, setFlowState] = useState(flowStateVal)
  
  const actionFn = (payload: string, action: boolean) => {
    setFlowState({...flowState, [payload]: action})
  }

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
    flowState,
    setFlowState,
    actionFn
  }

  return (
    <AppContext.Provider value={valueObj}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
