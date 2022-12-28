import React from 'react'
import Nav from '../../components/ui/Nav'
import { DashboardType } from '../../types/dashboard.types'

const Dashboard = ({Component, ...props}: DashboardType) => {

  return (
    <div>
      <Nav />
      {Component}
    </div>
  )
}

export default Dashboard