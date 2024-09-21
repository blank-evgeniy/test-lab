import Button, { ButtonTheme } from "../../shared/Button/Button";
import Header from "../../widgets/Header/Header";
import bg from "../../img/home_bg.png";

import "./Home.css";
import { url } from "inspector";

const Home = () => {
  return (
    <section
      className="home"
      style={{ background: `url(${bg}) var(--primary)` }}
    >
      <Header />
      <div className="home__content">
        <h1 className="home__title">
          Говорят, никогда не поздно сменить профессию
        </h1>
        <p className="home__subtitle">
          Сделай круто тестовое задание и у тебя получится
        </p>
        <Button theme={ButtonTheme.GRAY} className="home__button">
          Проще простого!
        </Button>
      </div>
    </section>
  );
};

export default Home;
