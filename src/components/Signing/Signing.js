import { Link } from 'react-router-dom'; 
import './Signing.css';

function Signing() {
  return (
    <nav className='signing'>
      <Link to="/signup" className='signing__button'>
        Регистрация
      </Link>
      <Link to="/signin" className='signing__button signing__button_blue'>
        Войти
      </Link>
    </nav>
  );
}

export default Signing;