import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedCards from '../../utils/savedCards';


function SavedMovies() {
  return (
    <>
      <Header 
        color={"white"}
        children={
          <Navigation />
        }
      />
      <main className='content'>
        <SearchForm />
        <MoviesCardList
          cards={savedCards}
          buttonClassName={'card__button_delete'}
          classType={'card-list_saved'} 
        />
        <div className='saved-movies__divider'></div>
      </main>
      <Footer /> 
    </>
  );
}

export default SavedMovies;