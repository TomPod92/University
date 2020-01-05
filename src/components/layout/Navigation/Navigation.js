import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons'
import './navigation.scss';

const Navigation = (props) => {
  return (
      <nav className={props.menuOpen ? "navigation navigation--open" : "navigation"}>
        <NavLink to="/students/list" className="navigation__item" onClick={() => props.setMenuOpen(false)} exact>Students</NavLink>
        <NavLink to="/inspections/list" className="navigation__item" onClick={() => props.setMenuOpen(false)} exact>Inspections</NavLink>
        <NavLink to="/leases/list" className="navigation__item" onClick={() => props.setMenuOpen(false)} exact>Leases</NavLink>
        <NavLink to="/invoices/list" className="navigation__item" onClick={() => props.setMenuOpen(false)} exact>Invoices</NavLink>
      </nav>
  )
};

export default Navigation