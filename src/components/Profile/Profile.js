import './Profile.css';
import { useState } from "react"; 
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile() {

  const [name, setName] = useState('Владислав'); 
  const [email, setEmail] = useState('pochta@yandex.ru'); 

  function handleNameChange(e) { 
    setName(e.target.value); 
  } 

  function handleEmailChange(e) { 
    setEmail(e.target.value); 
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
        <h2 className='profile__message'>Привет, {name}!</h2>
        <form
          className="profile__form"
        > 
          <div className='profile__input-container'>
            <span className="profile__placeholder">Имя</span> 
            <input
              type="name"
              value={name ?? ''} 
              onChange={handleNameChange} 
              id="name"
              name="name"
              className="profile__input profile__input_type_name"
              minLength="2"
              maxLength="40"
              required
            />
          </div>
          <div className='profile__input-container'>
            <span className="profile__placeholder">E-mail</span> 
            <input
            type="email"
            value={email ?? ''}
            onChange={handleEmailChange} 
            id="email"
            name="email"
            className="profile__input profile__input_type_email"
            minLength="2"
            maxLength="40"
            required
            />
          </div>
          <button type="submit" className="profile__submit-button"> 
            Редактировать 
          </button> 
        </form>
        <button type="submit" className="profile__logout-button"> 
          Выйти из аккаунта 
        </button> 
      </main>
    </>
  );
}

export default Profile;