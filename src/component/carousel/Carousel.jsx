import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidesToShow = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="my-5 h-[400px] px-2">
          <div class="grid grid-rows-2 grid-flow-col my-2 max-w-[1200]">
            <div class="row-span-2">
              <img src={slide.image} alt={`Slide ${index + 1}`}  className="w-24"/>
            </div>
            <div class="col-span-3">
              <h3 className="font-bold">{slide.name}</h3>
            </div>
            <div class="row-span-1 col-span-3">
              <h3 className="text-lg font-bold my-3">{slide.caption}</h3>
            </div>
          </div>
          <h3>{slide.content}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default SlidesToShow;
