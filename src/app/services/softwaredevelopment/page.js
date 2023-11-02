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
const WhyWe = dynamic(() => import("@/components/whywe"), {
  ssr: false,
});
import Link from "next/link";

export default function SoftwareDevelopment() {
  const softwareDevelopmentdata = [
    {
      id: 1,
      mainHeading: "Custom Software Development",
      heading: "",
      mainPara:
        "Our team of experienced developers can create customized software solutions tailored to your unique business requirements. We collaborate closely with you to understand your goals and develop software that addresses your specific needs. Whether it's a web application, mobile app, or desktop software, we can build a solution from scratch or enhance an existing one.",
    },
    {
      id: 2,
      mainHeading: "Application Integration",
      heading: "",
      mainPara:
        "We specialize in integrating different software applications to streamline your business processes and improve efficiency. We can connect various systems, databases, and APIs, ensuring seamless data flow and communication between different software components. By integrating your software ecosystem, we help you eliminate data gaps, enhance collaboration, and optimize workflows.",
    },
    {
      id: 3,
      mainHeading: "Software Testing",
      heading: "",
      mainPara:
        "We provide comprehensive software testing and quality assurance services to ensure that your applications are robust, reliable, and error-free. Our dedicated QA team conducts thorough testing, including functional testing, performance testing, security testing, and user acceptance testing. By identifying and resolving any issues early on, we ensure that your software functions smoothly and meets high-quality standards.",
    },
  ];

  const handleModalClick = (id) => {
    let findElement = softwareDevelopmentdata.find((item) => item.id == id);

    let label = document.getElementById("MobileConsultingSolutionsLabel");
    let mobileConsultingHeading = document.getElementById(
      "mobileConsultingsolutionsHeading2"
    );
    let mobileConsultingPara = document.getElementById(
      "mobileConsultingSolutionsParagraph"
    );

    label.innerText = findElement.mainHeading;
    mobileConsultingHeading.innerText = findElement.heading;
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
                    <span className="txtCom d-block">Software</span>
                    <span className="buildTxt d-block"> DEVELOPMENT</span>
                  </div>
                  <div className="mt-3 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/softwareDev.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    At Atrule, we offer top-notch software development services
                    to help businesses achieve their digital goals. We believe
                    in an agile development approach and collaborate closely
                    with our clients to understand their needs and provide
                    regular updates throughout the development process. Our
                    skilled team of developers specializes in creating custom
                    software solutions tailored to your unique requirements.
                  </p>
                  <p>
                    From web and mobile applications to enterprise software, we
                    utilize the latest technologies to deliver robust and
                    scalable solutions. With our focus on user experience and
                    end result, we ensure that our software meets the highest
                    standards of quality and your business requirements. We have
                    expertise across various industries, allowing us to deliver
                    innovative and tailored software solutions that drive
                    business growth.
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

      <section className="whatweoffer servicesWhatweOffer">
        <div className="container">
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
              <div className="row appOfferDetail">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <div className="text-center mt-2 mt-md-2 mt-lg-4">
                    <div className="icon mb-3 mb-md-3 mb-lg-3">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/dev_icon.png"
                        alt=""
                      />
                    </div>
                    <h2 className="title">Developers of your choice</h2>
                    <p className="pargar px-2 px-md-5 px-lg-5">
                      We have Developers of your choice. We are confident that
                      we can deliver the highest quality work.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <div className="text-center mt-2 mt-md-2 mt-lg-4">
                    <div className="icon mb-3 mb-md-3 mb-lg-3">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/247.png"
                        alt=""
                      />
                    </div>
                    <h2 className="title">We are available 24/7</h2>
                    <p className="pargar px-2 px-md-5 px-lg-5">
                      We have Developers of your choice. We are confident that
                      we can deliver the highest quality work.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <div className="text-center mt-2 mt-md-2 mt-lg-4">
                    <div className="icon mb-3 mb-md-3 mb-lg-3">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/experience.png"
                        alt=""
                      />
                    </div>
                    <h2 className="title">5+ Years of Experience</h2>
                    <p className="pargar px-2 px-md-5 px-lg-5">
                      We have Developers of your choice. We are confident that
                      we can deliver the highest quality work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whatweoffer wtWeofferMobileAppServices">
        <div className="container">
          <div className="text-center innerTitleNew">
            <div className="row">
              <h2>Software Development Services</h2>
              <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <p>
                  We offer the following services to our clients seeking
                  software development services:
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
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/desktopdevelopmenticon16.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt">
                      Custom Software Development
                    </h5>
                    <p className="card-text">
                      Our team of experienced developers can create customized
                      software solutions tailored to your unique business
                      requirements. We collaborate closely with you to
                      understand your goals and develop software that addresses
                      your specific needs. Whether it's a web application,
                      mobile app, or desktop software, we can build a solution
                      from scratch or enhance an existing one.
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
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/webdevelopmenticon17.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt lineHeight">
                      Application Integration
                    </h5>
                    <p className="card-text">
                      We specialize in integrating different software
                      applications to streamline your business processes and
                      improve efficiency. We can connect various systems,
                      databases, and APIs, ensuring seamless data flow and
                      communication between different software components. By
                      integrating your software ecosystem, we help you eliminate
                      data gaps, enhance collaboration, and optimize workflows.
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
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/UIUXDesignicon18.png"
                    alt="..."
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="offerMobileAppSertxt lineHeight">
                      Software Testing
                    </h5>
                    <p className="card-text">
                      We provide comprehensive software testing and quality
                      assurance services to ensure that your applications are
                      robust, reliable, and error-free. Our dedicated QA team
                      conducts thorough testing, including functional testing,
                      performance testing, security testing, and user acceptance
                      testing. By identifying and resolving any issues early on,
                      we ensure that your software functions smoothly and meets
                      high-quality standards.
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
      <SendUs />
      <BuildYourTeam />
      <LearnMoreModal />
    </>
  );
}
