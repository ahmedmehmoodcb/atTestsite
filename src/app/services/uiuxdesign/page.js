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

export default function UiUxDesign() {
  const uiuxdata = [
    {
      id: 1,
      mainHeading: "Mobile UI/UX Design",
      mainPara: `A mobile application needs an aesthetically strong interface in order to be impactful, and that is where Atrule focuses the most. Our pre-vetted designers have a wealth of experience working on mobile designs and are dedicated to creating visually stunning and intuitive user interfaces that captivate users while enhancing the user experience. Through meticulous attention to detail and a deep understanding of user behavior, our designers craft compelling mobile app designs that leave a lasting impression.
        `,
    },
    {
      id: 2,
      mainHeading: "Web UI/UX Design",
      mainPara: `Atrule is committed to creating visually appealing websites with a clean and sleek design. Our goal is to deliver the best user experience to your website visitors, ensuring a professional and engaging presentation. By focusing on user-friendly designs, we help you build a strong and loyal visitor base. Our team goes the extra mile to ensure that your website not only looks great but also functions seamlessly, providing a memorable experience for every user who interacts with it.`,
    },
    {
      id: 3,
      mainHeading: "UI/UX Brand Identity",
      mainPara: `At Atrule, we recognize the significance of branding, and we specialize in creating designs that effectively communicate your brand's value to customers. We understand that people associate brands with logos, colors, fonts, and design patterns, and we carefully select the right elements to align with your brand's identity. By incorporating these elements thoughtfully, we ensure that your brand is memorable and leaves a lasting impression. Our team is dedicated to crafting designs that not only look visually appealing but also effectively convey your brand's message.`,
    },
  ];

  const handleModalClick = (id) => {
    let findElement = uiuxdata.find((item) => item.id == id);

    let label = document.getElementById("MobileConsultingSolutionsLabel");
    let mobileConsultingHeading = document.getElementById(
      "mobileConsultingsolutionsHeading2"
    );
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
                    <span className="txtCom d-block">UI/UX (WEB/MOBILE) </span>
                    <span className="buildTxt d-block"> DESIGN</span>
                  </div>
                  <div className="mt-3 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/uiuxDesign.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    Atrule always has the end user in mind when providing our
                    UI/UX Design Services, creating meaningful experiences for
                    your target audience. We make sure we understand what you
                    want to achieve with your business and what your users
                    prefer, so we can design interfaces that are centered around
                    them and match your brand.
                  </p>
                  <p>
                    Our careful design process and teamwork turn your ideas into
                    interfaces that are easy to use and help users reach their
                    goals smoothly. We test every part of the design to make
                    sure it's user-friendly. Join us on an exciting journey to
                    create a fantastic design that will bring success to your
                    business. Let's work together to create an amazing
                    experience that your users will love.
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
      <section className="DesignProcess innerSection mb-3 mb-md-3 mb-lg-3 pt-2 pt-md-5 pt-lg-5 pb-2 pb-md-5 pb-lg-5">
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
      <section class="whatweoffer wtWeofferMobileAppServices">
        <div class="container">
          <div class="text-center innerTitleNew">
            <div class="row">
              <h2>UI/UX Design Services</h2>
              <div class="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <p>
                  We offer the following services to our clients seeking UI/UX
                  design services:
                </p>
              </div>
              <div class="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
            </div>
          </div>
          <div class="innerSlider row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0">
              <div class="cardNew h-100">
                <div class="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/WebUIUXDesignicon13.png"
                    alt="..."
                    class="mx-auto"
                  />
                  <div class="card-body">
                    <h5 class="offerMobileAppSertxt">Mobile UI/UX Design</h5>
                    <p class="card-text">
                      A mobile application needs an aesthetically strong
                      interface in order to be impactful, and that is where
                      Atrule focuses the most. Our pre-vetted designers have a
                      wealth of experience working on mobile designs and are
                      dedicated to creating visually stunning and intuitive user
                      interfaces that captivate users while enhancing the user
                      experience. Through meticulous attention to detail and a
                      deep understanding of user behavior, our designers craft
                      compelling mobile app designs that leave a lasting
                      impression.
                    </p>
                    <a
                      href="#"
                      type="button"
                      class="leftArrow"
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
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0">
              <div class="cardNew h-100">
                <div class="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/HCIDesignicon14.png"
                    alt="..."
                    class="mx-auto"
                  />
                  <div class="card-body">
                    <h5 class="offerMobileAppSertxt">Web UI/UX Design</h5>
                    <p class="card-text">
                      Atrule is committed to creating visually appealing
                      websites with a clean and sleek design. Our goal is to
                      deliver the best user experience to your website visitors,
                      ensuring a professional and engaging presentation. By
                      focusing on user-friendly designs, we help you build a
                      strong and loyal visitor base. Our team goes the extra
                      mile to ensure that your website not only looks great but
                      also functions seamlessly, providing a memorable
                      experience for every user who interacts with it.
                    </p>
                    <a
                      href="#"
                      type="button"
                      class="leftArrow"
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
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mt-md-3 mt-lg-0">
              <div class="cardNew h-100">
                <div class="card">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/MobileUIUXDesignicon15.png"
                    alt="..."
                    class="mx-auto"
                  />
                  <div class="card-body">
                    <h5 class="offerMobileAppSertxt">UI/UX Brand Identity</h5>
                    <p class="card-text">
                      At Atrule, we recognize the significance of branding, and
                      we specialize in creating designs that effectively
                      communicate your brand's value to customers. We understand
                      that people associate brands with logos, colors, fonts,
                      and design patterns, and we carefully select the right
                      elements to align with your brand's identity. By
                      incorporating these elements thoughtfully, we ensure that
                      your brand is memorable and leaves a lasting impression.
                      Our team is dedicated to crafting designs that not only
                      look visually appealing but also effectively convey your
                      brand's message.
                    </p>
                    <a
                      href="#"
                      type="button"
                      class="leftArrow"
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
