import React, { createContext, useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'

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
  const navigate = useNavigate()
  const { setUserEmail } = useContext(UserDataContext)

  const login = () => {
    setIsLoggedIn(true)
    navigate('/')
  }
  
  const logout = () => {
    setIsLoggedIn(false)
    navigate('/login')
    // setUserEmail('')
  }
  
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider