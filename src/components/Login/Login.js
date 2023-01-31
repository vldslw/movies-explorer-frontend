import './Login.css';
import SignHeader from "../SignHeader/SignHeader";
import SignBottom from '../SignBottom/SignBottom';

function Login() {

  return (
    <>
      <SignHeader 
        text="Рады видеть!"
      />
      <main className="login">
        <form
          className="login__form"
        > 
          <span className="login__placeholder">Email</span>
          <input
            type="email"
            id="email"
            name="email"
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