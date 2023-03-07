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
  const [displayedCards, setDisplayedCards] =  useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [query, setQuery] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);

  useEffect(() => { 
    async function fetchData() {
      try {
        setNotFound(false);
        setError(false);
        setIsLoading(true)
        const res = await mainApi.getMovies();
        if (res.length === 0) {
          setNotFound(true);
        } else {
          setSavedCards(res);
          setDisplayedCards(savedCards);
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

  useEffect(() => { 
    setDisplayedCards(savedCards);
  }, [savedCards]);

  const handleChange = () => {
    setCheckboxState((current) => !current);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setNotFound(false);
    setError(false);
    const filteredRes = filter(query, savedCards);
    if (filteredRes.length === 0) {
      setDisplayedCards(filteredRes);
      setNotFound(true);
    } else {
      setDisplayedCards(filteredRes);
    }
  }

  const onCardDelete = async (id) => {
    try {
      await mainApi.deleteMovie(id);
      const res = await mainApi.getMovies();
      if (res.length === 0) {
        setSavedCards(res);
        setNotFound(true);
      } else {
        setSavedCards(res);
        setDisplayedCards(savedCards);
      }
    } catch (e) {
      console.error(e)
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
          savedCards={savedCards}
          cards={displayedCards}
          cardType={'saved'}
          isLoading={isLoading}
          notFound={notFound}
          error={error}
          classType={'cards__list_saved'}
          onCardDelete={onCardDelete}
        />
        <div className='divider'></div>
      </main>
      <Footer /> 
    </>
  );
}

export default SavedMovies;