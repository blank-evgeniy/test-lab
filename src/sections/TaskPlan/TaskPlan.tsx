import PlanItemCard from "../../widgets/PlanItemCard/PlanItemCard";
import PlanItems from "../../data/PlanItems";

import "./TaskPlan.css";

const TaskPlan = () => {
  return (
    <div className="container">
      <section className="plan" id="plan">
        <h2 className="plan__title">Как это работает</h2>
        <div className="plan__list">
          {PlanItems.map((item) => (
            <PlanItemCard {...item} key={item.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskPlan;
