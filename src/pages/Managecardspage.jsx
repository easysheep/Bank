import React from 'react'
import Managecards from '../components/Managecards/Managecards'
import Menu from '../components/Menu/Menu'

const Managecardspage = () => {
  const currentPathname = '/managecards';
  return (
    <div>
        <div className="c">
            <Menu currentPathname={currentPathname}/>
            <Managecards/>
        </div>
      
    </div>
  )
}

export default Managecardspage
