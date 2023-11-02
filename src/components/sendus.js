import Link from "next/link";
import ContactUsForm from "./contactusForm";

export default function SendUs() {
  return (
    <>
      <section className="whatweoffer innerCon p-2" id="GetinTouch">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="text-center innerTitleNew">
                <div className="row">
                  <h2>Let's Bring Innovation</h2>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <p>
                      Share your idea with us, and let's come up with something
                      innovative.
                    </p>
                  </div>
                  <div className="col-0 col-sm-0 col-md-0 col-lg-2 col-xl-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="innerConBackImg">
          <div className="container-fluid">
            <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="detailInnerConBox">
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
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="innerConRtS">
                    <div className="contactDetail">
                      <div className="conIcon">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/inerconPhone.png"
                          alt=""
                        />
                      </div>
                      <div className="conIcon">
                        <div className="textGreen">Phone</div>
                        <div className="innetNum">+92 3042229245</div>
                      </div>
                    </div>
                    <div className="contactDetail">
                      <div className="conIcon">
                        <img
                          src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/inerconEmail.png"
                          alt=""
                        />
                      </div>
                      <div className="conIcon">
                        <div className="textGreen">Email</div>
                        <div className="innetNum">
                          <a href="#">hello@atrule.com</a>
                        </div>
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
                        <div className="innetNum">
                          <a href="#">
                            Office no 201, 2nd Floor, Al-Hafeez Executive,
                            Gulberg III Lahore.
                          </a>
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
    </>
  );
}
