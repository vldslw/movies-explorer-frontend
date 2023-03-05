import React, {useState, useEffect} from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';


function SavedMovies() {

  const [savedCards, setSavedCards] =  useState([]);
  const [filteredCards, setFilteredCards] =  useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => { 
    async function fetchData() {
      try {
        setNotFound(false);
        setError(false);
        setIsLoading(true)
        const res = await moviesApi.getMovies();
        console.log(res);
        if (res.length === 0) {
          setNotFound(true);
        } else {
          setSavedCards(res);
          setFilteredCards(res);
        }
      } catch (e) {
        console.error(e)
        setError(true);
      } finally {
        setIsLoading(false)
      }
    }
    fetchData();
  }, []);
  
  const [query, setQuery] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);

    const handleChange = () => {
      setCheckboxState((current) => !current);
    }

  const filter = (searchWord, data) => {
    if (checkboxState) {
      return data.filter(({ nameRU, duration }) =>
        nameRU.toLowerCase().includes(searchWord.toLowerCase()) && duration < 40
      );
    } else {
      return data.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(searchWord.toLowerCase())
      );
    }
    
  }

  const handleClick = (event) => {
    event.preventDefault();
    setNotFound(false);
    setError(false);
    setFilteredCards([]);
    const filteredRes = filter(query, savedCards);
    if (filteredRes.length === 0) {
      setNotFound(true);
    } else {
      setFilteredCards(filteredRes);
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
        <SearchForm query={query} setQuery={setQuery} handleClick={handleClick} handleChange={handleChange} checkboxState={checkboxState} />
        <MoviesCardList
          cards={filteredCards}
          isLoading={isLoading}
          notFound={notFound}
          error={error}
          buttonClassName={'card__button_delete'}
          classType={'cards__list_saved'}
        />
        <div className='divider'></div>
      </main>
      <Footer /> 
    </>
  );
}

export default SavedMovies;