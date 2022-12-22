import React, { createContext } from 'react'

type AuthPropsType = {
  children: React.ReactNode
}

type AuthContextType = {
  
}

const AuthContext = createContext({} as AuthContextType)
const AuthProvider = ({children, ...props}: AuthPropsType) => {
  
  return (
    <AuthContext.Provider value={''}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider