import './Login.css';
import SignHeader from "../SignHeader/SignHeader";
import SignBottom from '../SignBottom/SignBottom';
import useForm from '../../utils/useForm';
const { emailPattern } = require('../../constants/constants');

function Login({ onLogin, signError }) {

  const validation = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(validation.values);
  } 

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
            value={validation.values.email ?? ''}
            onChange={(e) => validation.handleChange(e)}
            className="login__input login__input_type_email"
            minLength="2"
            maxLength="40"
            pattern={emailPattern}
            required
          />
          <span className="login__error">{validation.errors.email}</span>
          <span className="login__placeholder">Пароль</span>
          <input
            type="password"
            id="password"
            name="password"
            value={validation.values.password ?? ''}
            onChange={(e) => validation.handleChange(e)}
            className="login__input login__input_type_password"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="login__error">{validation.errors.password}</span>
          <SignBottom 
            buttonText={'Войти'}
            linkDesc={'Ещё не зарегистрированы? '}
            link={'/signup'}
            linkText={'Регистрация'}
            isFormValid={validation.isValid}
            signError={signError}
          />
        </form>
      </main>
    </>
  );
}

export default Login;