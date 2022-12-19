import React, { createContext, useState } from 'react'

export const AppContext = createContext()
const AppContextProvider = ({children, ...props}) => {

  const [validateUserAccess, setValidateUserAccess] = useState(false)
  const [userId, setUserId] = useState(null)

  return (
    <AppContext.Provider value={{validateUserAccess, setValidateUserAccess, userId, setUserId}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
