import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "./Layout/icons/Chevron";
import { Title } from "./styles";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 3,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 526 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 526, min: 0 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  if (totalItems <= slidesToShow) {
    return null;
  }
  return (
    <>
      {currentSlide > 0 && (
        <button
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.9) 88%)",
          }}
          className="h-[300px] sm:h-[148px] w-20 sm:w-12 flex justify-center group items-center absolute top-3 left-0 z-10"
          onClick={() => previous()}
        >
          <ChevronLeft className="group-hover:scale-150" />
        </button>
      )}

      {currentSlide + slidesToShow < totalItems && (
        <button
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.9) 88%)",
          }}
          className="h-[300px] sm:h-[148px] w-20 sm:w-12 flex justify-center items-center group  absolute top-3 right-0 z-10"
          onClick={() => next()}
        >
          <ChevronRight className="group-hover:scale-150" />
        </button>
      )}
    </>
  );
};

export default function MultiCarousel({ data, type, autoPlay, title }) {
  if (data)
    return (
      <div className="">
        <Title>{title}</Title>

        <Carousel
          responsive={responsive}
          autoPlay={autoPlay == undefined ? false : autoPlay}
          autoPlaySpeed={8000}
          transitionDuration={50}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          // partialVisible={true}
          ssr={true}
          centerMode={true}
          containerClass="carousel-container"
          customTransition="transform 600ms ease-in-out"
          infinite={false}
        >
          {data.map((item, id) => (
            <Card key={id} item={item} id={id} media_type={type} />
          ))}
        </Carousel>
      </div>
    );

  return null;
}
