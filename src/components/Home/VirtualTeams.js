import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const SlickSlider = dynamic(() => import("../SlickSlider"));

const images = [
  "../assets/images/icon-s-11.png",
  "../assets/images/icon-s-6.png",
  "../assets/images/icon-s-3.png",
  "../assets/images/icon-s-4.png",
  "../assets/images/icon-s-5.png",
  "../assets/images/icon-s-6.png",
  "../assets/images/icon-s-7.png",
  "../assets/images/icon-s-8.png",
  "../assets/images/icon-s-9.png",
  "../assets/images/icon-s-10.png",
  "../assets/images/icon-s-11.png",
  "../assets/images/icon-s-4.png",
  "../assets/images/icon-s-2.png",
  "../assets/images/icon-s-3.png",
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  swipeToSlide: true,
  className: "slick-slider-custom-logos",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

const settings1 = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  swipeToSlide: true,
  rtl: true,
  className: "slick-slider-custom-logos",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

const VirtualTeams = () => {
  return (
    <section className="virtualTeams pt-5">
      <div className="container-fluid">
        <div className="px-0 px-md-2 px-lg-3 px-xl-5 mx-0 mx-md-2 mx-lg-3 mx-xl-5 pb-5 row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="detailVirual">
              <div className="detailTxt mt-3 mt-md-4 mt-lg-4 pt-3 pt-md-4 pt-lg-4">
                <h2>
                  Explore Our <span>Pre-Vetted Team</span> and Our Diverse{" "}
                  <span>Tech Stack</span>
                </h2>
                <p>
                  We cater to a diverse range of industries and ensure to
                  connect our clients with the right talent that is seasoned in
                  the relevant tech stack they require, eliminating the
                  challenges of the tedious recruitment process. Experience a
                  hassle-free hiring process with us.
                </p>
                <div className="ourTechStack">Our Tech Stacks</div>
                <div className="sliderLogo mt-4">
                  <div className="customer-logos slider w-100">
                    <SlickSlider
                      images={images.map((item, index) => (
                        <div className="slide" key={index}>
                          <Image
                            src={item}
                            alt="slide icon"
                            className="position-static"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      ))}
                      settings={settings}
                    />
                  </div>
                </div>
                <div className="sliderLogo1">
                  <div className="customer-logos2 slider">
                    <SlickSlider
                      images={images.map((item, index) => (
                        <div className="slide" key={index}>
                          <Image
                            src={item}
                            alt="slide icon"
                            className="position-static"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      ))}
                      settings={settings1}
                    />
                  </div>
                </div>
                <div className="buttonVirTeam virtualTeams mt-2 pt-2">
                  <span className="hireBtn">
                    <Link href="/hire" target="_blank" className="hireBtn">
                      Hire Now
                    </Link>
                  </span>
                  <span className="hireBtn newBntRight d-none">
                    <a href="#" className="hireBtn">
                      OUR PLANS
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="topTalent text-center">Top Talent</div>
            <div className="sliderImages text-center desktop-view topTalentImgage">
              <div className="position-relative">
                <Image
                  src="../assets/images/Group3609.png"
                  className="img-fluid position-static"
                  layout="fill"
                  objectFit="contain"
                  alt="image"
                />
              </div>
            </div>
            <div className="sliderImages text-center mobile-view">
              <div className="position-relative">
                <Image
                  src="../assets/images/Group3609mobImg.png"
                  className="img-fluid position-static"
                  layout="fill"
                  objectFit="contain"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTeams;
