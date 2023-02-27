import React, {useState} from 'react';
import './SearchForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import moviesApi from '../../utils/MoviesApi';

function SearchForm({ setCards, setIsLoading }) {

  const [query, setQuery] = useState('');
  

  const handleClick = async () => {
    try {
      setIsLoading(true)
      const res = await moviesApi.getMovies();
      setCards(res);
      console.log(res);
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="search" aria-label="Секция с формой поиска">
      <form className='search__form'>
        <Input query={query} setQuery={setQuery} placeholder='Фильм'/>
        <Button title='Поиск' handleClick={handleClick}/>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm; 