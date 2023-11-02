import { popupData } from "./data.js";
function updateModalContent(popupData) {
  const modalTitle = document.getElementById("exampleModalLabel");
  const projectDetailName = document.querySelector(".projectDetailName");
  const Overview = document.querySelector(".Overview");
  const popupPara = document.querySelector(".popupPara");
  const popupPara2 = document.querySelector(".popupPara2");
  const projectFeatures = document.querySelector(".projectFeatures");
  const listUlli = document.querySelector(".listUlli");
  const popupClient = document.querySelector(".popupClient");
  const duration = document.querySelector(".duration");
  const techstacksection = document.getElementById("techstacksection");
  const imagespopup = document.querySelector(".imagespopup");
  const serviceTag = document.getElementById("service_name1");
  const datatestnew = popupData.techstack.map((item) => {
    return `<a href=${item.url} class="btn techstack" onclick="event.preventDefault()">${item.test}</a>`;
  });
  const newvar = datatestnew.join("");

  const downloadBtnnew = document.getElementById("downloadBtn");
  const downloadBtn = popupData.downloadBtn.map((item) => {
    return `<a href=${item.url} class="hireBtn" target="_blank" type="button">${item.btnTxt}</a>`;
  });

  const downloadBtn1 = downloadBtn.join("");

  modalTitle.textContent = popupData.title;
  projectDetailName.textContent = popupData.heading;
  Overview.textContent = popupData.Overview;
  popupPara.textContent = popupData.popupPara;
  popupPara2.textContent = popupData.popupPara2;
  projectFeatures.textContent = popupData.projectFeatures;
  listUlli.innerHTML = popupData.listUlli;
  techstacksection.innerHTML = newvar;
  downloadBtnnew.innerHTML = downloadBtn;

  popupClient.textContent = popupData.popupClient;
  imagespopup.innerHTML = popupData.imagespopup
    .map((item) => {
      return `<div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"><img src=${item.imagesrc} alt="" class="img-fluid"></div>`;
    })
    .join("");
  duration.textContent = popupData.duration;
  serviceTag.textContent = popupData.serviceName;
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("a[data-bs-popup]");
  buttons.forEach((button) => {
    const popupIndex = button.getAttribute("data-bs-popup");
    button.addEventListener("click", () => {
      const initialPageData = popupData[popupIndex];
      updateModalContent(initialPageData);
    });
  });
});
