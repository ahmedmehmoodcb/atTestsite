"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const BuildYourTeam = dynamic(() => import("@/components/buildyourteam"), {
  ssr: false,
});
const SendUs = dynamic(() => import("@/components/sendus"), {
  ssr: false,
});
const ViewProjectModal = dynamic(
  () => import("@/components/viewprojectmodal"),
  {
    ssr: false,
  }
);
import ViewProject from "@/components/viewproject";
import Link from "next/link";
import popupData from "../../data.json";

export default function Work() {
  let currentTab = 0;
  let tabsInterval;

  const switchTab = () => {
    const tabs = document.querySelectorAll("#myTab1 .nav-item");
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

    const myTabContainer = document.getElementById(
      "nav-tab-ref-portfolio-tabs-container"
    );
    const myModal = document.getElementById("myModal");
    if (myModal) {
      myModal.addEventListener("mouseenter", handleMouseEnter);
      myModal.addEventListener("mouseleave", handleMouseLeave);
    }

    if (myTabContainer) {
      myTabContainer.addEventListener("mouseenter", handleMouseEnter);
      myTabContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    const tabs = document.querySelectorAll("#myTab1 .nav-item");
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
      <section className="innerTop topMobileApp">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="topInner">
                  <div className="howworkTxt">
                    <span className="txtCom d-block">Our Work </span>
                    <span className="buildTxt d-block">
                      {" "}
                      Apps - Web & Desktop
                    </span>
                  </div>
                  <div className="mt-3 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/portfolio.svg"
                      className="img-fluid"
                      alt="portfolio"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    Our portfolio showcases our interest in innovation and
                    excellence. It provides a glimpse of the diverse projects
                    that we've had the privilege to work on in various
                    industries. From captivating websites that engage the users
                    at first glance to functional applications that are built to
                    provide ease to the end-users, our portfolio reflects the
                    dedication and creativity we pour into each endeavor.
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
      <section className="portfolio">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="text-center innerTitleNew">
                <div className="row">
                  <h2>Portfolio</h2>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <p>Take a glimpse into our wide array of projects.</p>
                  </div>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                  <div
                    className="navTabRes portfolio-tabs"
                    id="nav-tab-ref-portfolio-tabs-container"
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <ul
                        className="nav nav-tabs servicesTxt mt-3 mt-md-5 mt-lg-5"
                        id="myTab1"
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
                            Show All
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
                            Mobile Apps
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="seoSer-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#seoSer-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="seoSer-tab-pane"
                            aria-selected="false"
                          >
                            eCommerce
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
                            id="CustomSoftware-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#CustomSoftware-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="CustomSoftware-tab-pane"
                            aria-selected="false"
                          >
                            UI / UX Design
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
                            Custom Software
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTab1Content">
                      <div
                        className="tab-pane fade show active"
                        id="home-tab-pane"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                        tabindex="0"
                      >
                        <div className="row">
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/MotorwayConditions.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Motorway Conditions Today
                                </h4>
                                <ViewProject index={"18"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1EcommerceStorebuilder.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Ecommerce Store Builder (Atcommerce)
                                </h4>
                                <ViewProject index={"17"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/PetrolPrice.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Pakistan Petrol Price Today
                                </h4>
                                <ViewProject index={"12"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/2FoodCalories.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Food Calories
                                </h4>
                                <ViewProject index={"21"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/CurrencyConverter.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Currency Rates and Converter
                                </h4>
                                <ViewProject index={"5"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/customAtpos.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Point of Sale Software (ATPOS)
                                </h4>
                                <ViewProject index={"7"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1Fashionstore.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Fashion Store
                                </h4>
                                <ViewProject index={"16"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1EcommerceStorebuilder-1.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Clothing Store
                                </h4>
                                <ViewProject index={"15"} />
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
                        tabindex="0"
                      >
                        <div className="row">
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/MotorwayConditions.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Motorway Conditions Today
                                </h4>
                                <ViewProject index={"18"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/PetrolPrice.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Pakistan Petrol Price Today
                                </h4>
                                <ViewProject index={"12"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/FoodCalories.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  What to Eat: Food Calories
                                </h4>
                                <ViewProject index={"13"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/CurrencyConverter.png"
                                />
                              </div>

                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Currency Rates and Converter
                                </h4>
                                <ViewProject index={"5"} />
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
                        tabindex="0"
                      >
                        <div className="row">
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/3MotorwayConditions.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Motorway Today
                                </h4>
                                <ViewProject index={"19"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/4PetrolPrices.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Petrol Prices
                                </h4>
                                <ViewProject index={"20"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/2FoodCalories.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Food Calories
                                </h4>
                                <ViewProject index={"21"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1CurrencyRatesConverter.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Currency Rates
                                </h4>
                                <ViewProject index={"22"} />
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
                        tabindex="0"
                      >
                        <div className="row">
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/ui-uxMotorwayConditions.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Motorway Conditions Today
                                </h4>
                                <ViewProject index={"23"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/ui-uxPetrolPrice.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Pakistan Petrol Price Today
                                </h4>
                                <ViewProject index={"24"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/2FoodCalories.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Food Calories
                                </h4>
                                <ViewProject index={"25"} />
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/ui-uxBusinessWebsite.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Business Website
                                </h4>
                                <ViewProject index={"14"} />
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/ui-uxFoodCalories.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Currency Rates and Converter
                                </h4>
                                <ViewProject index={"22"} />
                              </div>
                            </div>
                          </div> */}
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1EcommerceStorebuilder.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Ecommerce Store Builder (Atcommerce)
                                </h4>
                                <ViewProject index={"17"} />
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
                        tabindex="0"
                      >
                        <div className="row">
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/customAtpos.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Point of Sale Software (ATPOS)
                                </h4>
                                <ViewProject index={"7"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/customEcommerceStorebuilder.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Ecommerce Store builder (Atcommerce)
                                </h4>
                                <ViewProject index={"6"} />
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
                        tabindex="0"
                      >
                        <div className="row">
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1Fashionstore.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Fashion Store
                                </h4>
                                <ViewProject index={"16"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1EcommerceStorebuilder-1.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Clothing Store
                                </h4>
                                <ViewProject index={"15"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                            <div className="card d-flex align-items-stretch portfolio-card-main position-relative h-100">
                              <div className="card-img-top">
                                <img
                                  className="img-fluid"
                                  alt="portfolio-img"
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/1EcommerceStorebuilder.png"
                                />
                              </div>
                              <div className="portfolio-content card-body d-flex flex-column">
                                <h4 className="portfolio-title text-white ps-2">
                                  Ecommerce Store Builder (Atcommerce)
                                </h4>
                                <ViewProject index={"17"} />
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
      <SendUs />
      <BuildYourTeam />
      <ViewProjectModal />
    </>
  );
}
