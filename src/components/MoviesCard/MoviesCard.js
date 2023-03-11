import React, {useState, useEffect} from 'react';
import './MoviesCard.css';
import mainApi from '../../utils/MainApi';

function MoviesCard({ card, savedCards, cardType, name, trailerLink, duration, url, onCardLike, onCardDelete}) {

  // let isSaved = (cardType === 'default') ? savedCards.some((c) => c.movieId === card.id) : true;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => { 
    if (cardType === 'default') {
      const res = savedCards.some((c) => c.movieId === card.id);
      setIsSaved(res);
    } else {
      setIsSaved(true);
    }
  }, [savedCards]);

  function handleLikeClick() {
    onCardLike(card);
    setIsSaved((current) => !current);
  }

  function handleDeleteClick() {
    if (cardType === 'default') {
      let cardId = savedCards.find((c) => c.movieId === card.id)._id
      onCardDelete(cardId);
      setIsSaved((current) => !current);
    } else {
      onCardDelete(card._id);
      setIsSaved((current) => !current);
    }
    
  }
  
  return (
    <article className="card">
      <div className='card__desc'>
        <h2 className='card__name'>{name}</h2>
        <p className='card__duration'>{duration} минут</p>
      </div>
      <a href={trailerLink} className="card__link" target="_blank" rel="noreferrer">
        <img className="card__image" src={(cardType === 'default') ? `https://api.nomoreparties.co/${url}`: url} alt={name} />
      </a>
      { isSaved  
      ? 
      <button className={`card__button ${(cardType === 'default') ? 'card__button_saved' : 'card__button_delete' }`} onClick={handleDeleteClick}>Сохранить</button> 
      : 
      <button className='card__button' onClick={handleLikeClick}>Сохранить</button>
      }
    </article>
  );
}



export default MoviesCard;



