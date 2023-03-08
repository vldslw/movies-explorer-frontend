import './Login.css';
import React, {useState, useEffect} from "react";
import SignHeader from "../SignHeader/SignHeader";
import SignBottom from '../SignBottom/SignBottom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({password, email})
  } 

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <>
      <SignHeader 
        text="Рады видеть!"
      />
      <main className="login">
        <form
          className="login__form"
          onSubmit={handleSubmit}
        > 
          <span className="login__placeholder">E-mail</span>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="login__input login__input_type_email"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="login__error"></span>
          <span className="login__placeholder">Пароль</span>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="login__input login__input_type_password"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="login__error"></span>
          <SignBottom 
            buttonText={'Войти'}
            linkDesc={'Ещё не зарегистрированы? '}
            link={'/signup'}
            linkText={'Регистрация'}
          />
        </form>
      </main>
    </>
  );
}

export default Login;