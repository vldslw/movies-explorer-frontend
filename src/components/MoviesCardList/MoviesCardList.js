import React, {useState} from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';

function MoviesCardList({ buttonClassName, classType, cards, isLoading }) {

  return (  
    
    <section className='cards' aria-label="Секция с фильмами">
      {isLoading ? <Preloader /> : 
      <div className={`cards__list ${classType}`}>
      { cards.map((card) => 
        <MoviesCard 
         key={card.id}
         name={card.nameRU}
         duration={card.duration}
         url={card.image.url}
         isSaved={card.isSaved}
         buttonClassName={buttonClassName}
        />
      )}
      </div>}
      { (cards.length > 0) ? <More /> : <></>}
    </section>
  );
}

export default MoviesCardList;