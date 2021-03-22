import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <nav className="header p-3">
      <ul>
        <li className='ml-3'>
          <Link className="link" to="/">Home</Link>
        </li>
        <li className='ml-3'>
          <Link className="link" to="/profile">Profile</Link>
        </li>
        <li className='ml-3'>
          <Link className="link" to="/lifecycle">Lifecycle</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;