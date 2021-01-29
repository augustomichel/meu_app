import React from "react";
import imageLogo from './images/logo.png';


//stateless
const Header = () => (
  <header>
    <img src={imageLogo} alt='Logo da aplicação' />
    <h1 className="title">Consulta ao GitHub</h1>
  </header>
);

export default Header;
