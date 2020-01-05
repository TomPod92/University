import React from 'react';
import './overlay.scss';

const Overlay = (props) => (
    <div 
        className={props.menuOpen ? "overlay overlay--visible" : "overlay"} 
        onClick={() => props.setMenuOpen(!props.menuOpen)}>
          Overlay
    </div>
)

export default Overlay;