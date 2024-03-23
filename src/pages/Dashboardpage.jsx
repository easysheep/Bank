import React from 'react'
import Menu from '../components/Menu/Menu'
import Dashboard from '../components/Dashboard/Dashboard'
import "./Page.css"
const Dashboardpage = () => {
  const currentPathname = '/dashboard';
  return (
    <div>
        <div className="c">
            <Menu currentPathname={currentPathname}/>
            <Dashboard/>
        </div>
      
    </div>
  )
}

export default Dashboardpage;