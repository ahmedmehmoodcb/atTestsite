"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
const BuildYourTeam = dynamic(() => import("@/components/buildyourteam"));
const OurServices = dynamic(() => import("@/components/ourservices"));
const VirtualTeams = dynamic(() => import("@/components/Home/VirtualTeams"));
const TrustedPartners = dynamic(() =>
  import("@/components/Home/TrustedPartners")
);
const HowItsWorks = dynamic(() => import("@/components/Home/HowItsWorks"));
const WhyWe = dynamic(() => import("@/components/Home/WhyWe"));

export default function Home() {
  return (
    <>
      <div className="headerbgimg">
        {/* <div className="position-relative"> */}
        <Image
          src="../assets/images/headerBg.png"
          alt="image"
          layout="fill"
          objectFit="cover"
          className=""
          loading="lazy"
        />
        {/* </div> */}
      </div>
      <div className="mainGgNew">
        <div className="px-0 px-md-2 px-lg-3 px-xl-5 mx-0 mx-md-2 mx-lg-3 mx-xl-5 pb-3 pb-md-0 pb-lg-5">
          <section className="slider mt-0 mt-md-0 mt-lg-0 pt-3 pt-md-3 pt-lg-3">
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
                      We help build and manage a team of world-class developers
                      & designers to bring your vision to life
                    </p>
                    <div className="desktop1">
                      <div className="BuildTab">
                        <div className="buildTeam">
                          <div className="byt">
                            <div className="bytImages">
                              <Image
                                src="../assets/images/icon.png"
                                alt="image"
                                layout="fill"
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
                              <Image
                                src="../assets/images/icon-1.png"
                                alt="image"
                                layout="fill"
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
                              <Image
                                src="../assets/images/icon-2.png"
                                alt="image"
                                layout="fill"
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
                          <Link href="/hire" className="hireBtn">
                            Hire Now
                          </Link>
                        </div>
                      </div>
                      <div className="sideImg">
                        <div className="position-relative">
                          <Image
                            src="../assets/images/NSlider.png"
                            className="img-fluid position-static"
                            alt="image"
                            layout="fill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="sliderImages text-end mt-5 mt-md-4 mt-lg-4 pt-0 pt-md-4 pt-lg-4 position-relative">
                    <Image
                      src="../assets/images/slider.png"
                      className="img-fluid webRes position-static"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                    />
                    <div className="mobileRes ">
                      <div className="position-relative">
                        <Image
                          src="../assets/images/NSlider.png"
                          className="img-fluid position-static"
                          alt="image"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <VirtualTeams />
      <TrustedPartners />
      <OurServices />
      <HowItsWorks />
      <WhyWe />
      <BuildYourTeam />
    </>
  );
}
