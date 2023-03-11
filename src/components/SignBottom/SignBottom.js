import './SignBottom.css';
import { Link } from 'react-router-dom'; 

function SignBottom({ buttonText, linkDesc, link, linkText, isFormValid, signError }) {

  return (
    <div className='sign-bottom'>
      <span className="sign-bottom__error">{signError}</span>
      <button type="submit" className={`sign-bottom__button ${!isFormValid ? 'sign-bottom__button_disabled' : '' }`} disabled={!isFormValid ? true : false}>
        {buttonText}
      </button>
      <p className="sign-bottom__link-desc">{linkDesc}<Link to={link} className="sign-bottom__link">{linkText}</Link></p>
    </div>
  );
}

export default SignBottom;




