import './Profile.css';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import useForm from '../../utils/useForm';
const { emailPattern, namePattern } = require('../../constants/constants');

function Profile({ onUpdate, updateMessage, setLoggedIn }) {

  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);

  const validation = useForm();

  let isFormValid = validation.isValid && ((validation.values.name !== currentUser.name) || (validation.values.email !== currentUser.email));

  useEffect(() => {
    validation.setCurrentUserValues(currentUser);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(validation.values)
  } 

  function signOut(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('query');
    localStorage.removeItem('notFound');
    localStorage.removeItem('foundCards');
    localStorage.removeItem('checkboxState');
    setLoggedIn(false);
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
              pattern={namePattern}
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
            pattern={emailPattern}
            required
            />
          </div>
          <span className="profile__error">{validation.errors.email}</span>

          <p className="profile__update-status">{updateMessage}</p>
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