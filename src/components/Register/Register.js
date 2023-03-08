import './Register.css';
import SignHeader from "../SignHeader/SignHeader";
import SignBottom from '../SignBottom/SignBottom';
import useForm from '../../utils/useForm';

function Register({ onRegister }) {

  const validation = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(validation.values);
  } 

  return (
    <>
      <SignHeader 
        text="Добро пожаловать!"
      />
      <main className="register">
        <form
          className="register__form"
          onSubmit={handleSubmit}
        > 
          <span className="register__placeholder">Имя</span>
          <input
            type="text"
            id="name"
            name="name"
            value={validation.values.name ?? ''}
            onChange={(e) => validation.handleChange(e)}
            className="register__input register__input_type_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error">{validation.errors.name}</span>
          <span className="register__placeholder">E-mail</span>
          <input
            type="email"
            id="email"
            name="email"
            value={validation.values.email ?? ''}
            onChange={(e) => validation.handleChange(e)}
            className="register__input register__input_type_email"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error">{validation.errors.email}</span>
          <span className="register__placeholder">Пароль</span>
          <input
            type="password"
            id="password"
            name="password"
            value={validation.values.password ?? ''}
            onChange={(e) => validation.handleChange(e)}
            className="register__input register__input_type_password"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="register__error">{validation.errors.password}</span>
          <SignBottom 
            buttonText={'Зарегистрироваться'}
            linkDesc={'Уже зарегистрированы? '}
            link={'/signin'}
            linkText={'Войти'}
            isFormValid={validation.isValid}
          />
        </form>
      </main>
    </>
  );
}

export default Register;