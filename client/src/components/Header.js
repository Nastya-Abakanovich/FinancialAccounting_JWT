import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  
    render() {
      return (
        <div>
          <header>Трекер финансов</header>
          <Link to="/">Дневник трат</Link>
          <Link to="/signUp">Регистрация</Link>
          <Link to="/signIn">Авторизация</Link>
        </div>
      );
    }
}

export default Header;   