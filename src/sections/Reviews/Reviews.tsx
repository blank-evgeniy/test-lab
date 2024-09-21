import ReviewList from "../../data/ReviewsList";
import Carousel from "../../widgets/Carousel/Carousel";
import ReviewCard from "../../widgets/ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  return (
    <section className="container">
      <div className="reviews">
        <h2 className="reviews__title">Отзывы</h2>
        <Carousel>
          {ReviewList.map((review, index) => (
            <div key={index}>
              <ReviewCard {...review} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
