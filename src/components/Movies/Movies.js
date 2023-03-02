import React, {useState} from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies() {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const filter = (searchWord, data) => {
    return data.filter(({ nameRU }) => 
      nameRU.toLowerCase().includes(searchWord.toLowerCase())
    );
  }

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true)
      const res = await moviesApi.getMovies();
      console.log(res);
      const filteredRes = filter(query, res);
      setCards(filteredRes);
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }
  
 
  return (
    <>
      <Header 
        color={"white"}
        children={
          <Navigation />
        }
      />
      <main className='content'>
        <SearchForm setCards={setCards} setIsLoading={setIsLoading} query={query} setQuery={setQuery} handleClick={handleClick}/>
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