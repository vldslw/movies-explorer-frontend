import React, {useState, useEffect} from 'react';
import './SearchForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ query, setQuery, handleSearch, handleChange, checkboxState }) { 

  const [error, setError] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if (!query || query.length === 0) {
      setError('Нужно ввести ключевое слово')
    } else {
      handleSearch();
    }
  }  

  useEffect(() => {
    setError('');
  }, [query]);

  return (
    <section className="search" aria-label="Секция с формой поиска">
      <form className='search__form' >
        <Input query={query} setQuery={setQuery} placeholder='Фильм'/>
        <Button title='Поиск' handleClick={handleClick}/>
      </form>
      <span className="search__error">{error}</span>
      <FilterCheckbox handleChange={handleChange} checkboxState={checkboxState}/>
    </section>
  );
}

export default SearchForm; 