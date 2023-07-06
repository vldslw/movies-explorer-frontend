import React, {useState, useEffect} from 'react';
import useResize from "use-resize";
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import { 
  SCREEN_WIDTH_L,
  SCREEN_WIDTH_M,
  SLICE_LENGTH_L,
  SLICE_LENGTH_M,
  SLICE_LENGTH_S,
  STEP_L,
  STEP_M,
  STEP_S,
 } from '../../constants/constants';

function MoviesCardList({ savedCards, cardType, buttonClassName, classType, cards, isLoading, notFound, error, onCardLike, onCardDelete }) {

  const [items, setItems] = useState([]);

  const size = useResize();

  const [step, setStep] = useState(3);
  const [sliceLenght, setSliceLenght] = useState(12);



  function resetCards() {
    if (cardType === 'default') {
      setItems(cards.slice(0, sliceLenght));
    } else {
      setItems(cards);
    }
  } 

  useEffect (() => {
    if (size.width > SCREEN_WIDTH_L) {
      setSliceLenght(SLICE_LENGTH_L);
      setStep(STEP_L);
    } else if (size.width > SCREEN_WIDTH_M) {
      setSliceLenght(SLICE_LENGTH_M);
      setStep(STEP_M);
    } else {
      setSliceLenght(SLICE_LENGTH_S);
      setStep(STEP_S);
    }
  }, [size]) 

  useEffect (() => {
    resetCards();
  }, [cards, size])

  const showMore = () => {
    setItems([...items, ...cards.slice(items.length, items.length + step)]);
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
         trailerLink={card.trailerLink}  
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