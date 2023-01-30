import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav>
          <ul className="nav-tab__links">
            <li className="nav-tab__item">
              <a href="#about-project" className="nav-tab__link">О проекте</a>
            </li>
            <li className="nav-tab__item">
              <a href="#techs" className="nav-tab__link">Технологии</a>
            </li>
            <li className="nav-tab__item">
              <a href="#about-me" className="nav-tab__link">Студент</a>
            </li>
          </ul>
        </nav>
    </section>
  );
}

export default NavTab;