import React, { useContext } from 'react'
import Nav from '../../components/ui/Nav'
import { AppContext } from '../../context/AppContext'
import { DashboardType } from '../../types/dashboard.types'

const Dashboard = ({Component, ...props}: DashboardType) => {

  const {menuState, setMenuState} = useContext(AppContext)
  
  return (
    <div>
      <Nav />
      <Component />
    </div>
  )
}

export default Dashboard