import './Profile.css';
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile({ onUpdate }) {

  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
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
        <h2 className='profile__message'>Привет, {name}!</h2>
        <form
          className="profile__form"
          onSubmit={handleSubmit}
        > 
          <div className='profile__input-container'>
            <span className="profile__placeholder">Имя</span> 
            <input
              type="name"
              value={name ?? ''} 
              onChange={({ target }) => setName(target.value)}
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
            onChange={({ target }) => setEmail(target.value)}
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
        <button type="submit" className="profile__logout-button" onClick={signOut}> 
          Выйти из аккаунта 
        </button> 
      </main>
    </>
  );
}

export default Profile;