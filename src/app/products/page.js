import dynamic from "next/dynamic";
const BuildYourTeam = dynamic(() => import("@/components/buildyourteam"), {
  ssr: false,
});
const SendUs = dynamic(() => import("@/components/sendus"), {
  ssr: false,
});
import Link from "next/link";

export default function Products() {
  return (
    <>
      <section className="innerTop topMobileApp">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="topInner">
                  <div className="howworkTxt">
                    <span className="txtCom d-block">Our Products</span>
                    <span className="buildTxt d-block productPOS">
                      Ecommerce - POS - Apps
                    </span>
                  </div>
                  <div className="mt-3 mt-md-5 mt-lg-5">
                    <img
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/ecommerce-campaign_amico.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="innerParDetail">
                  <p>
                    Experts in creating innovative solutions, Atrule is
                    committed to providing top-notch services and products to
                    diverse industries. We have proudly worked with clients from
                    around the globe and provided them with value in the form of
                    web portals, POS software, eCommerce platforms, mobile
                    applications, and web services.
                  </p>
                  <p>
                    Ready to elevate your business with our innovative
                    solutions? Contact us today to discuss the next big thing
                    that you have in mind and discover how Atrule can empower
                    your success.
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
      <section className="Products-main">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="title">
                  <h2>Atcommerce</h2>
                </div>
                <p className="pe-lg-4">
                  A product of Atrule, Atcommerce is an eCommerce platform that
                  takes away all the hassles of creating online stores and makes
                  stores online in just a few clicks.
                </p>
                <p className="pe-lg-4">
                  With a focus on interface, functionality, and security,
                  Atcommerce is your one-stop-shop for all your eCommerce needs.
                  Get a free demo now!
                </p>
                <div className="buttonVirTeam mt-5 buttonVirTeamLink">
                  <span className="hireBtn">
                    <a
                      href="https://atcommerce.pk/store-demo/"
                      className="hireBtn explone"
                      target="_blank"
                    >
                      Request Demo
                    </a>
                  </span>
                  <span className="hireBtn newBntRight">
                    <a href="#GetinTouch" className="hireBtn">
                      Get in touch
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="atcommerce-img py-4 px-3">
                  <img
                    className="img-fluid"
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/atcommerce.webp"
                    alt="atcom-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Products-main">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="at-pos-img py-4 px-3">
                  <img
                    className="img-fluid"
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/at-pos.webp"
                    alt="atpos-img"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="title">
                  <h2>Atpos</h2>
                </div>
                <p className="pe-lg-4">
                  Atpos is a powerful point of sale software designed and
                  developed by Atrule to enhance the interaction between stores
                  and customers, streamlining operations for both parties. With
                  Atpos, customers benefit from reduced waiting times, faster
                  item scanning, and quicker payments. On the other hand,
                  businesses enjoy improved management of sales, inventory,
                  customers, and suppliers.
                </p>

                <div className="buttonVirTeam mt-5 buttonVirTeamLink">
                  <span className="hireBtn">
                    <a
                      href="https://www.youtube.com/watch?v=gLW4G4t0BG8"
                      target="_blank"
                      className="hireBtn explone"
                    >
                      Video tour
                    </a>
                  </span>
                  <span className="hireBtn newBntRight">
                    <a href="#GetinTouch" className="hireBtn">
                      Get in touch
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Products-main">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="title">
                  <h2>Mobile APPS</h2>
                </div>
                <p className="pe-lg-4">
                  Atrule is a prominent software house with a diverse portfolio
                  of mobile applications aimed at providing convenience to users
                  across various industries. Our expertise extends to designing
                  mobile applications for a wide range of sectors, including
                  vehicle management, health and fitness, and many more. With a
                  proven track record, we have successfully developed apps for
                  clients spanning diverse industries.
                </p>

                <div className="buttonVirTeam mt-5 buttonVirTeamLink">
                  <span className="hireBtn">
                    <Link href="/explore" className="hireBtn explone">
                      EXPLORE
                    </Link>
                  </span>
                  <span className="hireBtn newBntRight">
                    <a href="#GetinTouch" className="hireBtn">
                      Get in touch
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="atcommerce-img py-4 px-3 text-center">
                  <img
                    className="img-fluid"
                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/app.png"
                    alt="App-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SendUs />
      <BuildYourTeam />
    </>
  );
}
