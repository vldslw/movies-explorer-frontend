import './Button.css';

function Button({ title, handleClick }) {

  return (
    <button className='search__button' onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;