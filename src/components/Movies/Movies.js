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

  const [cards, setCards] = useState(() => {
    let data = null;
    
    try {
      data = JSON.parse(localStorage.getItem('cards'));
    } catch (e) {
      console.log(e)
    };
    return Array.isArray(data) ? data : [];
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);

  const [notFound, setNotFound] = useState(() => {
    let data = null;
    
    try {
      data = localStorage.getItem('notFound');
    } catch (e) {
      console.log(e)
    };
    return (typeof JSON.parse(data) === 'boolean') ? JSON.parse(data) : false;
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

  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => { 
    async function fetchData() {
      try {
        const res = await mainApi.getMovies();
        const myMovies = res.filter((c) => c.owner._id === currentUser._id);
        setSavedCards(myMovies);
      } catch (e) {
        console.error(e)
      }
    }
    fetchData();
  }, [currentUser]);

  useEffect (() => {
    localStorage.setItem('query', query);
  }, [query])

  useEffect (() => {
    localStorage.setItem('notFound', notFound);
  }, [notFound])

  useEffect (() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards])

  useEffect (() => {
    localStorage.setItem('checkboxState', checkboxState);
  }, [checkboxState])

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
  
  const handleChange = () => {
    setCheckboxState((current) => !current);
  }

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      setNotFound(false);
      setError(false);
      setCards([]);
      setIsLoading(true)
      const res = await moviesApi.getMovies();
      const filteredRes = filter(query, res);
      if (filteredRes.length === 0) {
        setNotFound(true);
      } else {
        setCards(filteredRes);
      }
    } catch (e) {
      console.error(e)
      setError(true);
    } finally {
      setIsLoading(false)
    }
  }

  const onCardLike = async (data) => {
    try {
      await mainApi.addMovie(data);
      const res = await moviesApi.getMovies();
      const filteredRes = filter(query, res)
      if (filteredRes.length === 0) {
        setNotFound(true);
      } else {
        setCards(filteredRes);
      }
    } catch (e) {
      console.error(e)
    }
  }

  const onCardDelete = async (id) => {
    try {
      await mainApi.deleteMovie(id);
      const res = await moviesApi.getMovies();
      const filteredRes = filter(query, res)
      if (filteredRes.length === 0) {
        setNotFound(true);
      } else {
        setCards(filteredRes);
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
        <SearchForm query={query} setQuery={setQuery} handleClick={handleClick} handleChange={handleChange} checkboxState={checkboxState}/>
        <MoviesCardList
          cards={cards}
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