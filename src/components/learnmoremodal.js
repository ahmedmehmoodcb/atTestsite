export default function LearnMoreModal() {
  return (
    <>
      <a
        href="#"
        type="button"
        class="leftArrow d-none"
        data-bs-toggle="modal"
        data-bs-target="#MobileConsultingSolutions"
        id="openLeanMoreModalButton"
      ></a>
      <div
        className="modal fade"
        id="MobileConsultingSolutions"
        tabindex="-1"
        aria-labelledby="MobileConsultingSolutionsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="MobileConsultingSolutionsLabel"
              >
                <img
                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/chat_duo.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "10%", marginRight: "10px" }}
                />
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="innerTitleNew text-start">
                <h2
                  className="text-start"
                  id="mobileConsultingsolutionsHeading2"
                ></h2>
                <p
                  className="text-start"
                  id="mobileConsultingSolutionsParagraph"
                ></p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="hireBtn popup-close-button">
                <a type="button" className="hireBtn" data-bs-dismiss="modal">
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
