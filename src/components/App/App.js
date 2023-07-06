import { Routes, Route, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound'

function App() {

  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const auth = (jwt) => {
    return mainApi.authUser(jwt)
    .then((res) => {
      if (res) {
        const userData = res;
        setLoggedIn(true);
        setCurrentUser(userData);
      }
    })
    .catch((err) => {
      console.log(`Не удалось получить данные пользователя. ${err}`);
    });
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth(jwt);
    }
  }, []);

  const [loginError, setLoginError] = useState('');

  const onLogin = ({password, email}) => {
    return mainApi.authorize(password, email)
    .then((res) => { 
      if (res.token) { 
        setLoggedIn(true); 
        localStorage.setItem('jwt', res.token);
        auth(res.token);
        navigate('/movies');
      } 
    })
    .catch((err) => {
      console.log(`Не удалось авторизовать пользователя. ${err}`);
      setLoginError(`Не удалось авторизоваться. ${err}`);
    });
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi
      .getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn]);

  const [registerError, setRegisterError] = useState('');

  const onRegister = ({ name, email, password}) => {
    return mainApi.register(name, email, password)
    .then((res) => {
      onLogin({password, email})
      return res;
    })
    .catch((err) => {
      console.log(`Не удалось зарегистрировать пользователя. ${err}`);
      setRegisterError(`Не удалось зарегистрироваться. ${err}`);
    });
  }

  const [updateMessage, setUpdateMessage] = useState(''); 
  const [updateError, setUpdateError] = useState(''); 

  const onUpdate = ({ name, email }) => {
    return mainApi.updateUser(name, email)
    .then((res) => {
      setCurrentUser(res);
      setUpdateMessage('Данные пользователя обновлены');
      setTimeout(() => {
        setUpdateMessage('');
      }, 1000);
    })
    .catch((err) => {
      console.log(`Не удалось обновить данные пользователя. ${err}`);
      setUpdateError(`Не удалось обновить данные. ${err}`);
      setTimeout(() => {
        setUpdateError('');
      }, 3000);
    });
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
       <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn}/>} />
        <Route 
          path="/movies" 
          element={
            <ProtectedRoute >
              <Movies loggedIn={loggedIn}/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/saved-movies" 
          element={
            <ProtectedRoute >
              <SavedMovies loggedIn={loggedIn}/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute >
              <Profile onUpdate={onUpdate} updateMessage={updateMessage} setLoggedIn={setLoggedIn} updateError={updateError}/>
            </ProtectedRoute>
          } 
        />
        <Route path="/signin" element={<Login onLogin={onLogin} signError={loginError}/>} />
        <Route path="/signup" element={<Register onRegister={onRegister} signError={registerError}/>} />          
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/signin" element={<Login onLogin={onLogin}/>} />
        <Route path="/signup" element={<Register onRegister={onRegister}/>} />
        <Route path='*' element={<PageNotFound />} />
        <ProtectedRoute 
          exact path="/movies" 
          loggedIn={loggedIn} 
          component={Movies} 
        />
        <ProtectedRoute 
          exact path="/saved-movies"
          loggedIn={loggedIn} 
          component={SavedMovies} 
        />
        <ProtectedRoute 
          exact path="/profile"
          loggedIn={loggedIn} 
          component={Profile} 
          currentUser={currentUser} 
          onUpdate={onUpdate}
        />
      </Routes> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;