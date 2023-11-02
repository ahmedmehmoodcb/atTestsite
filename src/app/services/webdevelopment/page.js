"use client";
import dynamic from "next/dynamic";
const BuildYourTeam = dynamic(() => import("@/components/buildyourteam"), {
  ssr: false,
});
const LearnMoreModal = dynamic(() => import("@/components/learnmoremodal"), {
  ssr: false,
});
const SendUs = dynamic(() => import("@/components/sendus"), {
  ssr: false,
});
const WhatWeOffer = dynamic(() => import("@/components/whatweoffer"), {
  ssr: false,
});
const WhyWe = dynamic(() => import("@/components/whywe"), {
  ssr: false,
});
import Link from "next/link";

export default function WebDevelopment() {
  const webdevelopmentData = [
    {
      id: 1,
      mainHeading: "Front End Development",
      mainPara:
        "Atrule is dedicated to achieving customer success by building sustainable digital assets that run smoothly with functional and visual consistency. Our hand-picked developers are equipped with cutting-edge front-end technologies that ensure seamless user experiences and deliver exceptional results.",
    },
    {
      id: 2,
      mainHeading: "Back End Development",
      mainPara:
        "Atrule is committed to driving customer success by constructing robust and scalable digital infrastructures that operate flawlessly with efficient data handling and powerful functionality. Our expert back-end developers are equipped with state-of-the-art technologies to ensure secure data management, seamless integration, and optimal performance, enabling your digital assets to thrive with reliability and high-performance capabilities.",
    },
    {
      id: 3,
      mainHeading: "Full Stack Development",
      mainPara:
        "Atrule is specialized in full-stack development, offering end-to-end solutions that encompass both front-end and back-end development. Our team of skilled professionals excels at leveraging cutting-edge technologies to create comprehensive and seamless digital experiences. From visually stunning user interfaces to robust server-side architecture, we have the expertise to deliver comprehensive solutions that meet your unique business needs and drive exceptional results.",
    },
  ];

  const handleModalClick = (id) => {
    let findElement = webdevelopmentData.find((item) => item.id == id);

    let label = document.getElementById("MobileConsultingSolutionsLabel");
    let mobileConsultingPara = document.getElementById(
      "mobileConsultingSolutionsParagraph"
    );

    label.innerText = findElement.mainHeading;
    mobileConsultingPara.innerText = findElement.mainPara;

    let findElementAnchor = document.getElementById("openLeanMoreModalButton");
    findElementAnchor.click();
  };

  return (
    <>
      <section className="innerTop topMobileApp">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="topInner">
                  <div className="howworkTxt">
                    <span className="txtCom d-block">WEB </span>
                    <span className="buildTxt d-block"> DEVELOPMENT</span>
                  </div>
                  <div className="mt-3 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/webDev-Page.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    At Atrule, we specialize in delivering high-quality Web
                    Development Services that take your business to success in
                    the digital world. Our team of skilled web developers
                    combines technical expertise with creativity to create
                    visually stunning and user-friendly websites. From
                    responsive design to seamless navigation, we ensure that
                    your website looks and functions flawlessly across all
                    devices.
                  </p>
                  <p>
                    We prioritize collaboration and communication throughout the
                    development process, working closely with you to understand
                    your goals and requirements. With attention to user
                    experience, we design intuitive interfaces that captivate
                    visitors and drive conversions. Partner with us to transform
                    your ideas into a fascinating web presence that boosts your
                    business.
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
      <WhatWeOffer />
      <section className="whatweoffer wtWeofferMobileAppServices webdevelopmentPage">
        <div className="container">
          <div className="text-center innerTitleNew">
            <div className="row">
              <h2>Web Development Services</h2>
              <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <p>
                  We offer the following services to our clients seeking web
                  development services:
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
            </div>
          </div>
          <div className="innerSlider row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0">
              <div className="cardNew h-100">
                <div className="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/front-end-developer.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Front End Development
                    </h5>
                    <p className="card-text">
                      Atrule is dedicated to achieving customer success by
                      building sustainable digital assets that run smoothly with
                      functional and visual consistency. Our hand-picked
                      developers are equipped with cutting-edge front-end
                      technologies that ensure seamless user experiences and
                      deliver exceptional results.
                    </p>
                    <a
                      href="#"
                      type="button"
                      className="leftArrow"
                      // data-bs-toggle="modal"
                      // data-bs-target="#MobileConsultingSolutions"
                      onClick={(e) => {
                        e.preventDefault();
                        handleModalClick(1);
                      }}
                    >
                      Learn More{" "}
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0">
              <div className="cardNew h-100">
                <div className="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/backend_Developer.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Back End Development
                    </h5>
                    <p className="card-text">
                      Atrule is committed to driving customer success by
                      constructing robust and scalable digital infrastructures
                      that operate flawlessly with efficient data handling and
                      powerful functionality. Our expert back-end developers are
                      equipped with state-of-the-art technologies to ensure
                      secure data management, seamless integration, and optimal
                      performance, enabling your digital assets to thrive with
                      reliability and high-performance capabilities.
                    </p>
                    <a
                      href="#"
                      type="button"
                      className="leftArrow"
                      // data-bs-toggle="modal"
                      // data-bs-target="#MobileConsultingSolutions"
                      onClick={(e) => {
                        e.preventDefault();
                        handleModalClick(2);
                      }}
                    >
                      Learn More{" "}
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0">
              <div className="cardNew h-100">
                <div className="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/full_stack_development.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Full Stack Development
                    </h5>
                    <p className="card-text">
                      Atrule is specialized in full-stack development, offering
                      end-to-end solutions that encompass both front-end and
                      back-end development. Our team of skilled professionals
                      excels at leveraging cutting-edge technologies to create
                      comprehensive and seamless digital experiences. From
                      visually stunning user interfaces to robust server-side
                      architecture, we have the expertise to deliver
                      comprehensive solutions that meet your unique business
                      needs and drive exceptional results.
                    </p>
                    <a
                      href="#"
                      type="button"
                      className="leftArrow"
                      // data-bs-toggle="modal"
                      // data-bs-target="#MobileConsultingSolutions"
                      onClick={(e) => {
                        e.preventDefault();
                        handleModalClick(3);
                      }}
                    >
                      Learn More{" "}
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/leftArrow.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyWe />
      <section className="d-none DesignProcess innerSection mt-3 mt-md-5 mt-lg-5 mb-3 mb-md-3 mb-lg-3 pt-2 pt-md-5 pt-lg-5 pb-2 pb-md-5 pb-lg-5">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="text-center row mb-0 mb-md-0 mb-lg-0 pb-0 pb-md-0 pb-lg-0">
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="whyTxt">Design Process</div>
                <p className="mainPar">
                  We’re passionate about collaborating with innovative companies
                  of all sizes, across various industries.
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="text-center desktop-view">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/designProcess.png"
                    className="img-fluid mt-3 mt-md-3 mt-lg-3"
                    alt=""
                  />
                </div>
                <div className="text-center tabletView">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/designProcesstab-mob.png"
                    className="img-fluid mt-3 mt-md-3 mt-lg-3"
                    alt=""
                  />
                </div>
                <div className="text-center mobile-view">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/designProcesstab-mob.png"
                    className="img-fluid mt-3 mt-md-3 mt-lg-3"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SendUs />
      <BuildYourTeam />
      <LearnMoreModal />
    </>
  );
}
