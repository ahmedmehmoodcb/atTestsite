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
  
// import LearnMoreModal from "@/components/learnmoremodal";
// import SendUs from "@/components/sendus";
// import WhatWeOffer from "@/components/whatweoffer";
// import WhyWe from "@/components/whywe";
import Link from "next/link";

export default function Ecommerce() {
  const eCommerceModalData = [
    {
      id: 1,
      mainHeading: "Store Design and Development",
      heading: "",
      mainPara:
        "At Atrule, we specialize in creating visually appealing and user-friendly e-commerce stores. Our development team combines cutting-edge technologies with best practices to deliver secure and scalable online stores tailored to your business needs. With seamless navigation, secure payment processing, and responsive design, we ensure a smooth shopping experience for your customers across devices.",
    },
    {
      id: 2,
      mainHeading: "Ecommerce Platform Customization",
      heading: "",
      mainPara:
        "At Atrule, we excel at customizing e-commerce platforms to meet the unique requirements of your business. Our expert team leverages their technical expertise and in-depth knowledge of various e-commerce platforms to tailor the platform to your specific needs. From implementing custom features and functionalities to integrating third-party applications, we ensure that your e-commerce platform is optimized for your business processes.",
    },
    {
      id: 3,
      mainHeading: "Ecommerce Performance Optimization",
      heading: "",
      mainPara:
        "At Atrule, we specialize in optimizing the performance of e-commerce websites to ensure fast loading times, a smooth user experience, and maximum conversion rates. Our experienced team conducts in-depth performance audits to identify setbacks and optimize various aspects, including server configurations, code optimization, caching mechanisms, image compression, and database optimization.",
    },
  ];

  const handleModalClick = (id) => {
    let findElement = eCommerceModalData.find((item) => item.id == id);

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
                    <span className="txtCom d-block">E-COMMERCE </span>
                    <span className="buildTxt d-block"> DEVELOPMENT</span>
                  </div>
                  <div className="mt-3 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/ecommerce-Dev.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    We are experts when it comes to eCommerce development. Our
                    experienced team of developers combines creativity and
                    technical expertise to create customized eCommerce stores
                    that drive sales and enhance the customer experience. We
                    have created an eCommerce platform, Atcommerce, to build
                    secure, scalable, and feature-rich online stores. From
                    seamless navigation to user-friendly interfaces, we ensure
                    that your eCommerce store delivers a seamless and engaging
                    shopping experience.
                  </p>
                  <p>
                    Whether you're starting from scratch or looking to enhance
                    your existing online store, we can help you with everything
                    from design and development to integration and optimization.
                    Our goal is to create a visually stunning and
                    conversion-focused eCommerce store that maximizes your
                    online sales and boosts customer loyalty.
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
      <section className="whatweoffer wtWeofferMobileAppServices ecommercePage">
        <div className="container">
          <div className="text-center innerTitleNew">
            <div className="row">
              <h2>Ecommerce Development Services</h2>
              <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <p>
                  We offer the following services to our clients seeking
                  ecommerce development services:
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
            </div>
          </div>
          <div className="innerSlider row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4  mt-3 mt-md-3 mt-lg-0">
              <div className="cardNew h-100">
                <div className="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/ecom-mobile-responsive-icon10.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Store Design and Development
                    </h5>
                    <p className="card-text">
                      At Atrule, we specialize in creating visually appealing
                      and user-friendly e-commerce stores. Our development team
                      combines cutting-edge technologies with best practices to
                      deliver secure and scalable online stores tailored to your
                      business needs. With seamless navigation, secure payment
                      processing, and responsive design, we ensure a smooth
                      shopping experience for your customers across devices.
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
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/Customization-Opportunities-icon11.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Ecommerce Platform Customization
                    </h5>
                    <p className="card-text">
                      At Atrule, we excel at customizing e-commerce platforms to
                      meet the unique requirements of your business. Our expert
                      team leverages their technical expertise and in-depth
                      knowledge of various e-commerce platforms to tailor the
                      platform to your specific needs. From implementing custom
                      features and functionalities to integrating third-party
                      applications, we ensure that your e-commerce platform is
                      optimized for your business processes.
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
                      Ecommerce Performance Optimization
                    </h5>
                    <p className="card-text">
                      At Atrule, we specialize in optimizing the performance of
                      e-commerce websites to ensure fast loading times, a smooth
                      user experience, and maximum conversion rates. Our
                      experienced team conducts in-depth performance audits to
                      identify setbacks and optimize various aspects, including
                      server configurations, code optimization, caching
                      mechanisms, image compression, and database optimization
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
