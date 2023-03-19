import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  
    render() {
      return (
          <header>
          {/* Трекер финансов */}
            <Link className="header-link" to="/">Дневник трат</Link>
            <Link className="header-link" to="/signUp">Регистрация</Link>
            <Link className="header-link" to="/signIn">Авторизация</Link>
          </header>
      );
    }
}

export default Header;   