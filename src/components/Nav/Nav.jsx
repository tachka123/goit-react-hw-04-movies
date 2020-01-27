import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

const Nav = () => {
  return (
    <div className={style.nav}>
      <NavLink exact to="/" activeClassName={style.activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName={style.activeLink}>
        Movie List
      </NavLink>
    </div>
  );
};

export default Nav;
