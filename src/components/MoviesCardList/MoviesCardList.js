import './MoviesCardList.css';

function MoviesCardList({ children }) {

  return (
    <section className="card-list">
      {children}
    </section>
  );
}

export default MoviesCardList;