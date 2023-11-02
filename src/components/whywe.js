import Link from "next/link";

export default function WhyWe() {
  return (
    <>
      <section className="whyWe innerSection">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="text-center row mb-0 mb-md-0 mb-lg-0 pb-0 pb-md-0 pb-lg-0">
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
                <div className="borderTopNonr text-center pb-2 pb-md-2 pb-lg-4 pt-2 pt-md-2 pt-lg-4">
                  <div className="align-bottom flex-grow-1 d-flex justify-content-center align-items-center">
                    <div className="WhyUsPlus">+</div>
                    <div className="Bortxt">05</div>
                  </div>
                  <div className="whyWeTitle">Years in business</div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0">
                <div className="borderTopNonr text-center pb-2 pb-md-2 pb-lg-4 pt-2 pt-md-2 pt-lg-4">
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
    </>
  );
}
