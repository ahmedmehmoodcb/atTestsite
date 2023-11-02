import Image from "next/image";

const HowItsWorks = () => {
  return (
    <section className="whyWe howItWork pt-5 pt-md-5 pt-lg-5">
      <div className="container-fluid">
        <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
          <div className="text-center row mb-3 mb-md-3 mb-lg-3 pb-3 pb-md-3 pb-lg-3">
            <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="whyTxt">How It Works</div>
              <p className="mainPar">
                Our process is as simple as 1, 2, & 3.
                <br />
                You just need to hire professionals, and we will handle design &
                development. Then it's testing & go-live.
              </p>
            </div>
            <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="teamView text-md-center  text-lg-start">
                <div className="teamImg">
                  <Image
                    src="../assets/images/howNum1.png"
                    alt="image"
                    width={100}
                    height={100}
                    className="position-static"
                  />
                </div>
                <div className="howNameTxt">Hire Team</div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="teamView text-md-center  text-lg-start">
                <div className="teamImg">
                  <Image
                    src="../assets/images/howNum2.png"
                    alt="image"
                    width={100}
                    height={100}
                    className="position-static"
                  />
                </div>
                <div className="howNameTxt howNameTxtMob howNameTxtFullMob">
                  Design & Development
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="teamView text-md-center text-lg-start">
                <div className="teamImg">
                  <Image
                    src="../assets/images/howNum3.png"
                    alt="image"
                    width={100}
                    height={100}
                    className="position-static"
                  />
                </div>
                <div className="howNameTxt">Test & Live</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="text-center desktop-view">
                <div className="position-relative">
                  <Image
                    src="../assets/images/howtowork.png"
                    alt="image"
                    className="img-fluid position-static"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="howworkTxt">
                  <span className="buildTxt">READY TO</span>
                  <span className="txtCom">GO LIVE</span>
                </div>
              </div>
              <div className="text-center tabletView">
                <div className="position-relative" width={100} height={100}>
                  <Image
                    src="../assets/images/howtoworkTablet.png"
                    className="img-fluid position-static"
                    layout="fill"
                    objectFit="contain"
                    alt="image"
                  />
                </div>

                <div className="mt-4">
                  <Image
                    src="../assets/images/howtoworkMobile2.png"
                    alt="image"
                    className="img-fluid position-static"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="howworkTxt">
                  <span className="buildTxt">READY TO</span>
                  <span className="txtCom">GO LIVE</span>
                </div>
              </div>
              <div className="text-center mobile-view">
                <div className="position-relative">
                  <Image
                    src="../assets/images/howtoworkMobile.png"
                    alt="image"
                    className="img-fluid position-static"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="mt-4">
                  <div className="position-relative">
                    <Image
                      src="../assets/images/howtoworkMobile2.png"
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                      className="position-static img-fluid"
                    />
                  </div>
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
  );
};

export default HowItsWorks;
