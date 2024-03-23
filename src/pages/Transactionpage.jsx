import React from 'react'
import Menu from '../components/Menu/Menu'
import Transaction from '../components/Transaction/Transaction'

const Transactionpage = () => {
  const currentPathname = '/transactions';
  return (
    <div>

        <div className="c">
            <Menu currentPathname={currentPathname}/>
            <Transaction/>
            
        </div>
      
    </div>
  )
}

export default Transactionpage;
