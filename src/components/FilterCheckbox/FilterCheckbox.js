import './FilterCheckbox.css';

function FilterCheckbox({ handleChange }) {

  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" onChange={handleChange}/>
        <span className="filter__slider"></span>
      </label>
      <p className='filter__desc'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;