import { Link } from 'react-router-dom'; 
import './Navigation.css';
import MenuPopup from '../MenuPopup/MenuPopup';
import { useState } from "react"; 

function Navigation() {
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false); 

  function handleMenuClick() { 
    setMenuPopupOpen(true); 
  } 

  function closeMenuPopup() { 
    setMenuPopupOpen(false); 
  } 

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
      <button 
      className='navigation__hamburger'
      onClick={handleMenuClick}
      />
      <MenuPopup 
        isOpen={isMenuPopupOpen}
        onClose={closeMenuPopup}
      />
    </nav>
  );
}

export default Navigation;