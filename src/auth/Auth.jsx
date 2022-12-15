import React, { createContext } from 'react'

const AuthContext = createContext()
const AuthProvider = ({children, ...props}) => {
  
  return (
    <AuthContext.Provider value={''}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider