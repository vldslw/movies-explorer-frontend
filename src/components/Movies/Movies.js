import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';

function Movies() {
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
              buttonClassName={'card__button_saved'}
            />
            <MoviesCard 
              buttonClassName={'card__button_saved'}
            />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard 
              buttonClassName={'card__button_saved'}
            />
            <MoviesCard 
              buttonClassName={'card__button_saved'}
            />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard 
              buttonClassName={'card__button_saved'}
            />
            <MoviesCard />
          </>
        }
      />
      <More />
      <Footer /> 
    </>
  );
}

export default Movies;