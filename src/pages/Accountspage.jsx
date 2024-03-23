import React from 'react'
import Menu from '../components/Menu/Menu'
import Accounts from '../components/Accounts/Accounts'
import Navbar from '../components/navbar/Navbar'

const Accountspage = () => {
  const currentPathname = '/accounts';
  return (
    <div>
    
        <div className="c">
            <Menu currentPathname={currentPathname} />
            <Accounts/>
        </div>
      
    </div>
  )
}

export default Accountspage;

