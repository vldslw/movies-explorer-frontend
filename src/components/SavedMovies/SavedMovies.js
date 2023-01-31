import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';


function SavedMovies() {
  return (
    <>
      <Header 
        color={"white"}
        children={
          <Navigation />
        }
      />
      <SearchForm />
      <MoviesCardList 
        children={
          <>
            <MoviesCard 
              buttonClassName={'card__button_delete'}
            />
            <MoviesCard 
              buttonClassName={'card__button_delete'}
            />
            <MoviesCard 
              buttonClassName={'card__button_delete'}
            />
          </>
        }
      />
      <div className='saved-movies__divider'></div>
      <Footer /> 
    </>
  );
}

export default SavedMovies;