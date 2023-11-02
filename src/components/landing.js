import Image from "next/image";
import Link from "next/link";
const LandingPage = () => {
  return (
    <>
      <div className="mainGg">
        <div className="px-0 px-md-2 px-lg-3 px-xl-5 mx-0 mx-md-2 mx-lg-3 mx-xl-5 pb-3 pb-md-0 pb-lg-5">
          <section className="slider mt-3 mt-md-3 mt-lg-3 pt-3 pt-md-3 pt-lg-3">
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
                      We help build and manage a team of world-className
                      developers & designers to bring your vision to life
                    </p>
                    <div className="desktop1">
                      <div className="BuildTab">
                        <div className="buildTeam">
                          <div className="byt">
                            <div className="bytImages">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon.png"
                                alt=""
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
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-1.png"
                                alt=""
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
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-2.png"
                                alt=""
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
                          <Link
                            href="/hire"
                            target="_blank"
                            className="hireBtn"
                          >
                            Hire Now
                          </Link>
                        </div>
                      </div>
                      <div className="sideImg">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/NSlider.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="sliderImages text-end mt-5 mt-md-4 mt-lg-4 pt-0 pt-md-4 pt-lg-4">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/slider.png"
                      className="img-fluid webRes"
                      alt=""
                    />
                    <div className="mobileRes">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/NSlider.png"
                        className="img-fluid"
                        alt=""
                      />
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
                    Virtual Teams for <span>60+</span>
                  </h2>
                  <h2>Technologies.</h2>
                  <p>
                    We at Atrule Technologies provide excellent Software
                    Development and IT services that help you build an online
                    presence, manage and scale your businesses.
                  </p>
                  <div className="ourTechStack">Our Tech Stacks</div>
                  <div className="sliderLogo mt-4">
                    <div className="customer-logos slider">
                      <div className="slide">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-11.png"
                          alt="slide icon"
                        />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-6.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-3.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-4.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-5.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-6.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-7.png" />
                      </div>
                    </div>
                  </div>
                  <div className="sliderLogo1">
                    <div className="customer-logos2 slider">
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-8.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-9.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-10.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-11.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-4.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-2.png" />
                      </div>
                      <div className="slide">
                        <img src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/icon-s-3.png" />
                      </div>
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
                <img
                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/Group3609.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="sliderImages text-center mobile-view">
                <img
                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/Group3609mobImg.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clientLogo">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="customer-logos3 slider">
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-11.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-12.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-9.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-8.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-7.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-6.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-10.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-5.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-4.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-15.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-16.svg"
                  alt="..."
                />
              </div>
              <div className="slide">
                <img
                  src="https://atrule.com/wp-content/uploads/2023/07/Group-17.svg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whyWe OurServices mt-3 mt-md-5 mt-lg-5 pt-3 pt-md-5 pt-lg-5">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="text-center row mb-0 mb-md-1 mb-lg-3 pb-0 pb-md-1 pb-lg-3">
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="whyTxt">Our Services</div>
                <p className="mainPar">
                  We’re passionate about collaborating with innovative companies
                  of all sizes, across various industries.
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
            </div>
            <div className="desktop1 navTabRes" id="main-services-tabs">
              <ul
                className="nav nav-tabs servicesTxt"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item active" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    App Development
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="webdevelopment-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#webdevelopment-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="webdevelopment-tab-pane"
                    aria-selected="false"
                  >
                    Web Development
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    eCommerce
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="uiDesign-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#uiDesign-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="uiDesign-tab-pane"
                    aria-selected="false"
                  >
                    Web Designing (UI/UX)
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="CustomSoftware-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#CustomSoftware-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="CustomSoftware-tab-pane"
                    aria-selected="false"
                  >
                    Software Development
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-grow-1 justify-content-start align-items-center">
                      <div className="serviceConDetail">
                        <h2 className="serviceh2">
                          <span>App Development</span>
                        </h2>
                        <p className="servicePara mt-4 mt-md-4 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          We are a team of professionals with proven experience!
                        </p>
                        <ul className="mt-4">
                          <li>Top notch mobile app development team</li>
                          <li>Flutter, Native & ios</li>
                          <li>Cost effective</li>
                          <li>SEO friendly</li>
                          <li>Custom development</li>
                          <li>UI/UX Design</li>
                        </ul>
                        <div className="buttonVirTeam mt-1">
                          <span className="hireBtn">
                            <Link href="/explore" className="hireBtn explone">
                              EXPLORE
                            </Link>
                          </span>
                          <span className="hireBtn newBntRight">
                            <Link
                              href="/hire"
                              target="_blank"
                              className="hireBtn"
                            >
                              HIRE TEAM
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative">
                      <div
                        className="detailScrol scrollbar d-flex align-items-center"
                        id="style-15"
                      >
                        <div className="counter">
                          <div className="polygonSpace"></div>
                          <div className="number">1</div>
                        </div>
                        <div className="force-overflow">
                          <div className="bgWhiteNew">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/2serviceapp.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center rigthSide">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Motorway Conditions App</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="#"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="0"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1serviceapp.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center rigthSide">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Food Calories App</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="#"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="1"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-grow-1 justify-content-start align-items-center">
                      <div className="serviceConDetail">
                        <h2 className="serviceh2">
                          <span>eCommerce</span>
                        </h2>
                        <p className="servicePara mt-2 mt-md-3 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          We are a team of professionals with proven experience!
                        </p>
                        <ul className="mt-4">
                          <li>Top notch mobile app development team</li>
                          <li>Flutter, Native & ios</li>
                          <li>Cost effective</li>
                          <li>SEO friendly</li>
                          <li>Custom development</li>
                          <li>UI/UX Design</li>
                        </ul>
                        <div className="buttonVirTeam mt-1">
                          <span className="hireBtn">
                            <Link href="/explore" className="hireBtn explone">
                              EXPLORE
                            </Link>
                          </span>
                          <span className="hireBtn newBntRight">
                            <a href="/hire" target="_blank" className="hireBtn">
                              HIRE TEAM
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative">
                      <div
                        className="detailScrol scrollbar d-flex align-items-center"
                        id="style-15"
                      >
                        <div className="counter counterNum">
                          <div className="polygonSpace"></div>
                          <div className="number">3</div>
                        </div>
                        <div className="force-overflow">
                          <div className="bgWhiteNew">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1service-ecommerce.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Fashion Point</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="#"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="2"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/2service-ecommerce.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Pizza Street</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="#"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="3"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="webdevelopment-tab-pane"
                  role="tabpanel"
                  aria-labelledby="webdevelopment-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-grow-1 justify-content-start align-items-center">
                      <div className="serviceConDetail">
                        <h2 className="serviceh2">
                          <span>Web Development</span>
                        </h2>
                        <p className="servicePara mt-2 mt-md-3 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          We are a team of professionals with proven experience!
                        </p>
                        <ul className="mt-4">
                          <li>Top notch mobile app development team</li>
                          <li>Flutter, Native & ios</li>
                          <li>Cost effective</li>
                          <li>SEO friendly</li>
                          <li>Custom development</li>
                          <li>UI/UX Design</li>
                        </ul>
                        <div className="buttonVirTeam mt-1">
                          <span className="hireBtn">
                            <Link href="/explore" className="hireBtn explone">
                              EXPLORE
                            </Link>
                          </span>
                          <span className="hireBtn newBntRight">
                            <Link
                              href="/hire"
                              target="_blank"
                              className="hireBtn"
                            >
                              HIRE TEAM
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative">
                      <div
                        className="detailScrol scrollbar d-flex align-items-center"
                        id="style-15"
                      >
                        <div className="counter counterNum">
                          <div className="polygonSpace"></div>
                          <div className="number">2</div>
                        </div>
                        <div className="force-overflow">
                          <div className="bgWhiteNew">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/3service-website.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Motorway Conditions</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="#"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="4"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/01currencyrates.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Currency Rates</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="#"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="5"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="CustomSoftware-tab-pane"
                  role="tabpanel"
                  aria-labelledby="CustomSoftware-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-grow-1 justify-content-start align-items-center">
                      <div className="serviceConDetail">
                        <h2 className="serviceh2">
                          <span>Software Development</span>
                        </h2>
                        <p className="servicePara mt-2 mt-md-3 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          We are a team of professionals with proven experience!
                        </p>
                        <ul className="mt-4">
                          <li>Top notch mobile app development team</li>
                          <li>Flutter, Native & ios</li>
                          <li>Cost effective</li>
                          <li>SEO friendly</li>
                          <li>Custom development</li>
                          <li>UI/UX Design</li>
                        </ul>
                        <div className="buttonVirTeam mt-1">
                          <span className="hireBtn">
                            <Link href="/explore" className="hireBtn explone">
                              EXPLORE
                            </Link>
                          </span>
                          <span className="hireBtn newBntRight">
                            <Link
                              href="/hire"
                              target="_blank"
                              className="hireBtn"
                            >
                              HIRE TEAM
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative">
                      <div
                        className="detailScrol scrollbar d-flex align-items-center"
                        id="style-15"
                      >
                        <div className="counter counterNum counterNum4">
                          <div className="polygonSpace"></div>
                          <div className="number">5</div>
                        </div>
                        <div className="force-overflow">
                          <div className="bgWhiteNew">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1servicecustom.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>ATCOMMERCE</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="https://atcommerce.pk/"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="6"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/2servicecustom.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>ATPOS</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="https://www.youtube.com/watch?v=gLW4G4t0BG8"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="7"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="uiDesign-tab-pane"
                  role="tabpanel"
                  aria-labelledby="uiDesign-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-grow-1 justify-content-start align-items-center">
                      <div className="serviceConDetail">
                        <h2 className="serviceh2">
                          <span>Web Designing (UI,UX)</span>
                        </h2>
                        <p className="servicePara mt-2 mt-md-3 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          We are a team of professionals with proven experience!
                        </p>
                        <ul className="mt-4">
                          <li>Top notch mobile app development team</li>
                          <li>Flutter, Native & ios</li>
                          <li>Cost effective</li>
                          <li>SEO friendly</li>
                          <li>Custom development</li>
                          <li>UI/UX Design</li>
                        </ul>
                        <div className="buttonVirTeam mt-1">
                          <span className="hireBtn">
                            <Link href="/explore" className="hireBtn explone">
                              EXPLORE
                            </Link>
                          </span>
                          <span className="hireBtn newBntRight">
                            <Link
                              href="/hire"
                              target="_blank"
                              className="hireBtn"
                            >
                              HIRE TEAM
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative">
                      <div
                        className="detailScrol scrollbar d-flex align-items-center"
                        id="style-15"
                      >
                        <div className="counter counterNum counterNum4">
                          <div className="polygonSpace"></div>
                          <div className="number">4</div>
                        </div>
                        <div className="force-overflow">
                          <div className="bgWhiteNew">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/4service-website.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Landing page UI/UX Design</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="https://play.google.com/store/apps/details?id=com.atrule.calorieapp"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="8"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/01Headeruiux.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>UI/UX Design (App Design)</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="https://play.google.com/store/apps/details?id=com.atrule.pakistanpetrolpricetoday"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="9"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="seoSer-tab-pane"
                  role="tabpanel"
                  aria-labelledby="seoSer-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-grow-1 justify-content-start align-items-center">
                      <div className="serviceConDetail">
                        <h2 className="serviceh2">
                          <span>SEO Services</span>
                        </h2>
                        <p className="servicePara mt-2 mt-md-3 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          We are a team of professionals with proven experience!
                        </p>
                        <ul className="mt-4">
                          <li>Top notch mobile app development team</li>
                          <li>Flutter, Native & ios</li>
                          <li>Cost effective</li>
                          <li>SEO friendly</li>
                          <li>Custom development</li>
                          <li>UI/UX Design</li>
                        </ul>
                        <div className="buttonVirTeam mt-1">
                          <span className="hireBtn">
                            <Link href="/explore" className="hireBtn explone">
                              EXPLORE
                            </Link>
                          </span>
                          <span className="hireBtn newBntRight">
                            <Link
                              href="/hire"
                              target="_blank"
                              className="hireBtn"
                            >
                              HIRE TEAM
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative">
                      <div
                        className="detailScrol scrollbar d-flex align-items-center"
                        id="style-15"
                      >
                        <div className="counter counterNum counterNum4">
                          <div className="polygonSpace"></div>
                          <div className="number">6</div>
                        </div>
                        <div className="force-overflow">
                          <div className="bgWhiteNew">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/01Header-1.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Purple Housing</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="https://purplehousing.com/"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="10"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/01Header.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Digital Marketing</h2>
                                  <span className="hireBtn viewProject">
                                    <a
                                      href="https://redberries.ae/"
                                      target="_blank"
                                      type="button"
                                      className="hireBtn btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                      data-bs-popup="11"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whyWe howItWork pt-5 pt-md-5 pt-lg-5">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="text-center row mb-3 mb-md-3 mb-lg-3 pb-3 pb-md-3 pb-lg-3">
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="whyTxt">How It Works</div>
                <p className="mainPar">
                  We’re passionate about collaborating with innovative companies
                  of all sizes, across various industries.
                </p>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="teamView">
                  <div className="teamImg">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howNum1.png"
                      alt=""
                    />
                  </div>
                  <div className="howNameTxt">Hire Team</div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="teamView">
                  <div className="teamImg">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howNum2.png"
                      alt=""
                    />
                  </div>
                  <div className="howNameTxt howNameTxtMob">
                    Design & Development
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="teamView">
                  <div className="teamImg">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howNum3.png"
                      alt=""
                    />
                  </div>
                  <div className="howNameTxt">Test & Live</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="text-center desktop-view">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howtowork.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="howworkTxt">
                    <span className="buildTxt">READY TO</span>
                    <span className="txtCom">GO LIVE</span>
                  </div>
                </div>
                <div className="text-center tabletView">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howtoworkTablet.png"
                    className="img-fluid"
                    alt=""
                  />

                  <div className="mt-4">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howtoworkMobile2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="howworkTxt">
                    <span className="buildTxt">READY TO</span>
                    <span className="txtCom">GO LIVE</span>
                  </div>
                </div>
                <div className="text-center mobile-view">
                  <img
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howtoworkMobile.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="mt-4">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/howtoworkMobile2.png"
                      alt=""
                      className="img-fluid"
                    />
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
      <section className="buildYourTeam">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="buildYoTe">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 text-center text-md-center text-sm-center text-lg-start">
                  <span className="buildTxt">
                    Build your team <br />
                    with
                  </span>
                  <span className="txtCom">ATRULE!</span>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <div className="hireBtn whiteBgConUs">
                    <a href="contactus.html" className="hireBtn">
                      contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LandingPage;
