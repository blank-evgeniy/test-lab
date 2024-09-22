import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

import LeftArrow from "../../img/left-arrow.svg";
import RightArrow from "../../img/right-arrow.svg";

interface CarouselProps {
  children: React.ReactNode;
}

function SampleNextArrow(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <RightArrow />
    </button>
  );
}

function SamplePrevArrow(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <LeftArrow />
    </button>
  );
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="carousel__prev-btn" />,
    prevArrow: <SamplePrevArrow className="carousel__prev-btn" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
