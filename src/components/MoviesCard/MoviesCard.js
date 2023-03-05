import './MoviesCard.css';

function MoviesCard({ card, cardType, name, duration, url, onCardLike}) {

  const isSaved = false;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    console.log('Удалить');
  }
  
  return (
    <article className="card">
      <div className='card__desc'>
        <h2 className='card__name'>{name}</h2>
        <p className='card__duration'>{duration}</p>
      </div>
      <img className="card__image" src={(cardType === 'default') ? `https://api.nomoreparties.co/${url}`: url} alt={name} />
      { (cardType === 'default') 
      ? 
      <button className={`card__button ${isSaved ? 'card__button_saved' : ''}`} onClick={handleLikeClick}>Сохранить</button>
      : 
      <button className='card__button card__button_delete' onClick={handleDeleteClick}>Сохранить</button> 
      }
    </article>
  );
}



export default MoviesCard;



