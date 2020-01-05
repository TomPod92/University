import React from 'react';
import './hamburger.scss';

const Hamburger = (props) => {
  return (
    <div 
        className={!props.menuOpen ? `header__hamburger-menu` : `header__hamburger-menu header__hamburger-menu--open`} 
        onClick={() => props.setMenuOpen(!props.menuOpen)}
      >
        <span></span>
      </div>
  )
};

export default Hamburger;