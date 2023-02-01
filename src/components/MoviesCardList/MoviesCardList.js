import './MoviesCardList.css';

function MoviesCardList({ children, classType }) {

  return (
    
    <section className='cards'>
      <div className={`cards__list ${classType}`}>
        {children}
      </div>
    </section>
  );
}

export default MoviesCardList;