import React, { createContext, useState } from 'react'

type AuthPropsType = {
  children: React.ReactNode
}

type AuthContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  login: () => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)
const AuthProvider = ({children, ...props}: AuthPropsType) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => setIsLoggedIn(true)

  const logout = () => setIsLoggedIn(false)
  
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider