import "./ThirdBlock.css";
import FrontImage from "../../img/thirdblock-front.png";
import BackImage from "../../img/thirdblock-back.png";

const ThirdBlock = () => {
  return (
    <div className="container">
      <section className="third-block">
        <div className="third-block__content">
          <h3 className="third-block__title">
            Круто, ты дошел до третьего блока
          </h3>
          <p className="third-block__paragraph">
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
          </p>
          <br />
          <p className="third-block__paragraph">
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </p>
        </div>
        <div className="third-block__picture">
          <img className="third-block__front-picture" src={FrontImage} />
          <img className="third-block__back-picture" src={BackImage} />
        </div>
      </section>
    </div>
  );
};

export default ThirdBlock;
