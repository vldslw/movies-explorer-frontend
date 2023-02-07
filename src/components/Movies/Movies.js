import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import cards from '../../utils/cards';

function Movies() {


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
          cards={cards}
          buttonClassName={'card__button_saved'} 
          classType={''} 
        />
        <More />
      </main>
      <Footer /> 
    </>
  );
}

export default Movies;