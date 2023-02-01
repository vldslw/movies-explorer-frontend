import './Portfolio.css';
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <a href="https://vldslw.github.io/russian-travel/index.html" className="portfolio__link">
          <p className='portfolio__link-text'>Статичный сайт</p>
          <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
        </a>
        <a href="https://vldslw.github.io/russian-travel/index.html" className="portfolio__link">
          <p className='portfolio__link-text'>Адаптивный сайт</p>
          <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
        </a>
        <a href="https://vldslw.github.io/russian-travel/index.html" className="portfolio__link">
          <p className='portfolio__link-text'>Одностраничное приложение</p>
          <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;