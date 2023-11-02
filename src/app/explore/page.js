"use client";
import dynamic from "next/dynamic";
const ViewProjectModal = dynamic(
  () => import("@/components/viewprojectmodal"),
  {
    ssr: false,
  }
);

import ViewProject from "@/components/viewproject";
import popupData from "../../data.json";
import { useEffect } from "react";
import Link from "next/link";

export default function Explore() {
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
      <section className="portfolio">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="text-center innerTitleNew">
                <div className="row">
                  <h2>Mobile Apps Portfolio</h2>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <p>
                      Our software house in Pakistan offers a comprehensive
                      range of Software development services. The following are
                      some of the things that our skilled developers can help
                      you with.
                    </p>
                  </div>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                </div>
                <div className="row mt-4 mt-md-5 mt-lg-5">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="">
                      <div className="card portfolio-card-main position-relative">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="portfolio-img"
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/portfilioImgMotorway.png"
                          />
                        </div>
                        <div className="portfolio-content">
                          <h4 className="portfolio-title portfolioTitleNew text-white ps-2">
                            Motorway Conditions Today
                          </h4>
                          <div className="card-body">
                            <ViewProject index={"18"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="">
                      <div className="card portfolio-card-main position-relative">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="portfolio-img"
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/portfiliopetrolprice.png"
                          />
                        </div>
                        <div className="portfolio-content">
                          <h4 className="portfolio-title portfolioTitleNew text-white ps-2">
                            Pakistan Petrol Price Today
                          </h4>
                          <div className="card-body">
                            <ViewProject index={"12"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="">
                      <div className="card portfolio-card-main position-relative">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="portfolio-img"
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/portfiliocal.png"
                          />
                        </div>
                        <div className="portfolio-content">
                          <h4 className="portfolio-title portfolioTitleNew text-white ps-2">
                            What to Eat: Food Calories
                          </h4>
                          <div className="card-body">
                            <ViewProject index={"13"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="">
                      <div className="card portfolio-card-main position-relative">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="portfolio-img"
                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/portfiliocurrency.png"
                          />
                        </div>
                        <div className="portfolio-content">
                          <h4 className="portfolio-title portfolioTitleNew text-white ps-2">
                            Currency Rates and Converter
                          </h4>
                          <div className="card-body">
                            <ViewProject index={"5"} />
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
                    <Link href="/contactus" className="hireBtn">
                      contact us
                    </Link>
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
