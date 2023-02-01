import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, buttonClassName, classType }) {

  const isLoading = false;


  return (
    
    <section className='cards'>
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