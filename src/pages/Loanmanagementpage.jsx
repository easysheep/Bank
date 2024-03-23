import React from 'react'
import LoanManager from '../components/LoanManager/LoanManager';
import Menu from '../components/Menu/Menu';

const Loanmanagementpage = () => {
  const currentPathname = '/manageloans';
  return (
    <div>
        <div className="c">
            <Menu currentPathname={currentPathname}/>
            <LoanManager/>
        </div>
      
    </div>
  )
}

export default Loanmanagementpage;
