import Link from "next/link";

export default function BuildYourTeam() {
  return (
    <>
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
