import './SignBottom.css';
import { Link } from 'react-router-dom'; 

function SignBottom({ buttonText, linkDesc, link, linkText }) {

  return (
    <div className='sign-bottom'>
      <button type="submit" className="sign-bottom__button">
        {buttonText}
      </button>
      <p className="sign-bottom__link-desc">{linkDesc}<Link to={link} className="sign-bottom__link">{linkText}</Link></p>
    </div>
  );
}

export default SignBottom;




