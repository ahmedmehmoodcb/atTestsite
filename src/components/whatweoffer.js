import Link from "next/link";

export default function WhatWeOffer() {
  return (
    <>
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
                      Choose from a pool of highly skilled developers who
                      specialize in your preferred tech stacks.
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
                    <h2 className="title">Availability</h2>
                    <p className="pargar px-2 px-md-5 px-lg-5">
                      Our developers offer flexible availability, adapting to
                      your time zone and work flow, to ensure efficient
                      collaboration and seamless communication.
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
                    <h2 className="title">Experience</h2>
                    <p className="pargar px-2 px-md-5 px-lg-5">
                      Select the perfect candidate from our extensive pool of
                      experienced professionals with your desired years of
                      expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
