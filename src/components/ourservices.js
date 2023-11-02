"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import ViewProject from "./viewproject";
import ViewProjectModal from "./viewprojectmodal";
import popupData from "../data.json";
import Image from "next/image";

export default function OurServices() {
  let currentTab = 0;
  let tabsInterval;

  const switchTab = () => {
    const tabs = document.querySelectorAll("#myTab .nav-item");
    const tabButton = tabs[currentTab]?.querySelector(".nav-link");
    tabButton?.click();
    currentTab = (currentTab + 1) % tabs.length;
  };

  const startTabsInterval = () => {
    tabsInterval = setInterval(() => {
      switchTab();
    }, 3000);
  };

  const handleMouseEnter = () => {
    clearInterval(tabsInterval);
  };

  const handleMouseLeave = () => {
    startTabsInterval();
  };

  let handleTab = (index) => {
    currentTab = index;
  };

  useEffect(() => {
    startTabsInterval();

    const myTabContainer = document.getElementById("main-services-tabs");
    const myModal = document.getElementById("myModal");
    if (myModal) {
      myModal.addEventListener("mouseenter", handleMouseEnter);
      myModal.addEventListener("mouseleave", handleMouseLeave);
    }

    if (myTabContainer) {
      myTabContainer.addEventListener("mouseenter", handleMouseEnter);
      myTabContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    const tabs = document.querySelectorAll("#myTab .nav-item");
    tabs.forEach((eachTab, index) => {
      eachTab.addEventListener("click", () => handleTab(index));
    });

    return () => {
      clearInterval(tabsInterval);
      if (myTabContainer) {
        myTabContainer.removeEventListener("mouseenter", handleMouseEnter);
        myTabContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (myModal) {
        myModal.addEventListener("mouseenter", handleMouseEnter);
        myModal.addEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll("a[data-bs-popup]");
    buttons.forEach((button) => {
      const popupIndex = button.getAttribute("data-bs-popup");
      button.addEventListener("click", () => {
        const initialPageData = popupData[popupIndex];
        updateModalContent(initialPageData);
      });
    });
  });
  const updateModalContent = (popupData) => {
    const modalTitle = document.getElementById("exampleModalLabel");
    const projectDetailName = document.querySelector(".projectDetailName");
    const Overview = document.querySelector(".Overview");
    const popupPara = document.querySelector(".popupPara");
    const popupPara2 = document.querySelector(".popupPara2");
    const projectFeatures = document.querySelector(".projectFeatures");
    const listUlli = document.querySelector(".listUlli");
    const popupClient = document.querySelector(".popupClient");
    const duration = document.querySelector(".duration");
    const techstacksection = document.getElementById("techstacksection");
    const imagespopup = document.querySelector(".imagespopup");
    const serviceTag = document.getElementById("service_name1");
    const datatestnew = popupData.techstack.map((item) => {
      return `<a href=${item.url} class="btn techstack" onclick="event.preventDefault()">${item.test}</a>`;
    });
    const newvar = datatestnew.join("");
    const downloadBtnnew = document.getElementById("downloadBtn");
    const downloadBtn = popupData.downloadBtn.map((item) => {
      return `<a href=${item.url} class="hireBtn" target="_blank" type="button">${item.btnTxt}</a>`;
    });

    const downloadBtn1 = downloadBtn.join("");

    modalTitle.textContent = popupData.title;
    projectDetailName.textContent = popupData.heading;
    Overview.textContent = popupData.Overview;
    popupPara.textContent = popupData.popupPara;
    popupPara2.textContent = popupData.popupPara2;
    projectFeatures.textContent = popupData.projectFeatures;
    listUlli.innerHTML = popupData.listUlli;
    techstacksection.innerHTML = newvar;
    downloadBtnnew.innerHTML = downloadBtn;

    popupClient.textContent = popupData.popupClient;
    imagespopup.innerHTML = popupData.imagespopup
      .map((item) => {
        return `<div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"><img src=${item.imagesrc} alt="" class="img-fluid"></div>`;
      })
      .join("");
    duration.textContent = popupData.duration;
  };
  return (
    <>
      <section className="whyWe OurServices mt-0 mt-md-0 mt-lg-0 pt-3 pt-md-5 pt-lg-5">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="text-center row mb-0 mb-md-1 mb-lg-3 pb-0 pb-md-1 pb-lg-3">
              <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="whyTxt">Our Services</div>
                <p className="mainPar">
                  Create an agile team of the best global talents from the
                  following industries:
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
                        <p className="servicePara mt-2 mt-md-3 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          Our skilled mobile app developers can help you create
                          innovative and user-friendly apps with the following
                          techs:
                        </p>
                        <ul className="mt-4">
                          <li>Flutter | Android | iOS</li>
                          <li>Dart | Kotlin or Java | Swift or Objective-C</li>
                          <li>Android Studio | Xcode</li>
                          <li>GitHub</li>
                          <li>Slack | Jira</li>
                        </ul>
                        <div className="buttonVirTeam mt-1">
                          <span className="hireBtn">
                            <a href="/explore" className="hireBtn explone">
                              EXPLORE
                            </a>
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
                                <div className="">
                                  <Image
                                    src="/assets/images/2serviceapp.png"
                                    alt=""
                                    className="img-fluid position-static"
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center rigthSide">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Motorway Conditions Today</h2>
                                  <ViewProject index={"18"} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <Image
                                  src="/assets/images/1serviceapp.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center rigthSide">
                                <div className="txtDetail w-100 text-center">
                                  <h2>What to Eat: Food Calories</h2>
                                  <ViewProject index={"13"} />
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
                          Our developers and designers are vetted professionals
                          who create stores according to the market and your
                          business needs. We use the following techs:
                        </p>
                        <ul className="mt-4">
                          <li>Html5 | Css3</li>
                          <li>Javascript | Jquery</li>
                          <li>Bootstrap</li>
                          <li>Asp.Net core MVC </li>
                          <li>Nopcommerce</li>
                          <li>Flutter | Native | iOS</li>
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
                          <div className="number">3</div>
                        </div>
                        <div className="force-overflow">
                          <div className="bgWhiteNew">
                            <div className="row d-flex flex-grow-1 justify-content-start align-items-center">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <Image
                                  src="/assets/images/1service-ecommerce.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Fashion Store</h2>
                                  <ViewProject index={"16"} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <Image
                                  src="/assets/images/2service-ecommerce.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Pizza Street</h2>
                                  <ViewProject index={"3"} />
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
                          Hire a web developer who can develop innovative
                          websites that are user-friendly and tailored to your
                          needs. We are specialized in the following techs:
                        </p>
                        <ul className="mt-4">
                          <li>JAVA</li>
                          <li>PHP</li>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>C++</li>
                          <li>.NET</li>
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
                                <Image
                                  src="/assets/images/3service-website.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Motorway Today</h2>
                                  <ViewProject index={"19"} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <Image
                                  src="/assets/images/01currencyrates.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Currency Rates</h2>
                                  <ViewProject index={"22"} />
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
                          Bring your tech ideas to life with our professionals
                          and a wide portfolio of experience. We make custom
                          software according to our customer’s needs.
                        </p>
                        <ul className="mt-4">
                          <li>Ecommerce Solutions</li>
                          <li>POS (Retail Industry)</li>
                          <li>Fintech (Ewallets, Neo Banking)</li>
                          <li>ERP Solutions</li>
                          <li>Healthcare Softwares</li>
                          <li>SAAS</li>
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
                                <Image
                                  src="/assets/images/1servicecustom.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>ATCOMMERCE</h2>
                                  <ViewProject index={"6"} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <Image
                                  src="/assets/images/2servicecustom.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>ATPOS</h2>
                                  <ViewProject index={"7"} />
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
                          <span>Web Designing (UI/UX)</span>
                        </h2>
                        <p className="servicePara mt-2 mt-md-3 mt-lg-3 pt-2 pt-md-3 pt-lg-3 pe-2 pe-2 pe-md-3 pe-lg-5">
                          Hire the top UI/UX designers that can develop
                          responsive pages and select a set of interactive
                          elements. We are specialized in the following techs:
                        </p>
                        <ul className="mt-4">
                          <li>Adobe XD</li>
                          <li>Adobe Illustrator</li>
                          <li>Adobe Photoshop</li>
                          <li>Adobe After Effects</li>
                          <li>Figma</li>
                          <li>Invision</li>
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
                                <Image
                                  src="/assets/images/4service-website.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Food Calories</h2>
                                  <ViewProject index={"25"} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <Image
                                  src="/assets/images/01Headeruiux.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Pakistan Petrol Price Today</h2>
                                  <ViewProject index={"24"} />
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
                                <Image
                                  src="/assets/images/01Header-1.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Purple Housing</h2>
                                  <ViewProject index={"10"} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bgWhiteNew mt-4">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-img">
                                <Image
                                  src="/assets/images/01Header.png"
                                  alt=""
                                  className="img-fluid position-static"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 servicemobileView-Bg d-flex flex-grow-1 justify-content-start align-items-center">
                                <div className="txtDetail w-100 text-center">
                                  <h2>Digital Marketing</h2>
                                  <ViewProject index={"11"} />
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
      <ViewProjectModal />
    </>
  );
}
