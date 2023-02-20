import './Input.css';

function Input({ query, setQuery, placeholder }) {

  return (
    <input 
      type="text"
      id="search"
      name="search"
      className='input'
      placeholder={placeholder}
      value={query}
      onChange={(e) => {
        setQuery(e.target.value)
      }}
      required
    />
  );
}

export default Input;