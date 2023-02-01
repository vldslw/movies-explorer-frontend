import './MoviesCard.css';
import moviePic from '../../images/moviePic.png'

function MoviesCard({ name, duration, isSaved, buttonClassName}) {
  
  return (
    <article className="card">
      <div className='card__desc'>
        <h2 className='card__name'>{name}</h2>
        <p className='card__duration'>{duration}</p>
      </div>
      <img className="card__image" src={moviePic} alt="Картинка" />
      <button className={`card__button ${isSaved ? buttonClassName : ''}`}>Сохранить</button>
    </article>
  );
}



export default MoviesCard;



