import dynamic from "next/dynamic";
import Image from "next/image";
const SlickSlider = dynamic(() => import("../SlickSlider"));

const trustedPartnerImage = [
  "../assets/images/clienticon/Group-11.svg",
  "../assets/images/clienticon/Group-12.svg",
  "../assets/images/clienticon/Group-9.svg",
  "../assets/images/clienticon/Group-8.svg",
  "../assets/images/clienticon/Group-7.svg",
  "../assets/images/clienticon/Group-6.svg",
  "../assets/images/clienticon/Group-10.svg",
  "../assets/images/clienticon/Group-5.svg",
  "../assets/images/clienticon/Group-4.svg",
  "../assets/images/clienticon/Group-15.svg",
  "../assets/images/clienticon/Group-16.svg",
  "../assets/images/clienticon/Group-17.svg",
];

const settings3 = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const TrustedPartners = () => {
  return (
    <section className="clientLogo">
      <div className="container-fluid">
        <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
          <div className="customer-logos3 slider">
            <SlickSlider
              images={trustedPartnerImage.map((item, index) => (
                <div className="slide" key={index}>
                  <Image
                    src={item}
                    alt="slide icon"
                    width={150}
                    height={150}
                    className="position-static"
                  />
                </div>
              ))}
              settings={settings3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
