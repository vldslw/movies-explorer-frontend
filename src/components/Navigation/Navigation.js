import { Link } from 'react-router-dom'; 
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <Link to="/movies" className='navigation__button navigation__button_bold'>
        Фильмы
      </Link>
      <Link to="/saved-movies" className='navigation__button'>
        Сохранённые фильмы
      </Link>
      <Link to="/profile" className='navigation__button navigation__button_grey navigation__button_bold'>
        Аккаунт
      </Link>
      <div className='navigation__hamburger'></div>
    </nav>
  );
}

export default Navigation;