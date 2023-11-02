"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
const SlickSlider = dynamic(() => import("../../components/SlickSlider"), {
  ssr: false,
});
const BuildYourTeam = dynamic(() => import("@/components/buildyourteam"), {
  ssr: false,
});

export default function About() {
  const clientExperience = [
    {
      image: "/assets/images/clientReivews/1.png",
      clientReview: "Great Experience!",
      completeReview: `Atrule has been great to work with. They are skilled in many areas and make a very big impact on the team. They led my team of developers, and I could not be happier with the results. They take ownership of the work and produce great results. Very reliable and highly recommended.`,
      clientNameData: `Seeking remote C# Backend Developer`,
    },
    {
      image: "/assets/images/clientReivews/2.png",
      clientReview: "Very Satisfied!",
      completeReview: `Another job well done. Thanks for the excellent results Atrule.`,
      clientNameData: `Looking for full stack .NET developer`,
    },
    {
      image: "/assets/images/clientReivews/3.png",
      clientReview: "Timely and Great Service",
      completeReview: `Great worker and fast turnaround. Thanks again, Atrule.`,
      clientNameData: `Web Forms Data Grid`,
    },
    {
      image: "/assets/images/clientReivews/4.png",
      clientReview: "Really good experience!!",
      completeReview: `Great worker and fast turn around. Thanks again.`,
      clientNameData: `Set up notifications and deep links in flutter`,
    },
    {
      image: "/assets/images/clientReivews/5.png",
      clientReview: "Satisfied with the Results",
      completeReview: `If I could give Atrule 6 stars, I would. Our organization is absolutely blessed to have found him.
      Despite the great time difference between us, they were always available to discuss anything related to our project. Their knowledge of software development is outstanding. Our project was written in C#, and they were able to deliver on every level. Atrule Delivers RESULTS!
      `,
      clientNameData: `Looking for capable C# developer`,
    },
    {
      image: "/assets/images/clientReivews/6.png",
      clientReview: "Great Collaborators",
      completeReview: `Atrule is a great collaborator, taking on challenging work and delivering results. They were dedicated to resolving issues and persisted until they found solutions. I would definitely hire again.`,
      clientNameData: `ASP.NET 4.5 MVC Web API and Web Portal`,
    },
    {
      image: "/assets/images/clientReivews/7.png",
      clientReview: "Satisfactory and Timely Services",
      completeReview: `Atrule is a great collaborator, definitely hiring again.`,
      clientNameData: `Angular JS with great UI skills plus ASP.NET MVC, Entity Framework
      `,
    },
    {
      image: "/assets/images/clientReivews/8.png",
      clientReview: "Great Experience!",
      completeReview: `Really good experience and fun working with Atrule.`,
      clientNameData: `Set up notifications and deep links in flutter`,
    },
    {
      image: "/assets/images/clientReivews/9.png",
      clientReview: "Excellent Service, Hiring Again!",
      completeReview: `Very satisfied. Do not hesitate to hire Atrule. You will be very happy with the results.`,
      clientNameData: `Integrate WinRest Restaurant Management software to Clover`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    className: "about-us-slider-section",
  };

  return (
    <>
      <section className="innerTop">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row inneraboutdetail">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="topInner">
                  <div className="howworkTxt">
                    <span className="txtCom">
                      OUR VISION IS TO <br />
                      DIGITALIZE
                    </span>
                    <span className="buildTxt"> BUSINESS</span>
                  </div>
                  <div className="mt-0 mt-md-3 mt-lg-3 aboutleftImg">
                    <Image
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/abouttopleft.png"
                      className="img-fluid"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <h2>About Us</h2>
                  <p>
                    Atrule is an ambitious software house dedicated to crafting
                    innovative technology solutions for businesses. With a
                    diverse array of services, including custom software
                    development, mobile app development, UI/UX design, and more,
                    we empower our clients to thrive in the digital era. Our
                    passionate team of experts takes a client-centric approach,
                    tailoring solutions to meet unique objectives and
                    consistently delivering excellence.
                  </p>
                  <p>
                    With a focus on innovation and unparalleled commitment to
                    our clients' success, we invite you to join us on a
                    transformative journey into the world of cutting-edge
                    technology.
                  </p>
                  {/* <p className="mb-0">
                    We provide a wide range of services including:
                  </p>
                  <ul className="innerPageUL">
                    <li>eCommerce Store Builder</li>
                    <li>Mobile App Development</li>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Custom Software Development</li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marqu">
        <div className="position-relative">
          <marquee
            className="marquee marquee1"
            BEHAVIOR="alternate"
            scrollamount="3"
          >
            <span className="solidTxt">Development</span>
            <span className="buildTxt">Build Team </span>
            <span className="solidTxt">Flutter</span>
            <span className="buildTxt">APP</span>
            <span className="solidTxt">Development</span>
            <span className="buildTxt">Build Team </span>
            <span className="solidTxt">Flutter</span>
            <span className="buildTxt">APP</span>
            <span className="solidTxt">Development</span>
            <span className="buildTxt">Build Team </span>
            <span className="solidTxt">Flutter</span>
            <span className="buildTxt">APP</span>
            <span className="solidTxt">Development</span>
            <span className="buildTxt">Build Team </span>
            <span className="solidTxt">Flutter</span>
            <span className="buildTxt">APP</span>
            <span className="solidTxt">Development</span>
            <span className="buildTxt">Build Team </span>
            <span className="solidTxt">Flutter</span>
            <span className="buildTxt">APP</span>
            <span className="solidTxt">Development</span>
            <span className="buildTxt">Build Team </span>
            <span className="solidTxt">Flutter</span>
            <span className="buildTxt">APP</span>
          </marquee>
          <marquee
            className="marquee marquee2"
            BEHAVIOR="alternate"
            scrollamount="3"
            direction="right"
          >
            <span className="solidTxt">Design</span>
            <span className="buildTxt">Hire</span>
            <span className="solidTxt">Web Site</span>
            <span className="buildTxt">Talent</span>
            <span className="solidTxt">UI/UX Design</span>
            <span className="solidTxt">Design</span>
            <span className="buildTxt">Hire</span>
            <span className="solidTxt">Web Site</span>
            <span className="buildTxt">Talent</span>
            <span className="solidTxt">Design</span>
            <span className="buildTxt">Hire</span>
            <span className="solidTxt">Web Site</span>
            <span className="buildTxt">Talent</span>
            <span className="solidTxt">UI/UX Design</span>
            <span className="buildTxt">Hire</span>
            <span className="solidTxt">Web Site</span>
            <span className="buildTxt">Talent</span>
            <span className="solidTxt">UI/UX Design</span>
          </marquee>
          <marquee
            className="marquee marquee1"
            BEHAVIOR="alternate"
            scrollamount="3"
          >
            <span className="solidTxt">eCommerce</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
            <span className="solidTxt">eCommerce</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
            <span className="buildTxt">Store builder</span>
            <span className="solidTxt">Mobile Apps</span>
          </marquee>
        </div>
      </section>
      <section className="visionMission">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5 mt-2 mt-md-3 pt-2 pt-md-3 mb-2 mb-md-3 pb-2 pb-md-3">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center">
                <div className="vision align-middle">
                  <h2>Mission Statement</h2>
                  <p>
                    Our mission is to deliver innovative and cutting-edge
                    software solutions that empower businesses globally. We
                    strive to be at the forefront of the IT industry by
                    leveraging our expertise in diverse tech stacks and our
                    commitment to exceptional service. Through close
                    collaboration with our clients, we aim to surpass their
                    expectations and contribute to their success by providing
                    tailored software solutions that drive their growth and
                    propel them to new heights.
                  </p>
                  <h2>Vision Statement</h2>
                  <p>
                    At Atrule, our vision is to be the leading software company
                    and the preferred choice for IT solutions worldwide. We are
                    dedicated to providing our clients with the finest software
                    solutions possible. We believe that our client's success is
                    our success, and therefore, we work tirelessly to help them
                    achieve their business goals.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="aboutMission">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/VisionMissionImg.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whatweoffer clientsSection">
        <div className="container">
          <div className="row">
            <div className="text-center innerTitleNew">
              <div className="row">
                <h2>What Our Clients Say About Us</h2>
                <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                  <p>
                    Our success is determined by how satisfied our customers are
                    with our service. These reviews say a lot about the stuff we
                    do.
                  </p>
                </div>
                <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
              </div>
            </div>
            <div className="innerSlider clientInnerSlider">
              <div className="clientSection slider">
                <SlickSlider
                  images={clientExperience.map((item) => (
                    <div className="slide">
                      <div className="clientbox">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                            <div className="clientimg">
                              <img
                                src={item.image}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                            <div className="client-txt">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/quoteIcon.png"
                                alt=""
                                className="quoteIcon img-fluid"
                              />
                              <h2>{item.clientReview}</h2>
                              <p>{item.completeReview}</p>
                              <div className="star d-flex">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png"
                                  alt=""
                                />
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png"
                                  alt=""
                                />
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png"
                                  alt=""
                                />
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png"
                                  alt=""
                                />
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png"
                                  alt=""
                                />
                              </div>
                              <div className="clientName">
                                <span className="C_name">
                                  {item.clientNameData}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  settings={settings}
                />
                {/* <div className="slide">
                  <div className="clientbox">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                        <div className="clientimg">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/Group439.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                        <div className="client-txt">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/quoteIcon.png"
                            alt=""
                            className="quoteIcon img-fluid"
                          />
                          <h2>Very satisfied!!</h2>
                          <p>
                            Do not hesitate to hire. You will be very happy with
                            the results. They takes ownership of his work and
                            produces great results. Very reliable and highly
                            recommended.
                          </p>
                          <div className="star d-flex">
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                          </div>
                          <div className="clientName">
                            <span className="C_name">
                              Integrate WinRest Restaurant Management software
                              to Clove
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="clientbox">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                        <div className="clientimg">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/Group3647.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                        <div className="client-txt">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/quoteIcon.png"
                            alt=""
                            className="quoteIcon img-fluid"
                          />
                          <h2>Great Collaborator!!</h2>
                          <p>
                            Atrule was a great collaborator, taking on
                            challenging work and delivering results. They were
                            dedicated to resolving issues and persisted until
                            finding solutions. I would definitely hire again.
                          </p>
                          <div className="star d-flex">
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                          </div>
                          <div className="clientName">
                            <span className="C_name">
                              ASP.NET 4.5 MVC Web API and Web Portal
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="clientbox">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                        <div className="clientimg">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/Group3648.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                        <div className="client-txt">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/quoteIcon.png"
                            alt=""
                            className="quoteIcon img-fluid"
                          />
                          <h2>6 Stars!!</h2>
                          <p>
                            If I could give Atrule 6 stars, I would. Our
                            organization is absolutely blessed to have found
                            him. Despite the great time difference between us,
                            they always makes themself available to discuss
                            anything related to our project. Their knowledge of
                            software development is outstanding.
                          </p>
                          <div className="star d-flex">
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                          </div>
                          <div className="clientName">
                            <span className="C_name">
                              Software Development in C#
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="clientbox">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                        <div className="clientimg">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/Group3649.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                        <div className="client-txt">
                          <img
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/quoteIcon.png"
                            alt=""
                            className="quoteIcon img-fluid"
                          />
                          <h2>Really good experience!!</h2>
                          <p>
                            Great worker and fast turn around. Thanks again.
                          </p>
                          <div className="star d-flex">
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                            <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/star.png" alt="" />
                          </div>
                          <div className="clientName">
                            <span className="C_name">
                              Set up notifications and deep links in flutter
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuildYourTeam />
    </>
  );
}
