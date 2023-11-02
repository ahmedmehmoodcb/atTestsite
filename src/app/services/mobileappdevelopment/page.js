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

export default function MobileAppDevelopment() {
  const mobileAppData = [
    {
      id: 1,
      mainHeading: "Mobile Consulting Solutions",
      mainPara: `Unlock the full potential of your company with our
        exceptional mobile consulting solutions and proven
        methodologies. Our best-in-class expertise is tailored to
        meet your unique needs, empowering you to make a
        significant impact in the ever-evolving mobile landscape.
        From strategic guidance to implementation support, our
        team of seasoned professionals will work closely with you
        to drive innovation, maximize efficiency, and achieve your
        business objectives.`,
    },
    {
      id: 2,
      mainHeading: "Mobile UI | UX & Design",
      mainPara: `We are a full-service mobile solutions company,
        specializing in application development, mobile strategy,
        and mobile UI/UX design. We at Atrule Technologies
        understand the importance of the user experience. We
        strive to build applications that not only look beautiful
        but are also easy to use.`,
    },
    {
      id: 3,
      mainHeading: "Mobile App Development",
      mainPara: `At Atrule, we prioritize our clients, and our dedicated team takes the time to deeply understand your business and target audience, ensuring that the app we develop not only meets your needs but also exceeds your expectations. From idea to execution, we handle every aspect, ensuring that your app looks great and functions seamlessly.`,
    },
  ];

  const handleModalClick = (id) => {
    let findElement = mobileAppData.find((item) => item.id == id);
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
                    <span className="txtCom d-block">MOBILE APP </span>
                    <span className="buildTxt d-block"> DEVELOPMENT</span>
                  </div>
                  <div className="mt-3 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/mobileappdev-Page.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    At Atrule, we prioritize our clients and are committed to
                    providing them with the very best Mobile App Development
                    Services. Our dedicated team takes the time to deeply
                    understand your business and target audience, ensuring that
                    the app we develop not only meets your needs but also
                    exceeds your expectations. We leverage the latest
                    technologies to create stunning, user-centric, innovative,
                    and reliable mobile apps.
                  </p>
                  <p>
                    From idea to execution, we handle every aspect, ensuring
                    that your app looks great and functions seamlessly. Prepare
                    to elevate your business to new heights with our top-notch
                    mobile solutions. Join us on this exciting journey as we
                    transform your app dreams into reality. Empower your
                    business with a bespoke app that stands out in the
                    competitive market, crafted by our skilled team of
                    developers.
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
      <section className="whatweoffer wtWeofferMobileAppServices">
        <div className="container">
          <div className="text-center innerTitleNew">
            <div className="row">
              <h2>Mobile App Services</h2>
              <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <p>
                  We offer the following services to our clients seeking mobile
                  app services:
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
            </div>
          </div>
          <div className="innerSlider row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0 ">
              <div className="cardNew h-100 position-relative">
                <div className="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/chat_duo.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Mobile Consulting Solutions
                    </h5>
                    <p className="card-text">
                      Unlock the full potential of your company with our
                      exceptional mobile consulting solutions and proven
                      methodologies. Our best-in-class expertise is tailored to
                      meet your unique needs, empowering you to make a
                      significant impact in the ever-evolving mobile landscape.
                      From strategic guidance to implementation support, our
                      team of seasoned professionals will work closely with you
                      to drive innovation, maximize efficiency, and achieve your
                      business objectives.
                    </p>
                    <a
                      href="#"
                      type="button"
                      className="leftArrow"
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0 ">
              <div className="cardNew h-100">
                <div className="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/layer_duo.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Mobile UI | UX & Design
                    </h5>
                    <p className="card-text">
                      We are a full-service mobile solutions company,
                      specializing in application development, mobile strategy,
                      and mobile UI/UX design. We at Atrule Technologies
                      understand the importance of the user experience. We
                      strive to build applications that not only look beautiful
                      but are also easy to use.
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0 ">
              <div className="cardNew h-100">
                <div className="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/bar_chart_duo.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Mobile App Development
                    </h5>
                    <p className="card-text">
                      At Atrule, we prioritize our clients, and our dedicated
                      team takes the time to deeply understand your business and
                      target audience, ensuring that the app we develop not only
                      meets your needs but also exceeds your expectations. From
                      idea to execution, we handle every aspect, ensuring that
                      your app looks great and functions seamlessly.
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
