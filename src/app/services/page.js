"use client";
import dynamic from "next/dynamic";
const SlickSlider = dynamic(() => import("@/components/SlickSlider"), {
  ssr: false,
});
const BuildYourTeam = dynamic(() => import("@/components/buildyourteam"), {
  ssr: false,
});
const LearnMoreModal = dynamic(() => import("@/components/learnmoremodal"), {
  ssr: false,
});
const SendUs = dynamic(() => import("@/components/sendus"), {
  ssr: false,
});
const WhyWe = dynamic(() => import("@/components/whywe"), {
  ssr: false,
});
import Link from "next/link";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  swipeToSlide: true,
  className: "offer-section-slider",
  responsive: [
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Services() {
  let offerArr = [
    <div className="slide">
      <div className="cardNew">
        <div className="card">
          <img
            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/innerslider.png"
            alt="..."
            className="cardImg"
          />
          <div className="card-body">
            <h5 className="card-title">Web Development</h5>
            <p className="card-text">
              At Atrule, we specialize in delivering high-quality Web
              Development Services that take your business to success in the
              digital world.
            </p>
            <Link href="/services/webdevelopment" className="leftArrow">
              Learn More
              <img
                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div className="slide">
      <div className="cardNew">
        <div className="card">
          <img
            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/SerGroup10.png"
            alt="..."
            className="cardImg"
          />
          <div className="card-body">
            <h5 className="card-title">App Development</h5>
            <p className="card-text">
              At Atrule, we prioritize our clients and are committed to
              providing them with the very best Mobile App Development Services.
            </p>
            <Link href="/services/mobileappdevelopment" className="leftArrow">
              Learn More
              <img
                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div className="slide">
      <div className="cardNew">
        <div className="card">
          <img
            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/serGroup9uiux.png"
            alt="..."
            className="cardImg"
          />
          <div className="card-body">
            <h5 className="card-title">E-Commerce </h5>
            <p className="card-text">
              Our experienced team of developers combines creativity and
              technical expertise to create customized eCommerce stores that
              drive sales and enhance the customer experience.
            </p>
            <Link href="/services/ecommerce" className="leftArrow">
              Learn More
              <img
                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div className="slide">
      <div className="cardNew">
        <div className="card">
          <img
            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/serGroup9.png"
            alt="..."
            className="cardImg"
          />
          <div className="card-body">
            <h5 className="card-title">UI/UX Design</h5>
            <p className="card-text">
              Atrule always has the end user in mind when providing our UI/UX
              Design Services, creating meaningful experiences for your target
              audience.
            </p>
            <Link href="/services/uiuxdesign" className="leftArrow">
              Learn More
              <img
                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    <div className="slide">
      <div className="cardNew">
        <div className="card">
          <img
            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/SerGroup10.png"
            alt="..."
            className="cardImg"
          />
          <div className="card-body">
            <h5 className="card-title">Software Development</h5>
            <p className="card-text">
              At Atrule, we offer top-notch software development services to
              help businesses achieve their digital goals.
            </p>
            <Link href="/services/softwaredevelopment" className="leftArrow">
              Learn More
              <img
                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <section className="innerTop">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="topInner">
                  <div className="howworkTxt">
                    <span className="txtCom">OUR </span>
                    <span className="buildTxt"> SERVICES</span>
                  </div>
                  <div className="mt-0 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/aboutUs.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    We always tend to design and build digital experiences that
                    deliver results. Our comprehensive range of services is
                    designed to meet your unique needs, providing top-notch
                    solutions in areas such as web development, mobile app
                    development, UI/UX design, and custom software development.
                    As your digital partner, we will be with you along the
                    journey, from initial planning to delivery.
                  </p>
                  <div className="hireBtn">
                    <Link href="/hire" target="_blank" className="hireBtn">
                      Hire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whatweoffer">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="text-center innerTitleNew">
                <div className="row">
                  <h2>What We Offer?</h2>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <p>
                      We offer a multitude of digital services that not only
                      please our clients but also end users.
                    </p>
                  </div>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                </div>
              </div>
              <div className="innerSlider ServicesPage ServicesPageSlider">
                <div className="innercard slider">
                  <SlickSlider images={offerArr} settings={settings} />
                  {/* <div className="slide">
                    <div className="cardNew">
                      <div className="card">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/innerslider.png"
                          alt="..."
                          className="cardImg"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Web Development</h5>
                          <p className="card-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>
                          <a href="#" className="leftArrow">
                            Learn More
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="cardNew">
                      <div className="card">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/SerGroup10.png"
                          alt="..."
                          className="cardImg"
                        />
                        <div className="card-body">
                          <h5 className="card-title">App Development</h5>
                          <p className="card-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>
                          <a href="#" className="leftArrow">
                            Learn More
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="cardNew">
                      <div className="card">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/serGroup9uiux.png"
                          alt="..."
                          className="cardImg"
                        />
                        <div className="card-body">
                          <h5 className="card-title">eCommerce </h5>
                          <p className="card-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>
                          <a href="#" className="leftArrow">
                            Learn More
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="cardNew">
                      <div className="card">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/serGroup9.png"
                          alt="..."
                          className="cardImg"
                        />
                        <div className="card-body">
                          <h5 className="card-title">UI/UX Design</h5>
                          <p className="card-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>
                          <a href="#" className="leftArrow">
                            Learn More
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="cardNew">
                      <div className="card">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/SerGroup10.png"
                          alt="..."
                          className="cardImg"
                        />
                        <div className="card-body">
                          <h5 className="card-title">App Development</h5>
                          <p className="card-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>
                          <a href="#" className="leftArrow">
                            Learn More
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyWe />
      <SendUs />
      <BuildYourTeam />
      <LearnMoreModal />
    </>
  );
}
