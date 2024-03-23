import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = ({ currentPathname }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const isLinkActive = (path) => {
    return currentPathname === path;
  };

  return (
    <div className='menu'>
      <div className="user">
        <div className="i10"><img src="mat.png" alt="" className='img10'/></div>
        <div className="nme">Elizabeth</div>
      </div>
      <div
        className={`row ${isLinkActive('/dashboard') ? 'active' : ''}`}
        onClick={handleClick}
      >
        <Link to='/dashboard' className='nav-link'>
          Dashboard
        </Link>
      </div>
      <div
        className={`row ${isLinkActive('/transactions') ? 'active' : ''}`}
        onClick={handleClick}
      >
        <Link to='/transactions' className='nav-link'>
          Transactions
        </Link>
      </div>
      <div
        className={`row ${isLinkActive('/accounts') ? 'active' : ''}`}
        onClick={handleClick}
      >
        <Link to='/accounts' className='nav-link'>
          Accounts
        </Link>
      </div>
      <div
        className={`row ${isLinkActive('/managecards') ? 'active' : ''}`}
        onClick={handleClick}
      >
        <Link to='/managecards' className='nav-link'>
          Manage credit cards
        </Link>
      </div>
      <div
        className={`row ${isLinkActive('/manageloans') ? 'active' : ''}`}
        onClick={handleClick}
      >
        <Link to='/manageloans' className='nav-link'>
          Loans
        </Link>
      </div>
    </div>
  );
};

export default Menu;