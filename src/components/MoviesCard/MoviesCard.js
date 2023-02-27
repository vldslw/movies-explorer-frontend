import './MoviesCard.css';
import moviePic from '../../images/moviePic.png'

function MoviesCard({ name, duration, url, isSaved, buttonClassName}) {
  
  return (
    <article className="card">
      <div className='card__desc'>
        <h2 className='card__name'>{name}</h2>
        <p className='card__duration'>{duration}</p>
      </div>
      <img className="card__image" src={`https://api.nomoreparties.co/${url}`} alt={name} />
      <button className={`card__button ${isSaved ? buttonClassName : ''}`}>Сохранить</button>
    </article>
  );
}



export default MoviesCard;



