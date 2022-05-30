import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo-moviedb.svg'

const Header = () => {

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo TMBD" width="120" />
      </Link>
      <nav className="menu">
        <Link to="/films">Фильмы</Link>
        <Link to="/series">Сериалы</Link>
        <Link to="/cartoons">Cartoons</Link>
      </nav>
    </header>
  );
};

export default Header;