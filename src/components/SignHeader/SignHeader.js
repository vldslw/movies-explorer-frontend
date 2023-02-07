import { Link } from 'react-router-dom'; 
import './SignHeader.css';
import logo from "../../images/logo.svg";

function SignHeader({ text }) {
  return (
    <header className='sign-header'>
      <Link to="/" className="sign-header__link">
        <img className="sign-header__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className='sign-header__text'>{text}</h1>
    </header>
  );
}

export default SignHeader;