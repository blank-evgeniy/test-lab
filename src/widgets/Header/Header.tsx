import "./Header.css";
import Logo from "./../../img/logo.svg";
import MenuOpen from "./../../img/menu_open.svg";
import MenuClose from "./../../img/menu_close.svg";
import MenuLink from "./../../img/menu_link.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (opened: boolean) => {
    setIsOpen(opened);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
        testLab
      </div>
      <nav className="header__navigation">
        <ul className="header__links">
          <li>
            <a className="header__link" href="#plan">
              Как это работает
            </a>
          </li>
          <li>
            <a className="header__link" href="#third-block">
              3-й блок
            </a>
          </li>
          <li>
            <a className="header__link" href="#questions">
              Вопросы и ответы
            </a>
          </li>
          <li>
            <a className="header__link" href="#form">
              Форма
            </a>
          </li>
        </ul>
        <button className="header__open">
          <MenuOpen onClick={() => handleOpen(true)} />
        </button>
      </nav>

      {isOpen && (
        <div className="header-mobile">
          <div className="header-mobile__logo">
            <Logo />
            testLab
          </div>
          <ul className="header-mobile__links">
            <hr className="line" />
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="header-mobile__link"
                href="#plan"
              >
                Как это работает
                <MenuLink />
              </a>
            </li>
            <hr className="line" />
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="header-mobile__link"
                href="#third-block"
              >
                3-й блок
                <MenuLink />
              </a>
            </li>
            <hr className="line" />
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="header-mobile__link"
                href="#questions"
              >
                Вопросы и ответы
                <MenuLink />
              </a>
            </li>
            <hr className="line" />
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="header-mobile__link"
                href="#form"
              >
                Форма
                <MenuLink />
              </a>
            </li>
            <hr className="line" />
          </ul>
          <button className="header__close">
            <MenuClose onClick={() => handleOpen(false)} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
