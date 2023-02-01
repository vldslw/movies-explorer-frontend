import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import myPhoto from "../../images/myPhoto.jpeg";
import Heading from '../Heading/Heading';

function AboutMe() {
  return (
    <section className="about-me">
      <Heading
        title={'Студент'}
      />
      <div className='about-me__body'>
        <div className='about-me__text'>
          <h3 className='about-me__title'>Владислав</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 31 год</h4>
          <p className='about-me__bio'>Я родился в Москве, закончил МГИМО по спецальности политология и международные отношения. 
          С 2014 года работал журналистом-международником, последние пять лет прожил в США. 
          Год назад начал кодить и поступил на курсы Яндекс-практикума.</p>
          <ul className="about-me__links">
            <li>
              <a className="about-me__link" href="https://github.com/vldslw">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Моя фотография" />
      </div> 
      <Portfolio />     
    </section>
  );
}

export default AboutMe;