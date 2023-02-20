import React, {useState} from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ buttonClassName, classType }) {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    
    <section className='cards' aria-label="Секция с фильмами">
      <div className={`cards__list ${classType}`}>
        { isLoading ? <Preloader /> : cards.map((card) => 
          <MoviesCard 
            name={card.name}
            duration={card.duration}
            isSaved={card.isSaved}
            buttonClassName={buttonClassName}
          />
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;