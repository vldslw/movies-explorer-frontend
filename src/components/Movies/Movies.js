import React, {useState, useEffect} from 'react';
import './Movies.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Signing from '../Signing/Signing';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { SHORTS_DURATION } from '../../constants/constants';

function Movies({ loggedIn }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [foundCards, setFoundCards] = useState(() => {
    let data = null;
    try {
      data = JSON.parse(localStorage.getItem('foundCards'));
    } catch (e) {
      console.log(e)
    };
    return Array.isArray(data) ? data : [];
  });

  const [query, setQuery] = useState(() => {
    let data = null;
    try {
      data = localStorage.getItem('query');
    } catch (e) {
      console.log(e)
    };
    return (typeof data === 'string') ? data : '';
  });

  const [checkboxState, setCheckboxState] = useState(() => {
    let data = null;
    try {
      data = localStorage.getItem('checkboxState');
    } catch (e) {
      console.log(e)
    };
    return (typeof JSON.parse(data) === 'boolean') ? JSON.parse(data) : false;
  });

  const filter = (searchWord, data) => {
    if (checkboxState) {
      return data.filter(({ nameRU, duration }) =>
        nameRU.toLowerCase().includes(searchWord.toLowerCase()) && duration < SHORTS_DURATION
      );
    } else {
      return data.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(searchWord.toLowerCase())
      );
    }
  }

  async function resetFilteredCards () {
    let movies = JSON.parse(localStorage.getItem('movies'));
    if (Array.isArray(movies)) {
      const filteredRes = filter(query, movies);
        if (filteredRes.length === 0) {
          setFoundCards(filteredRes);
          setNotFound(true);
        } else {
          setFoundCards(filteredRes);
        }
    } else {
      try {
        movies = await moviesApi.getMovies();
        const filteredRes = filter(query, movies);
        if (filteredRes.length === 0) {
          setFoundCards(filteredRes);
          setNotFound(true);
        } else {
          setFoundCards(filteredRes);
        }
      } catch (e) {
        console.error(e)
      }
    }
  }

  const handleChange = () => {
    setCheckboxState((current) => !current);
  }

  useEffect (() => {
    localStorage.setItem('checkboxState', checkboxState);
    resetFilteredCards();
  }, [checkboxState])

  const [notFound, setNotFound] = useState(() => {
    let data = null;
    try {
      data = localStorage.getItem('notFound');
    } catch (e) {
      console.log(e)
    };
    return (typeof JSON.parse(data) === 'boolean') ? JSON.parse(data) : false;
  });

  useEffect (() => {
    localStorage.setItem('notFound', notFound);
  }, [notFound])

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function checkMovies () {
    let movies = null;
    try {
      movies = JSON.parse(localStorage.getItem('movies'));
    } catch (e) {
      console.log(e)
    };
    return Array.isArray(movies) ? true : false;
  }

  function setFilteredMovies (movies) {
    const filteredMovies = filter(query, movies);
        if (filteredMovies.length === 0) {
          localStorage.setItem('foundCards', JSON.stringify(filteredMovies));
          localStorage.setItem('query', query);
          localStorage.setItem('checkboxState', checkboxState);
          setFoundCards(filteredMovies);
          setNotFound(true);
        } else {
          localStorage.setItem('foundCards', JSON.stringify(filteredMovies));
          localStorage.setItem('query', query);
          localStorage.setItem('checkboxState', checkboxState);
          setFoundCards(filteredMovies);
        }
  }

  const handleSearch = async () => {
    try {
      setFoundCards([]);
      setNotFound(false);
      setError(false);
      setIsLoading(true);
      if (checkMovies()) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        setFilteredMovies(movies);
      } else {
        const movies = await moviesApi.getMovies();
        localStorage.setItem('movies', JSON.stringify(movies));
        setFilteredMovies(movies);
      }
    } catch (e) {
      console.error(e)
      setError(true);
    } finally {
      setIsLoading(false)
    }
  }

  const [savedCards, setSavedCards] = useState([]);

  async function resetSavedCards() {
    try {
      const res = await mainApi.getMovies();
      const myMovies = res.filter((c) => c.owner._id === currentUser._id);
      setSavedCards(myMovies);
    } catch (e) {
      console.error(e)
      setFoundCards([]);
      setError(true);
    }
  }

  useEffect(() => {
    resetSavedCards();
  }, [currentUser]);

  const onCardLike = async (data) => {
    try {
      await mainApi.addMovie(data);
      resetSavedCards();
    } catch (e) {
      console.error(e)
      setFoundCards([]);
      setError(true);
    }
  }

  const onCardDelete = async (id) => {
    try {
      await mainApi.deleteMovie(id);
      resetSavedCards();
    } catch (e) {
      console.error(e)
      setFoundCards([]);
      setError(true);
    }
  }
 
  return (
    <>
      <Header 
        color={"white"}
        children={
          loggedIn ? <Navigation /> :  <Signing />
        }
      />
      <main className='content'>
        <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} handleChange={handleChange} checkboxState={checkboxState}/>
        <MoviesCardList
          cards={foundCards}
          savedCards={savedCards}
          cardType={'default'}
          isLoading={isLoading}
          notFound={notFound}
          error={error}
          classType={''} 
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />
      </main>
      <Footer /> 
    </>
  );
}

export default Movies;