import React, { Fragment, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Auth'

type RequirePropsType = {
  children: React.ReactNode
}

const Require = ({children, ...props}: RequirePropsType) => {

  const {isLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  
  if (isLoggedIn) {
    return (
      <Fragment>{children}</Fragment>
    )
  }
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [isLoggedIn])
  
  return null

}

export default Require