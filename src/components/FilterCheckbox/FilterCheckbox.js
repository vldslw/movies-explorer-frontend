import './FilterCheckbox.css';

function FilterCheckbox({ handleChange, checkboxState }) {

  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" onChange={handleChange} checked={checkboxState}/>
        <span className="filter__slider"></span>
      </label>
      <p className='filter__desc'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;