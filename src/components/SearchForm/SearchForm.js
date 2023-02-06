import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className='search__form'>
        <input 
          type="text"
          id="search"
          name="search"
          className='search__input'
          placeholder='Фильм'
          required
        />
        <button className='search__button'>Поиск</button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm; 