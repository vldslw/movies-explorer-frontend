import { Link } from 'react-router-dom'; 
import './Header.css';
import logo from "../../images/logo.svg";

function Header({ color, children }) {
  return (
    <header className={`header header_${color}`}>
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      {children}
    </header>
  );
}

export default Header;