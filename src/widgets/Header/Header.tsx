import "./Header.css";
import Logo from "./../../img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
        testLab
      </div>
      <nav className="header__navigation">
        <ul className="header__links">
          <li>
            <a className="header__link" href="#">
              Как это работает
            </a>
          </li>
          <li>
            <a className="header__link" href="#">
              3-й блок
            </a>
          </li>
          <li>
            <a className="header__link" href="#">
              Вопросы и ответы
            </a>
          </li>
          <li>
            <a className="header__link" href="#">
              Форма
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
