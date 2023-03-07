import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import mainApi from '../../utils/MainApi';

function MoviesCardList({ savedCards, cardType, buttonClassName, classType, cards, isLoading, notFound, error, onCardLike, onCardDelete }) {

  const [items, setItems] = useState([]);

  

  useEffect (() => {
    setItems(cards.slice(0, 12));
  }, [cards])

  const showMore = () => {
    setItems([...items, ...cards.slice(items.length, items.length + 3)]);
  };

  return (  
    
    <section className='cards' aria-label="Секция с фильмами">
      {isLoading ? <Preloader /> : 
      <div className={`cards__list ${classType}`}>
      { items.map((card) => 
        <MoviesCard
         savedCards={savedCards}
         card={card} 
         cardType={cardType}
         key={ (cardType === 'default') ? card.id : card.movieId }
         name={card.nameRU}
         duration={card.duration}
         url={ (cardType === 'default') ? card.image.url : card.image }
         buttonClassName={buttonClassName}
         onCardLike={onCardLike}
         onCardDelete={onCardDelete}
        />
      )}
      </div>}
      {notFound && <p className='cards__message'>Ничего не найдено</p>}
      {error && <p className='cards__message'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      { items.length < cards.length && <More showMore={showMore}/>}
    </section>
  );
}

export default MoviesCardList;