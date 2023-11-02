import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = ({ images, settings }) => {
  return (
    <>
      <Slider {...settings}>
        {images.map((item) => {
          return item;
        })}
      </Slider>
    </>
  );
};

export default SlickSlider;
