"use client";
import { validateEmail } from "@/utils";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../api.json";

const ContactUsForm = () => {
  const recaptchaRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isVerified, setIsverified] = useState(false);

  async function verifyCaptcha(token) {
    try {
      const recaptchaRequest = await axios.post(
        `${API.BACKEND_API_URL}/recaptcha/verify`,
        { secretKey: API.RECAPTCHA_SECRET_KEY, token }
      );
      const recaptchaData = await recaptchaRequest.data;
      if (recaptchaData.type == "success") {
        setIsverified(true);
      } else {
        setIsverified(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  const submitForm = async () => {
    let formErrors = {};
    if (name.trim() == "") {
      formErrors.name = "error";
    }
    if (email.trim() == "") {
      formErrors.email = "error";
    } else {
      let isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        formErrors.email = "error";
      }
    }

    if (message.trim() == "") {
      formErrors.message = "error";
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length == 0 && isVerified) {
      let sendMessage = await axios.post(
        `${API.BACKEND_API_URL}/contact/create/message`,
        { name, email, message }
      );
      let data = await sendMessage.data;
      if (data.type == "success") {
        setName("");
        setMessage("");
        setEmail("");
        setSuccessMessage(data);
      }
      if (data.type == "error") {
        setErrorMessage(data);
      }
      setIsverified(false);
      recaptchaRef?.current?.reset();
    }
  };
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (successMessage !== null) {
      setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage !== null) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
  }, [errorMessage]);

  return (
    <form
      method="post"
      className="wpcf7-form init"
      aria-label="Contact form"
      novalidate="novalidate"
      data-status="init"
    >
      <div style={{ display: "none" }}>
        <input type="hidden" name="_wpcf7" value="2667" />
        <input type="hidden" name="_wpcf7_version" value="5.8" />
        <input type="hidden" name="_wpcf7_locale" value="en_US" />
        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f2667-o1" />
        <input type="hidden" name="_wpcf7_container_post" value="0" />
        <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
      </div>
      <div className="innerform">
        {successMessage !== null && (
          <div class="alert alert-success" role="alert">
            {successMessage?.message}
          </div>
        )}
        {errorMessage !== null && (
          <div class="alert alert-danger" role="alert">
            {errorMessage?.error}
          </div>
        )}
        <div className="mb-2 Name ">
          <p>
            <span className="wpcf7-form-control-wrap " data-name="text-453">
              <input
                size="40"
                className={`wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control contactUsForm ${
                  errors?.name && "invalid"
                }`}
                aria-required="true"
                aria-invalid="false"
                placeholder="Write your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  const error = errors !== null && {
                    ...errors,
                  };
                  if (error.hasOwnProperty("name")) {
                    delete error.name;
                  }
                  setErrors(error);
                }}
                type="text"
                name="text-453"
              />
            </span>
          </p>
        </div>
        <div className="mb-2 email">
          <p>
            <span className="wpcf7-form-control-wrap" data-name="email-739">
              <input
                size="40"
                className={`wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control  contactUsForm ${
                  errors?.email && "invalid"
                }`}
                aria-required="true"
                aria-invalid="false"
                placeholder="Write your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  const error = errors !== null && {
                    ...errors,
                  };
                  if (error.hasOwnProperty("email")) {
                    delete error.email;
                  }
                  setErrors(error);
                }}
                type="email"
                name="email-739"
              />
            </span>
          </p>
        </div>
        <div className="mb-2 message">
          <p>
            <span className="wpcf7-form-control-wrap" data-name="textarea-134">
              <textarea
                cols="40"
                rows="3"
                className={`wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control contactUsForm ${
                  errors?.message && "invalid"
                }`}
                aria-required="true"
                aria-invalid="false"
                placeholder="Write your message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  const error = errors !== null && {
                    ...errors,
                  };
                  if (error.hasOwnProperty("message")) {
                    delete error.message;
                  }
                  setErrors(error);
                }}
                name="textarea-134"
              ></textarea>
            </span>
          </p>
        </div>
        <div className="width-100">

        <ReCAPTCHA
          sitekey={API.RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onChange={handleCaptchaSubmission}
        />
        </div>
        <div className="hireBtn sumbit">
          <a
            className="hireBtn sumbitBtn contactusPage"
            style={{ cursor: "pointer" }}
            onClick={submitForm}
          >
            SUBMIT
          </a>
        </div>
      </div>
      <div className="wpcf7-response-output" aria-hidden="true"></div>
    </form>
  );
};
export default ContactUsForm;
