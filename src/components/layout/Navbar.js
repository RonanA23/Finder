import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <i className='fab fa-github'> PRACTICE ONE</i>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
          <li>
            <Link to='practice'>Practice</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
