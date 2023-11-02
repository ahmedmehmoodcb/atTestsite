"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
const ContactUsForm = dynamic(() => import("@/components/contactusForm"), {
  ssr: false,
});

export default function ContactUs() {
  return (
    <>
      <section className="innerTop topMobileApp contactusPage">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <div className="topInner">
                  <div className="howworkTxt">
                    <span className="txtCom d-block">
                      Let's Bring Innovation
                    </span>
                  </div>
                  <p>
                    Share your idea with us, and let's come up with something
                    innovative.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5"></div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
            </div>

            <div className="row mt-4">
              <div className="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <div className="topInner">
                  <div className="detailInnerConBox detailInnerConBoxcontus">
                    <div
                      className="wpcf7 js"
                      id="wpcf7-f2667-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        ></p>
                        <ul></ul>
                      </div>
                      <ContactUsForm />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <div className="innerConRtS innerConRtSContUs">
                  <div className="contactDetail">
                    <div className="conIcon">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/inerconEmail.png"
                        alt=""
                      />
                    </div>
                    <div className="conIcon">
                      <div className="textGreen">Email</div>
                      <div className="innetNum mt-1">
                        <a href="#">hello@atrule.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="contactDetail">
                    <div className="conIcon">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/inerconPhone.png"
                        alt=""
                      />
                    </div>
                    <div className="conIcon">
                      <div className="textGreen">Phone</div>
                      <div className="innetNum mt-1">+92 3042229245</div>
                      <div className="innetNum">+92 3042229245</div>
                    </div>
                  </div>

                  <div className="contactDetail">
                    <div className="conIcon">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/inerconMap.png"
                        alt=""
                      />
                    </div>
                    <div className="conIcon">
                      <div className="textGreen">Location</div>
                      <div className="innetNum mt-1">
                        <a href="#">
                          Office no 201, 2nd Floor, Al-Hafeez Executive, Gulberg
                          |||, Lahore Pakistan.
                        </a>
                      </div>
                      <div className="innetNum mt-1">
                        <a href="#">
                          2nd Floor, Khawar Centre, Near SP Chowk, Multan Cantt,
                          Pakistan.
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="contactDetail">
                    <div className="conIcon">
                      <img
                        src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/se-time.png"
                        alt=""
                      />
                    </div>
                    <div className="conIcon">
                      <div className="textGreen">Hour Of Operation</div>
                      <div className="innetNum">
                        <a href="#">Monday - Friday: 12:00 - 9:00</a>
                      </div>
                      <div className="innetNum">
                        <a href="#">Saturday & Sunday: off</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="innerTitleNew">
                  <h2 className="text-start mb-3">Here we are located</h2>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"></div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="mapdetail">
                  <h2>Lahore</h2>
                  <p>
                    Our Lahore office is located in the bustling heart of Lahore
                    in Gulberg, one of Lahore's most prominent business and
                    corporate hubs. Nestled within the prestigious Al-Hafeez
                    Executive, our office spans 1400 square feet, offering a
                    luxurious and productive workspace.
                  </p>
                  <p>
                    We've dedicated team spaces, a comfortable dining area, and
                    a play area for our valued employees. With high-speed
                    internet connectivity and a reliable power supply, we ensure
                    that work is seamless and uninterrupted.
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13607.010038462786!2d74.3478476!3d31.5034859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4892fe2f0a479e69!2sATRULE%20Technologies%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1656316437238!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    className="mt-3"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="mapdetail">
                  <h2>Multan</h2>
                  <p>
                    Our Multan office is situated in the most prime and secure
                    location in Multan Cantt. Located in Khawar Center, our
                    office spans 1000 square feet and has a productive
                    workspace.
                  </p>
                  <p>
                    With dedicated team spaces, a clean and comfortable dining
                    area, and a play area for our employees, we make sure to
                    take good care of their well-being. With high-speed internet
                    connectivity and a reliable power supply, we ensure that
                    work is seamless and uninterrupted.
                  </p>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13794.442428836031!2d71.4411123!3d30.1911154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33e525ca83f7%3A0x6a9a6daa27379d2e!2sAtrule%20Technologies%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1695730715074!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    className="mt-3 mapStyle"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
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
    </>
  );
}
