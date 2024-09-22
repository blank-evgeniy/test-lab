import Slider from "react-slick";
import { useEffect, useLayoutEffect } from "react";

import LeftArrow from "../../img/reviews/left-arrow.svg";
import RightArrow from "../../img/reviews/right-arrow.svg";

import "./slick.css";
import "./slick-theme.css";
import { useMediaQuery } from "react-responsive";

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
  const isTable = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    resizeCarouselItems();
    window.addEventListener("resize", resizeCarouselItems);

    return () => {
      window.removeEventListener("resize", resizeCarouselItems);
    };
  }, []);

  const resizeCarouselItems = () => {
    const slickTrack = document.querySelector<HTMLElement>(".slick-track");

    const slickItems = document.querySelectorAll<HTMLElement>(
      ".slick-slide .carousel-item"
    );

    const styles = window.getComputedStyle(slickItems[0]);
    const marginTop = styles.marginTop;
    const marginBottom = styles.marginBottom;

    const height =
      slickTrack.offsetHeight -
      parseInt(marginBottom, 10) -
      parseInt(marginTop, 10);

    console.log(height);

    slickItems.forEach((element) => {
      element.style.minHeight = height + "px";
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isTable ? (isMobile ? 1 : 2) : 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="carousel__prev-btn" />,
    prevArrow: <SamplePrevArrow className="carousel__prev-btn" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
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
