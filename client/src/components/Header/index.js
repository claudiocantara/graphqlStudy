import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
 
import './index.scss'

const Header = () => (
  <header>
    <nav>
      <ul className='menu'>
        <li>
          <Link className='item-menu' to='/'>Books</Link>
        </li>
        <li>
          <Link  className='item-menu' to='/authors'>Authors</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default withRouter(Header);
