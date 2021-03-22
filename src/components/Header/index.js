import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Home from '../../containers/Home';
import LifeCycle from '../../containers/Lifecycle';
import "./Header.css";

const Header = () => {
  return (
      <nav className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/lifecycle">Lifecycle</Link>
          </li>
        </ul>
      </nav>
  )
}

export default withRouter(Header);