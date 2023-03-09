import React, {useState, useEffect} from 'react';
import './Movies.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function Movies() {

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
        nameRU.toLowerCase().includes(searchWord.toLowerCase()) && duration < 40
      );
    } else {
      return data.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(searchWord.toLowerCase())
      );
    }
  }

  async function resetFilteredCards () {
    try {
      const movies = await moviesApi.getMovies();
      const filteredRes = filter(query, movies);
      console.log(filteredRes);
      if (filteredRes.length === 0) {
        setFoundCards(filteredRes);
        setNotFound(true);
      } else {
        setFoundCards(filteredRes);
      }
    } catch (e) {
      console.error(e)
      setFoundCards([]);
      setError(true);

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

  const handleSearch = async () => {
    try {
      setFoundCards([]);
      setNotFound(false);
      setError(false);
      setIsLoading(true)
      const movies = await moviesApi.getMovies();
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
          <Navigation />
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