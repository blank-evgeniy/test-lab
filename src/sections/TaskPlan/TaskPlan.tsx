import "./TaskPlan.css";

import PlanItemCard from "../../widgets/PlanItemCard/PlanItemCard";
import PlanItems from "../../data/PlanItems";

const TaskPlan = () => {
  return (
    <section className="plan">
      <h2 className="plan__title">Как это работает</h2>
      <div className="plan__list">
        {PlanItems.map((item) => (
          <PlanItemCard {...item} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default TaskPlan;
