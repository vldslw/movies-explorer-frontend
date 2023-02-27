import React, {useState} from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  return (
    <>
      <Header 
        color={"white"}
        children={
          <Navigation />
        }
      />
      <main className='content'>
        <SearchForm setCards={setCards} setIsLoading={setIsLoading}/>
        <MoviesCardList
          cards={cards}
          isLoading={isLoading}
          buttonClassName={'card__button_saved'} 
          classType={''} 
        />
      </main>
      <Footer /> 
    </>
  );
}

export default Movies;