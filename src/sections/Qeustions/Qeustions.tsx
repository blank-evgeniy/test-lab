import Accordion from "../../widgets/Accordion/Accordion";
import QuestionsList from "../../data/QuestionsList";

import "./Qeustions.css";

const Qeustions = () => {
  return (
    <div className="container">
      <section className="questions" id="questions">
        <h2 className="questions__title">Вопросы и ответы</h2>
        <div className="questions__list">
          <Accordion items={QuestionsList} />
        </div>
      </section>
    </div>
  );
};

export default Qeustions;
