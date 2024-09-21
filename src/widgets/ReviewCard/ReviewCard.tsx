import { Review } from "../../data/ReviewsList";
import "./ReviewCard.css";

const ReviewCard: React.FC<Review> = ({
  author,
  location,
  avatar,
  content,
}) => {
  return (
    <div className="review-card">
      <div className="review-card__header">
        <img className="review-card__avatar" src={avatar} />
        <div className="review-card__info">
          <h6 className="review-card__author">{author}</h6>
          <p className="review-card__location">{location}</p>
        </div>
      </div>
      <p className="review-card__content">{content}</p>
    </div>
  );
};

export default ReviewCard;
