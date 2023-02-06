import './Portfolio.css';
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className='portfolio__item'>
          <a href="https://github.com/vldslw/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className='portfolio__link-text'>Статичный сайт</p>
            <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
          </a>
        </li>
        <li className='portfolio__item'>
          <a href="https://github.com/vldslw/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
          </a>  
        </li>
        <li className='portfolio__item'>
          <a href="https://github.com/vldslw/react-mesto-api-full" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;