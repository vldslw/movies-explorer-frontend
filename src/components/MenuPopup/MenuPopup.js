import './MenuPopup.css';
import { Link } from 'react-router-dom'; 

function MenuPopup({isOpen, onClose}) {

  return (
    <div className={`menu-popup ${isOpen ? "menu-popup_opened" : ""}`}> 
      <div className="menu-popup__container"> 
        <button 
          class="menu-popup__close-button" 
          type="button"
          onClick={onClose} 
        /> 
        <nav className='menu-popup__navigation'>
          <Link to="/" className='menu-popup__navigation-button'>
            Главная
          </Link>
          <Link to="/movies" className='menu-popup__navigation-button'>
            Фильмы
          </Link>
          <Link to="/saved-movies" className='menu-popup__navigation-button'>
            Сохранённые фильмы
          </Link>
        </nav>
        <nav className='menu-popup__profile'>
          <Link to="/profile" className='menu-popup__navigation-button menu-popup__navigation-button_grey'>
            Аккаунт
          </Link>
        </nav>
      </div> 
    </div>
  );
}

export default MenuPopup;