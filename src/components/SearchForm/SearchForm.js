import React from 'react';
import './SearchForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ setCards, setIsLoading, query, setQuery, handleClick }) {

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