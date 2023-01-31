import './MoviesCard.css';
import moviePic from '../../images/moviePic.png'

function MoviesCard(props) {
  
  return (
    <article className="card">
      <div className='card__desc'>
        <h2 className='card__name'>'В погоне за Бенкси'</h2>
        <p className='card__duration'>'27 минут'</p>
      </div>
      <img className="card__image" src={moviePic} alt="Картинка" />
      <button className={`card__button ${props.buttonClassName}`}>Сохранить</button>
    </article>
  );
}



export default MoviesCard;



