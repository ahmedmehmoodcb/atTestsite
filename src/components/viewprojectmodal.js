export default function ViewProjectModal() {
  return (
    <>
      <div
        className="modal fade servicePopupTop"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog mw-100 w-50">
          <div className="modal-content">
            <div className="modal-header">
              <div className="headerTitle-ProjectName">
                <h5 className="modal-title" id="exampleModalLabel"></h5>
                <div className="clearfix"></div>
                <div className="projectDetailName"></div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="popupOverview popupOverBorder">
                    <h2 className="header Overview"></h2>
                    <p className="popupPara"></p>
                    <p className="popupPara2"></p>
                    <h2 className="projectFeatures"></h2>
                    <div className="Pfeature">
                      <ul className="listUlli"></ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="popupOverview">
                    <h2>Client</h2>
                    <p className="popupClient"></p>
                    <h2>Duration</h2>
                    <p className="duration"></p>
                    <h2>Tech Stacks</h2>
                    <div id="techstacksection"></div>

                    <div
                      className="hireBtn viewProject hireBtnJson mt-5"
                      id="downloadBtn"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer1 mt-4">
              <div className="row imagespopup"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
