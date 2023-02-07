import './Register.css';
import SignHeader from "../SignHeader/SignHeader";
import SignBottom from '../SignBottom/SignBottom';

function Register() {

  return (
    <>
      <SignHeader 
        text="Добро пожаловать!"
      />
      <main className="register">
        <form
          className="register__form"
        > 
          <span className="register__placeholder">Имя</span>
          <input
            type="text"
            id="name"
            name="name"
            className="register__input register__input_type_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error"></span>
          <span className="register__placeholder">E-mail</span>
          <input
            type="email"
            id="email"
            name="email"
            className="register__input register__input_type_email"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error"></span>
          <span className="register__placeholder">Пароль</span>
          <input
            type="password"
            id="password"
            name="password"
            className="register__input register__input_type_password"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error"></span>
          <SignBottom 
            buttonText={'Зарегистрироваться'}
            linkDesc={'Уже зарегистрированы? '}
            link={'/signin'}
            linkText={'Войти'}
          />
        </form>
      </main>
    </>
  );
}

export default Register;