import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger.js';
import Overlay from '../Overlay/Overlay.js';
import Navigation from '../Navigation/Navigation.js';
import Main from '../Main/Main.js';

const App = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  return (
    <BrowserRouter>
      <div className="app">
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App;
