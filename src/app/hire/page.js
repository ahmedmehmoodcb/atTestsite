"use client";
import { validateEmail } from "@/utils";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import lookingForArray from "../../lookingFor.json";
import dynamic from "next/dynamic";
const ReactSearchAutocomplete = dynamic(
  () => import("@/components/ReactSearchAutocomplete"),
  {
    ssr: false,
  }
);
import axios from "axios";
import API from "../../api.json";

export default function Hire() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [typeOfProject, setTypeOfProject] = useState("new idea or project");
  const [resourceRequired, setResourceRequired] = useState("contract");
  const [joiningResource, setJoiningResource] = useState("immediately");
  const [lookingFor, setLookingFor] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [currentEmploye, setCurrentEmploye] = useState(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [softwearDevelopmentTags, setSoftwearDevelopmentTags] = useState([]);
  const [softwearDevelopmentInput, setSoftwearDevelopmentInput] = useState("");
  const [designerTags, setDesignerTags] = useState([]);
  const [designerInput, setDesignerInput] = useState("");
  const [errors, setErrors] = useState([]);
  const [postEmployeLoading, setPostEmployeLoading] = useState(false);
  const [postLeadLoading, setPostLeadLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (apiError !== null) {
      setTimeout(() => {
        setApiError(null);
      }, 2000);
    }
  }, [apiError]);

  const handleSoftwearDevelopmentTagInputChange = (tag) => {
    setSoftwearDevelopmentInput(tag);
  };

  const handleSoftwearDevelopmentAddTag = (tag, index, catName) => {
    const cloneLookingFor = [...lookingFor];

    cloneLookingFor[index].tags = [...cloneLookingFor[index].tags, tag.trim()];
    setLookingFor(cloneLookingFor);
    // setSoftwearDevelopmentTags([...softwearDevelopmentTags, softwearDevelopmentInput.trim()]);
    setSoftwearDevelopmentInput("");
  };

  const handleSoftwearDevelopmentRemoveTag = (
    tag,
    catName,
    tagIndex,
    catIndex
  ) => {
    const cloneLookingFor = [...lookingFor];
    const updatedTags = cloneLookingFor[catIndex].tags.filter((t) => t !== tag);
    cloneLookingFor[catIndex].tags = updatedTags;
    setLookingFor(cloneLookingFor);

    // setSoftwearDevelopmentTags(updatedTags);
  };

  const handleDesignerTagInputChange = (e) => {
    setDesignerInput(e.target.value);
  };

  const handleDesignerAddTag = () => {
    if (designerInput.trim() !== "") {
      setDesignerTags([...designerTags, designerInput.trim()]);
      setDesignerInput("");
    }
  };

  const handleDesignerRemoveTag = (tag) => {
    const updatedTags = designerTags.filter((t) => t !== tag);
    setDesignerTags(updatedTags);
  };

  const handleLookingForCheckboxChange = (e) => {
    const value = e.target.value;

    // Check if the item with the same 'name' exists in 'lookingFor'
    const itemExists = lookingFor.some((item) => item?.name === value);

    if (itemExists) {
      // Remove the item with the same 'name' from 'lookingFor'
      const updatedLookingFor = lookingFor.filter(
        (item) => item?.name !== value
      );
      setLookingFor(updatedLookingFor);
    } else {
      // Add a new item to 'lookingFor' with the 'name' and an empty 'tags' array
      setLookingFor([...lookingFor, { name: value, tags: [], options: [] }]);
    }
  };

  const resetErrors = () => {
    setErrors([]);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
  };
  const nextAction = async () => {
    resetErrors();
    let currentStep = activeStep;
    let isValid = validation();
    if (activeStep === 0 && isValid) {
      try {
        setPostEmployeLoading(true);
        let postEmpolye = await axios.post(
          `${API.BACKEND_API_URL}/employer/create`,
          { name, email, phone }
        );
        let postEmployeData = await postEmpolye.data;
        if (postEmployeData.type == "success") {
          setCurrentEmploye(postEmployeData.data);
          currentStep = currentStep + 1;
          setActiveStep(currentStep);
        }
        setPostEmployeLoading(false);
      } catch (error) {
        setPostEmployeLoading(false);

        if (error?.message == "Network Error") {
          setApiError(error?.message);
        }
      }
    } else if (activeStep === 6) {
      try {
        setPostLeadLoading(true);
        await axios.post(`${API.BACKEND_API_URL}/lead/create`, {
          typeOfProject,
          resourceRequired,
          joiningResource,
          lookingFor,
          employerId: currentEmploye.id,
        });
        setPostLeadLoading(false);
      } catch (error) {
        console.log(error);
        setPostLeadLoading(false);
      }
      currentStep = currentStep + 1;
      setActiveStep(currentStep);
    } else if (activeStep !== 0 && activeStep !== 6) {
      currentStep = currentStep + 1;
      setActiveStep(currentStep);
    }
  };

  const stepBack = () => {
    let currentStep = activeStep;
    currentStep = currentStep - 1;
    setActiveStep(currentStep);
  };

  const validation = () => {
    let isValidEmail = validateEmail(email);
    if (activeStep === 0) {
      let newErrors = [];
      if (!name) {
        newErrors.push({ type: "name", message: "Name is required" });
      }
      if (!email) {
        newErrors.push({ type: "email", message: "Email is required" });
      }
      if (!isValidEmail) {
        newErrors.push({ type: "email", message: "Email not valid" });
      }
      if (!phone) {
        newErrors.push({ type: "phone", message: "Phone is required" });
      } else if (name && email && phone && isValidEmail) {
        resetErrors();
        return true;
      }

      setErrors(newErrors);
    } else {
      return true;
    }
  };
  return (
    <>
      <div className="hire-form mb-5">
        <div className="container-fluid pb-5">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-7 text-center p-0">
                <div className="detailInnerConBox detailInnerConBoxcontus hireNewForm">
                  <form
                    id="msform"
                    className="needs-validation"
                    noValidate
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {activeStep === 0 ? (
                      <fieldset>
                        <div className="form-card">
                          <div className="row">
                            <div className="col-12 mb-4">
                              <div className="text-center">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-11">
                              <h2 className="fs-title">
                                Ready to collaborate?
                              </h2>
                              <p className="hire-para">
                                Whether you need a single talent or assemble a
                                complete team, we offer flexible hiring
                                solutions tailored to your requirements.
                              </p>
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="mb-3 Name">
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.some((e) => {
                                      return e.type === "name";
                                    })
                                      ? "invalid"
                                      : "valid"
                                  }`}
                                  id="exampleInputEmail1"
                                  onChange={(e) => {
                                    setName(e.target.value);
                                    resetErrors();
                                  }}
                                  aria-describedby="emailHelp"
                                  placeholder="Your Name"
                                  value={name}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="mb-3 email">
                                <input
                                  type="email"
                                  className={`form-control ${
                                    errors.some((e) => {
                                      return e.type === "email";
                                    })
                                      ? "invalid"
                                      : "valid"
                                  }`}
                                  id="exampleInputEmail1"
                                  value={email}
                                  aria-describedby="emailHelp"
                                  placeholder="Your Email"
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                    resetErrors();
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="mb-3 message">
                                <input
                                  type="number"
                                  className={`form-control ${
                                    errors.some((e) => {
                                      return e.type === "phone";
                                    })
                                      ? "invalid"
                                      : "valid"
                                  }`}
                                  value={phone}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Your Phone Number"
                                  onChange={(e) => {
                                    setPhone(e.target.value);
                                    resetErrors();
                                  }}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="button"
                          name="next"
                          className="next action-button mt-3"
                          value={postEmployeLoading ? "Wait" : "Get Started"}
                          onClick={nextAction}
                        />
                        {apiError && (
                          <div class="alert mt-4 alert-danger" role="alert">
                            {apiError}
                          </div>
                        )}
                      </fieldset>
                    ) : activeStep === 1 ? (
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="text-center">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
                            <div className="text-center mt-5">
                              <h2 className="steps hireform-Steps">
                                15% Complete
                              </h2>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  style={{ width: "15%" }}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-card border-bottom pb-5 mb-4">
                          <div className="row">
                            <div className="col-12">
                              <h2 className="fs-title second-slider mt-4">
                                What type of project you are hiring for?
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault4"
                                  value={"new idea or project"}
                                  onChange={(e) => {
                                    setTypeOfProject(e.target.value);
                                    resetErrors();
                                  }}
                                  checked={
                                    typeOfProject === "new idea or project"
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault4"
                                >
                                  New idea or project
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault5"
                                  value={
                                    "existing project that needs more resources"
                                  }
                                  onChange={(e) => {
                                    setTypeOfProject(e.target.value);
                                    resetErrors();
                                  }}
                                  checked={
                                    typeOfProject ===
                                    "existing project that needs more resources"
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault5"
                                >
                                  Existing project that needs more resources
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault6"
                                  value={"none of the above"}
                                  onChange={(e) => {
                                    setTypeOfProject(e.target.value);
                                    resetErrors();
                                  }}
                                  checked={
                                    typeOfProject === "none of the above"
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault6"
                                >
                                  None of the above
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          value="BACK"
                          onClick={stepBack}
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button nextStepBtnHire"
                          value="Next"
                          onClick={nextAction}
                        />
                        <input
                          type="button"
                          name="previous"
                          className="next action-button nextStepBtnHire me-3 skip"
                          value="SKIP"
                          onClick={nextAction}
                        />
                      </fieldset>
                    ) : activeStep === 2 ? (
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="text-center">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
                            <div className="text-center mt-5">
                              <h2 className="steps hireform-Steps">
                                30% Complete
                              </h2>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "30%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-card border-bottom pb-5 mb-4">
                          <div className="row">
                            <div className="col-12">
                              <h2 className="fs-title second-slider mt-4">
                                What are you looking for?
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="form-check mt-3 hirecheckbax">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="project manager"
                                  id="flexCheckDefault"
                                  onChange={(e) =>
                                    handleLookingForCheckboxChange(e)
                                  }
                                  checked={lookingFor.some(
                                    (item) => item?.name === "project manager"
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                  <h5>Project Manager</h5>
                                  <p>
                                    Digital Project Managers, IT Project
                                    Managers, Scrum Masters, and Agile Coaches
                                  </p>
                                </label>
                              </div>
                              <div className="form-check mt-3 hirecheckbax">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="developer"
                                  id="flexCheckDefault1"
                                  onChange={handleLookingForCheckboxChange}
                                  checked={lookingFor.some(
                                    (item) => item?.name === "developer"
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault1"
                                >
                                  <h5>Developers</h5>
                                  <p>
                                    Software Developers, Data Scientists,
                                    DevOps, and QA
                                  </p>
                                </label>
                              </div>
                              <div className="form-check mt-3 hirecheckbax">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="designer"
                                  id="flexCheckDefault2"
                                  onChange={handleLookingForCheckboxChange}
                                  checked={lookingFor.some(
                                    (item) => item?.name === "designer"
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault2"
                                >
                                  <h5>Designers</h5>
                                  <p>
                                    Web, Mobile, UI/UX, Branding, and Visual
                                    Designers
                                  </p>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="form-check mt-3 hirecheckbax">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="seo"
                                  id="flexCheckDefault3"
                                  onChange={handleLookingForCheckboxChange}
                                  checked={lookingFor.some(
                                    (item) => item?.name === "seo"
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault3"
                                >
                                  <h5>SEO</h5>
                                  <p>On-page & Off-page, Linking Building</p>
                                </label>
                              </div>
                              <div className="form-check mt-3 hirecheckbax">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="sqa"
                                  id="flexCheckDefault4"
                                  onChange={handleLookingForCheckboxChange}
                                  checked={lookingFor.some(
                                    (item) => item?.name === "sqa"
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault4"
                                >
                                  <h5>SQA</h5>
                                  <p>
                                    Software Developers, Data Scientists,
                                    DevOps, and QA
                                  </p>
                                </label>
                              </div>
                              <div className="form-check mt-3 hirecheckbax">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="not sure"
                                  id="flexCheckDefault5"
                                  onChange={handleLookingForCheckboxChange}
                                  checked={lookingFor.some(
                                    (item) => item?.name === "not sure"
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault5"
                                >
                                  <h5>I’m not sure</h5>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          value="BACK"
                          onClick={stepBack}
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button nextStepBtnHire"
                          value="Next"
                          onClick={nextAction}
                        />
                        <input
                          type="button"
                          name="previous"
                          className="next action-button nextStepBtnHire me-3 skip"
                          value="SKIP"
                          onClick={nextAction}
                        />
                      </fieldset>
                    ) : activeStep === 3 ? (
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="text-center">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
                            <div className="text-center mt-5">
                              <h2 className="steps hireform-Steps">
                                45% Complete
                              </h2>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "45%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-card border-bottom pb-5 mb-4">
                          <div className="row">
                            <div className="col-12">
                              <h2 className="fs-title second-slider mt-4">
                                What skills would you like to see in your
                                resource?
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            {lookingFor.length > 0 &&
                              lookingFor
                                .filter((x) => x.name !== "not sure")
                                .map((cat, indx) => {
                                  let findCategory = lookingForArray.find(
                                    (item) => item.type == cat.name
                                  );
                                  return (
                                    <div
                                      className="col-lg-6 col-md-6 col-sm-12 col-12 pe-5"
                                      key={indx}
                                    >
                                      <div className="dev-skill">
                                        <h5 className="mt-2">
                                          Popular skills for
                                          <strong> {cat.name}</strong>
                                        </h5>
                                        <div className="skill-container">
                                          <div className="skill-form position-relative">
                                            <div className="skill-input m-0">
                                              {/* <input
                                                onFocus={() => {
                                                  setActiveDropdownIndex(indx);
                                                }}
                                                // onBlur={() =>
                                                //   setActiveDropdownIndex(null)
                                                // }
                                                id="skill"
                                                type="text"
                                                className="mt-2 input"
                                                // autoFocus
                                                // value={softwearDevelopmentInput}
                                                // onChange={() => {
                                                //   handleSoftwearDevelopmentTagInputChange();

                                                // }}
                                                onKeyDown={(event) => {
                                                  if (event.key === "Enter") {
                                                    event.preventDefault();
                                                    handleSoftwearDevelopmentAddTag(
                                                      indx,
                                                      cat.name
                                                    );
                                                  }
                                                }}
                                                placeholder="Add skill tags (e.g React, Swift)"
                                              /> */}
                                              <button
                                                id="add"
                                                className="btn d-none"
                                              >
                                                Add
                                              </button>
                                            </div>
                                            <ReactSearchAutocomplete
                                              suggestions={findCategory.tags}
                                              index={indx}
                                              handleSoftwearDevelopmentAddTag={
                                                handleSoftwearDevelopmentAddTag
                                              }
                                              tags={cat.tags}
                                            />
                                            <output
                                              id="output"
                                              className="output"
                                            ></output>
                                            <button
                                              id="submit"
                                              className="btn btn-primary action d-none"
                                            >
                                              Continue
                                            </button>
                                          </div>

                                          {cat.tags.length > 0 ? (
                                            <h5 className="tags mb-0 mt-3">
                                              Tags:
                                            </h5>
                                          ) : null}
                                          {cat.tags.length > 0 &&
                                            cat.tags.map((t, index) => {
                                              return (
                                                <span
                                                  className="position-relative"
                                                  key={{ index }}
                                                >
                                                  <span
                                                    className="chip js-chip "
                                                    draggable="true"
                                                  >
                                                    + {t}
                                                  </span>
                                                  <button
                                                    className="position-absolute close-button"
                                                    onClick={() =>
                                                      handleSoftwearDevelopmentRemoveTag(
                                                        t,
                                                        cat.name,
                                                        index,
                                                        indx
                                                      )
                                                    }
                                                  >
                                                    x
                                                  </button>
                                                </span>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                          </div>
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          value="BACK"
                          onClick={stepBack}
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button nextStepBtnHire"
                          value="Next"
                          onClick={nextAction}
                        />
                        <input
                          type="button"
                          name="previous"
                          className="next action-button nextStepBtnHire me-3 skip"
                          value="SKIP"
                          onClick={nextAction}
                        />
                      </fieldset>
                    ) : activeStep === 4 ? (
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="text-center">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
                            <div className="text-center mt-5">
                              <h2 className="steps hireform-Steps">
                                60% Complete
                              </h2>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-card border-bottom pb-5 mb-4">
                          <div className="row">
                            <div className="col-12">
                              <h2 className="fs-title second-slider mt-4">
                                The resource is required for the level of time?
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault7"
                                  value={"contract"}
                                  onChange={(e) => {
                                    setResourceRequired(e.target.value);
                                  }}
                                  checked={resourceRequired === "contract"}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault7"
                                >
                                  Contract
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault8"
                                  value={"monthly"}
                                  onChange={(e) => {
                                    setResourceRequired(e.target.value);
                                  }}
                                  checked={resourceRequired === "monthly"}
                                />

                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault8"
                                >
                                  Monthly
                                </label>
                              </div>
                            </div>
                            {/* <div className="col-12">
                            <div className="form-check mt-3 hireRadio">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault9"
                                value={'annually'}
                                onChange={(e) => {
                                  setResourceRequired(e.target.value)
                                }}
                                checked={resourceRequired === 'annually'}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault9"
                              >
                                Annually
                              </label>
                            </div>
                          </div> */}
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault10"
                                  value={"hourly"}
                                  onChange={(e) => {
                                    setResourceRequired(e.target.value);
                                  }}
                                  checked={resourceRequired === "hourly"}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault10"
                                >
                                  Hourly (Our Avg. hourly rates are $10 - $150
                                  per hour)
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          value="BACK"
                          onClick={stepBack}
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button nextStepBtnHire"
                          value="Next"
                          onClick={nextAction}
                        />
                        <input
                          type="button"
                          name="previous"
                          className="next action-button nextStepBtnHire me-3 skip"
                          value="SKIP"
                          onClick={nextAction}
                        />
                      </fieldset>
                    ) : activeStep === 5 ? (
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="text-center">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
                            <div className="text-center mt-5">
                              <h2 className="steps hireform-Steps">
                                75% Complete
                              </h2>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "75%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-card border-bottom pb-5 mb-4">
                          <div className="row">
                            <div className="col-12">
                              <h2 className="fs-title second-slider mt-4">
                                When do you need the resource to start?
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="joiningResource"
                                  id="joiningResource"
                                  value={"immediately"}
                                  onChange={(e) => {
                                    setJoiningResource(e.target.value);
                                  }}
                                  checked={joiningResource === "immediately"}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="joiningResource"
                                >
                                  Immediately
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="joiningResource"
                                  id="1to2weekfromnow"
                                  value={"1 to 2 weeks from now"}
                                  onChange={(e) => {
                                    setJoiningResource(e.target.value);
                                  }}
                                  checked={
                                    joiningResource === "1 to 2 weeks from now"
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="1to2weekfromnow"
                                >
                                  1 to 2 weeks from now
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="joiningResource"
                                  id="1monthfromnow"
                                  value={"1 month from now"}
                                  onChange={(e) => {
                                    setJoiningResource(e.target.value);
                                  }}
                                  checked={
                                    joiningResource === "1 month from now"
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="1monthfromnow"
                                >
                                  1 month from now
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check mt-3 hireRadio">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="joiningResource"
                                  id="iwilldecidelater"
                                  value={"I'll decide later"}
                                  onChange={(e) => {
                                    setJoiningResource(e.target.value);
                                  }}
                                  checked={
                                    joiningResource === "I'll decide later"
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="iwilldecidelater"
                                >
                                  I'll decide later
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          value="BACK"
                          onClick={stepBack}
                        />
                        <input
                          type="button"
                          name="next"
                          className="next action-button nextStepBtnHire"
                          value="Next"
                          onClick={nextAction}
                        />
                        <input
                          type="button"
                          name="previous"
                          className="next action-button nextStepBtnHire me-3 skip"
                          value="SKIP"
                          onClick={nextAction}
                        />
                      </fieldset>
                    ) : activeStep === 6 ? (
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="text-center">
                              <img
                                src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
                            <div className="text-center mt-5">
                              <h2 className="steps hireform-Steps">
                                95% Complete
                              </h2>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "95%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-card border-bottom pb-5 mb-4">
                          <div className="row">
                            <div className="col-12">
                              <h2 className="fs-title mt-4">
                                Here is your resource summary:
                              </h2>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                              <div className="hire-summary mt-3">
                                <h2>Project type</h2>
                                <div className="hireSumm-imageText mt-3">
                                  <img
                                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/summary-check.png"
                                    alt=""
                                  />
                                  <span> {typeOfProject} </span>
                                </div>
                              </div>
                              <div className="hire-summary mt-4 pt-2">
                                <h2>Level of time</h2>
                                <div className="hireSumm-imageText mt-3">
                                  <img
                                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/summary-check.png"
                                    alt=""
                                  />
                                  <span> {resourceRequired} </span>
                                </div>
                              </div>
                              {/* <div className="hire-summary mt-4 pt-2">
                                <h2>How long resource needed</h2>
                                <div className="hireSumm-imageText mt-3">
                                  <img
                                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/summary-check.png"
                                    alt=""
                                  />
                                  <span> 1 to 4 months </span>
                                </div>
                              </div> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12  mt-3">
                              <div className="hire-summary mt-3">
                                <h2>I’m looking for</h2>
                                {lookingFor.length > 0 &&
                                  lookingFor.map((item, index) => {
                                    return (
                                      <div key={index}>
                                        <div className="hireSumm-imageText mt-3">
                                          <img
                                            src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/summary-check.png"
                                            alt=""
                                          />
                                          <span> {item.name} </span>
                                        </div>
                                        {item.tags && item.tags.length > 0 && (
                                          <div className="hireSumm-imageText mt-1 ps-4">
                                            <span>
                                              {item.tags &&
                                                item.tags.length > 0 && (
                                                  <strong>Skills:</strong>
                                                )}
                                              {item.tags &&
                                                item.tags.length > 0 &&
                                                item.tags.map((t, idx) => {
                                                  return (
                                                    <span key={idx}>{t}</span>
                                                  );
                                                })}
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                              </div>
                              <div className="hire-summary mt-4 pt-2">
                                <h2>When should resource start</h2>
                                <div className="hireSumm-imageText mt-3">
                                  <img
                                    src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/summary-check.png"
                                    alt=""
                                  />
                                  <span> {joiningResource} </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="button"
                          name="previous"
                          className="previous action-button-previous"
                          value="BACK"
                          onClick={stepBack}
                        />
                        <input
                          type="button"
                          name="Submit"
                          className="next action-button nextStepBtnHire"
                          value={postLeadLoading ? "Wait" : "Submit"}
                          onClick={nextAction}
                        />
                      </fieldset>
                    ) : (
                      <fieldset>
                        <div className="form-card">
                          <div className="row">
                            <div className="col-12 mb-4">
                              <div className="text-center">
                                <img
                                  src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/hire-img.webp"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <h2 className="fs-title text-center">
                                Thank you!
                              </h2>
                              <p className="hire-para text-center">
                                Our business development team will contact you
                                shortly!
                              </p>
                            </div>
                            <div className="col-12 text-center mt-5">
                              <Link
                                target="_blank"
                                href="/hire"
                                className="next action-button mt-3"
                              >
                                Need More Resources?
                              </Link>
                              <div className="clearfix"></div>
                              <div className="text-center mt-5">
                                <Link href="/" className="mt-3 hireBackHome">
                                  <img src="images/backarrow.png" alt="" />
                                  Back to Home
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
