import "./PlanItemCard.css";

export interface PlanItem {
  icon: string;
  title: string;
  content: string;
}

const PlanItemCard: React.FC<PlanItem> = ({ icon, title, content }) => {
  return (
    <div className="plan-card">
      <img src={icon} />
      <h6 className="plan-card__title">{title}</h6>
      <p className="plan-card__content">{content}</p>
    </div>
  );
};

export default PlanItemCard;
