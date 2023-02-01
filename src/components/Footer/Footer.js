import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__upper-row">
        <p className="footer__desc">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__lower-row">
        <p className="footer__copyright">© 2023</p>
        <nav>
          <ul className="footer__links">
            <li className="footer__link">
              <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
            </li>
            <li className="footer__link">
              <a className="footer__link" href="https://github.com/">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;