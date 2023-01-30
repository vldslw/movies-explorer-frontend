import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav>
          <ul className="nav-tab__links">
            <li className="nav-tab__link">
              <a href="#about-project" className="footer__link">О проекте</a>
            </li>
            <li className="nav-tab__link">
              <a href="#techs" className="footer__link">Технологии</a>
            </li>
            <li className="nav-tab__link">
              <a href="#about-me" className="footer__link">Студент</a>
            </li>
          </ul>
        </nav>
    </section>
  );
}

export default NavTab;