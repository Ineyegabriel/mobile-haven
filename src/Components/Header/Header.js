import React from "react";
import { ReactComponent as MenuIcon } from "../../Assets/house-outline.svg";

import { Link } from "react-router-dom";

import "./Header.scss";
const Header = () => {

      
  

  return (
    <header className="App__Header">
      <nav className="App__Nav">
        <Link to="/" className="Toggle__Button">
          
            <MenuIcon className="Toggle__Button--icon" /> 
        </Link>
      </nav>
    </header>
  );
};

export default Header;
