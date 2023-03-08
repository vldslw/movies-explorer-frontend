import './Profile.css';
import React, {useState, useEffect, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetForm };
}

function Profile({ onUpdate }) {

  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);

  const validation = useForm();
  let [name, setName] = useState(''); 
  let [email, setEmail] = useState(''); 

  let isFormValid = validation.isValid;

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    setName(validation.values.name);
  }, [validation.values.name]);

  useEffect(() => {
    setEmail(validation.values.email);
  }, [validation.values.email]);

  console.log({name, email});

  function handleSubmit(e) {
    e.preventDefault();
    console.log({name, email});
    onUpdate({name, email})
  } 

  function signOut(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('query');
    localStorage.removeItem('notFound');
    localStorage.removeItem('cards');
    localStorage.removeItem('checkboxState');
    navigate("/");
  }

  return (
    <>
      <Header 
        color={"white"}
        children={
          <Navigation />
        }
      />
      <main className="profile">
        <h2 className='profile__message'>Привет, {validation.values.name ?? currentUser.name}!</h2>
        <form
          className="profile__form"
          onSubmit={handleSubmit}
        > 
          <div className='profile__input-container'>
            <span className="profile__placeholder">Имя</span> 
            <input
              type="name"
              value={validation.values.name ?? currentUser.name ?? ''}
              onChange={(e) => validation.handleChange(e)}
              id="name"
              name="name"
              className="profile__input profile__input_type_name"
              minLength="2"
              maxLength="40"
              required
            />
          </div>
          <span className="profile__error">{validation.errors.name}</span>
          <div className='profile__input-container'>
            <span className="profile__placeholder">E-mail</span> 
            <input
            type="email"
            value={validation.values.email ?? currentUser.email ?? ''}
            onChange={(e) => validation.handleChange(e)}
            id="email"
            name="email"
            className="profile__input profile__input_type_email"
            minLength="2"
            maxLength="40"
            required
            />
          </div>
          <span className="profile__error">{validation.errors.email}</span>
          
          <button type="submit" className={`profile__submit-button ${!isFormValid ? 'profile__submit-button_disabled' : '' }`} disabled={!isFormValid ? true : false}> 
            Редактировать 
          </button> 
        </form>
        <button type="submit" className="profile__logout-button" onClick={signOut}> 
          Выйти из аккаунта 
        </button> 
      </main>
    </>
  );
}

export default Profile;