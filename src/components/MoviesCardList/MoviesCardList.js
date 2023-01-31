import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="card-list">
      <MoviesCard 
        isSaved={true}
      />
      <MoviesCard 
        isSaved={true}
      />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard 
        isSaved={true}
      />
      <MoviesCard 
        isSaved={true}
      />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard 
        isSaved={true}
      />
      <MoviesCard />
    </section>
  );
}

export default MoviesCardList;