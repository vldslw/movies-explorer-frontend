import './MoviesCardList.css';

function MoviesCardList({ children, classType }) {

  return (
    <section className={`card-list ${classType}`}>
      {children}
    </section>
  );
}

export default MoviesCardList;