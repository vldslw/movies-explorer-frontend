import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import mainApi from '../../utils/MainApi';

function MoviesCardList({ cardType, buttonClassName, classType, cards, isLoading, notFound, error }) {

  const [items, setItems] = useState([]);

  useEffect (() => {
    setItems(cards.slice(0, 12));
  }, [cards])

  const showMore = () => {
    setItems([...items, ...cards.slice(items.length, items.length + 3)]);
  };

  const onCardLike = async (data) => {
    try {
      console.log(data);
      await mainApi.addMovie(data);
      const res = await mainApi.getMovies();
      console.log(res);
    } catch (e) {
      console.error(e)
    }
  }

  return (  
    
    <section className='cards' aria-label="Секция с фильмами">
      {isLoading ? <Preloader /> : 
      <div className={`cards__list ${classType}`}>
      { items.map((card) => 
        <MoviesCard
         card={card} 
         cardType={cardType}
         key={ (cardType === 'default') ? card.id : card.movieId }
         name={card.nameRU}
         duration={card.duration}
         url={ (cardType === 'default') ? card.image.url : card.image }
         buttonClassName={buttonClassName}
         onCardLike={onCardLike}
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