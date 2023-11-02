"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
const SlickSlider = dynamic(() => import("@/components/SlickSlider"), {
  ssr: false,
});
const BuildYourTeam = dynamic(() => import("@/components/buildyourteam"), {
  ssr: false,
});
const OurServices = dynamic(() => import("@/components/ourservices"), {
  ssr: false,
});
import HeaderImage from "../../public/assets/images/headerBg.png";

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

export default function Home() {
  return (
    <>
      <div className="headerbgimg">
        {/* <div className="position-relative"> */}
        <Image
          src="../assets/images/headerBg.png"
          alt="image"
          layout="fill"
          objectFit="cover"
          className=""
          loading="lazy"
        />
        {/* </div> */}
      </div>
      <div className="mainGgNew">
        <div className="px-0 px-md-2 px-lg-3 px-xl-5 mx-0 mx-md-2 mx-lg-3 mx-xl-5 pb-3 pb-md-0 pb-lg-5">
          <section className="slider mt-0 mt-md-0 mt-lg-0 pt-3 pt-md-3 pt-lg-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="detailTxt mt-0 mt-md-4 mt-lg-4 pt-0 pt-md-4 pt-lg-4">
                    <h2>
                      Easy to <span>Hire</span>
                    </h2>
                    <h2>
                      Top Remote <span>Developers!</span>
                    </h2>
                    <p>
                      We help build and manage a team of world-class developers
                      & designers to bring your vision to life
                    </p>
                    <div className="desktop1">
                      <div className="BuildTab">
                        <div className="buildTeam">
                          <div className="byt">
                            <div className="bytImages">
                              <Image
                                src="../assets/images/icon.png"
                                alt="image"
                                layout="fill"
                              />
                            </div>
                            <div className="txt">
                              Build Your
                              <br />
                              Team
                            </div>
                          </div>
                          <div className="byt">
                            <div className="bytImages">
                              <Image
                                src="../assets/images/icon-1.png"
                                alt="image"
                                layout="fill"
                              />
                            </div>
                            <div className="txt">
                              Set
                              <br />
                              Budget
                            </div>
                          </div>
                          <div className="byt">
                            <div className="bytImages">
                              <Image
                                src="../assets/images/icon-2.png"
                                alt="image"
                                layout="fill"
                              />
                            </div>
                            <div className="txt">
                              Get
                              <br />
                              started
                            </div>
                          </div>
                        </div>
                        <div className="hireBtn">
                          <Link href="/hire" className="hireBtn">
                            Hire Now
                          </Link>
                        </div>
                      </div>
                      <div className="sideImg">
                        <div className="position-relative">
                          <Image
                            src="../assets/images/NSlider.png"
                            className="img-fluid position-static"
                            alt="image"
                            layout="fill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="sliderImages text-end mt-5 mt-md-4 mt-lg-4 pt-0 pt-md-4 pt-lg-4 position-relative">
                    <Image
                      src="../assets/images/slider.png"
                      className="img-fluid webRes position-static"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                    />
                    <div className="mobileRes ">
                      <div className="position-relative">
                        <Image
                          src="../assets/images/NSlider.png"
                          className="img-fluid position-static"
                          alt="image"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
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
                    connect our clients with the right talent that is seasoned
                    in the relevant tech stack they require, eliminating the
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
      <OurServices />
      <section className="whyWe howItWork pt-5 pt-md-5 pt-lg-5">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="text-center row mb-3 mb-md-3 mb-lg-3 pb-3 pb-md-3 pb-lg-3">
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="whyTxt">How It Works</div>
                <p className="mainPar">
                  Our process is as simple as 1, 2, & 3.
                  <br />
                  You just need to hire professionals, and we will handle design
                  & development. Then it's testing & go-live.
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="teamView text-md-center  text-lg-start">
                  <div className="teamImg">
                    <Image
                      src="../assets/images/howNum1.png"
                      alt="image"
                      width={100}
                      height={100}
                      className="position-static"
                    />
                  </div>
                  <div className="howNameTxt">Hire Team</div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="teamView text-md-center  text-lg-start">
                  <div className="teamImg">
                    <Image
                      src="../assets/images/howNum2.png"
                      alt="image"
                      width={100}
                      height={100}
                      className="position-static"
                    />
                  </div>
                  <div className="howNameTxt howNameTxtMob howNameTxtFullMob">
                    Design & Development
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="teamView text-md-center text-lg-start">
                  <div className="teamImg">
                    <Image
                      src="../assets/images/howNum3.png"
                      alt="image"
                      width={100}
                      height={100}
                      className="position-static"
                    />
                  </div>
                  <div className="howNameTxt">Test & Live</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="text-center desktop-view">
                  <div className="position-relative">
                    <Image
                      src="../assets/images/howtowork.png"
                      alt="image"
                      className="img-fluid position-static"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="howworkTxt">
                    <span className="buildTxt">READY TO</span>
                    <span className="txtCom">GO LIVE</span>
                  </div>
                </div>
                <div className="text-center tabletView">
                  <div className="position-relative" width={100} height={100}>
                    <Image
                      src="../assets/images/howtoworkTablet.png"
                      className="img-fluid position-static"
                      layout="fill"
                      objectFit="contain"
                      alt="image"
                    />
                  </div>

                  <div className="mt-4">
                    <Image
                      src="../assets/images/howtoworkMobile2.png"
                      alt="image"
                      className="img-fluid position-static"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="howworkTxt">
                    <span className="buildTxt">READY TO</span>
                    <span className="txtCom">GO LIVE</span>
                  </div>
                </div>
                <div className="text-center mobile-view">
                  <div className="position-relative">
                    <Image
                      src="../assets/images/howtoworkMobile.png"
                      alt="image"
                      className="img-fluid position-static"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="position-relative">
                      <Image
                        src="../assets/images/howtoworkMobile2.png"
                        alt="image"
                        layout="fill"
                        objectFit="contain"
                        className="position-static img-fluid"
                      />
                    </div>
                  </div>
                  <div className="howworkTxt">
                    <span className="buildTxt">READY TO</span>
                    <span className="txtCom">GO LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whyWe mt-3 mt-md-5 mt-lg-5 pt-3 pt-md-5 pt-lg-5">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="text-center row mb-0 mb-md-3 mb-lg-3 pb-0 pb-md-3 pb-lg-3">
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="whyTxt">Why We?</div>
                <p className="mainPar">
                  Choose us for our expertise, innovation, and client-centric
                  approach to delivering exceptional software solutions for your
                  business needs.
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0">
                <div className="borderTopNonr text-center pb-2 pb-md-2 pb-lg-4 pt-2 pt-md-2 pt-lg-4">
                  <div className="align-bottom flex-grow-1 d-flex justify-content-center align-items-center">
                    <div className="WhyUsPlus">+</div>
                    <div className="Bortxt">30</div>
                  </div>
                  <div className="whyWeTitle">Experts</div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0">
                <div className="borderTopNonr text-center pb-2 pb-md-2 pb-lg-4 pt-2 pt-md-2 pt-lg-4">
                  <div className="align-bottom flex-grow-1 d-flex justify-content-center align-items-center">
                    <div className="WhyUsPlus">+</div>
                    <div className="Bortxt">100</div>
                  </div>
                  <div className="whyWeTitle">Projects</div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0">
                <div className="borderTopNonr borderTopMob text-center pb-2 pb-md-2 pb-lg-4 pt-2 pt-md-2 pt-lg-4">
                  <div className="align-bottom flex-grow-1 d-flex justify-content-center align-items-center">
                    <div className="WhyUsPlus">+</div>
                    <div className="Bortxt">05</div>
                  </div>
                  <div className="whyWeTitle">Years in business</div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0">
                <div className="borderTopNonr borderTopMob text-center pb-2 pb-md-2 pb-lg-4 pt-2 pt-md-2 pt-lg-4">
                  <div className="align-bottom flex-grow-1 d-flex justify-content-center align-items-center">
                    <div className="WhyUsPlus">+</div>
                    <div className="Bortxt">25</div>
                  </div>
                  <div className="whyWeTitle">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuildYourTeam />
    </>
  );
}
