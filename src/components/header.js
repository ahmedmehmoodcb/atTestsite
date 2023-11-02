"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const checkServiceSectionTrue = () => {
    if (
      pathname == "/services" ||
      pathname == "/services/mobileappdevelopment" ||
      pathname == "/services/webdevelopment" ||
      pathname == "/services/ecommerce" ||
      pathname == "/services/uiuxdesign" ||
      pathname == "/services/softwaredevelopment" ||
      pathname == "/services/" ||
      pathname == "/services/mobileappdevelopment/" ||
      pathname == "/services/webdevelopment/" ||
      pathname == "/services/ecommerce/" ||
      pathname == "/services/uiuxdesign/" ||
      pathname == "/services/softwaredevelopment/"
    ) {
      return true;
    } else {
      return false;
    }
  };

  let closeNavbarAutomatically = () => {
    const findNavbarContent = document.getElementById("navbarSupportedContent");
    if (findNavbarContent.classList.contains("show")) {
      let findNavbarButton = document.getElementById(
        "navbar-toggler-button-open-and-close-navbar"
      );
      findNavbarButton.click();
    }
    const findCollapse = document.getElementById("collapseExample");
    if (findCollapse.classList.contains("show")) {
      let findElement = document.getElementById(
        "mobile-navbar-collapse-control-button"
      );
      findElement.click();
    }
  };

  let closeSubNavbarAutomatically = () => {
    let findNavbarButton = document.getElementById(
      "navbar-toggler-button-open-and-close-navbar"
    );
    findNavbarButton.click();
    let findElement = document.getElementById(
      "mobile-navbar-collapse-control-button"
    );
    findElement.click();
  };

  return (
    <>
      <div
        className={`mainGg ${
          pathname !== "/" ? "innerPageBorder innerHome" : ""
        }`}
      >
        <div className="px-0 px-md-2 px-lg-3 px-xl-5 mx-0 mx-md-2 mx-lg-3 mx-xl-5 pb-3 pb-md-0 ">
          <header className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary desktop">
              <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                  <Image
                    src="/assets/images/logo-new.png"
                    className="logo position-static"
                    width={58}
                    height={81}
                    alt="Logo"
                    // layout="fill"
                    // objectFit="contain"
                  />
                </Link>
                <button
                  className="navbar-toggler navbar-toggler-iconNew"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i
                    className="navbar-toggler-iconNew fa fa-bars"
                    aria-hidden="true"
                  ></i>
                </button>
                <div
                  className="collapse navbar-collapse in justify-content-end"
                  id="navbarSupportedContent1"
                >
                  <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll right-nav homeNavBar">
                    <li className="nav-item">
                      <Link
                        className={`nav-link main-header-link ${
                          (pathname == "/about" || pathname == "/about/") &&
                          "active"
                        } `}
                        aria-current="page"
                        href="/about"
                      >
                        About Atrule
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          (pathname == "/products" ||
                            pathname == "/products/") &&
                          "active"
                        }`}
                        href="/products"
                      >
                        Products
                      </Link>
                    </li>
                    <li className="nav-item dropdown" data-dropdown="dropdown">
                      <Link
                        className={`nav-link ${
                          checkServiceSectionTrue() && "active"
                        }`}
                        href="/services"
                      >
                        <span
                          role="button"
                          className="dropdown-toggle"
                          aria-expanded="false"
                          data-hover="dropdown"
                        >
                          Services
                        </span>
                      </Link>
                      <ul className="dropdown-menu mainHeaderMenu">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/mobileappdevelopment"
                          >
                            <Image
                              src="/assets/images/Group.png"
                              alt="App Development"
                              className="position-static"
                              width={24}
                              height={24}
                            />{" "}
                            App Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/webdevelopment"
                          >
                            <Image
                              src="/assets/images/Group-1.png"
                              className="position-static"
                              width={24}
                              height={24}
                              alt="Web Development"
                            />{" "}
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/ecommerce"
                          >
                            <Image
                              src="../assets/images/Group-3.png"
                              alt="eCommerce"
                              className="position-static"
                              width={28}
                              height={24}
                            />
                            eCommerce
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/uiuxdesign"
                          >
                            <Image
                              src="/assets/images/Group-2.png"
                              alt="UI/UX Design"
                              className="position-static"
                              width={24}
                              height={24}
                            />{" "}
                            UI/UX Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/softwaredevelopment"
                          >
                            <Image
                              src="/assets/images/Group-4.png"
                              alt="Software Development"
                              className="position-static"
                              width={24}
                              height={24}
                            />{" "}
                            Software Development
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          (pathname == "/work" || pathname == "/work/") &&
                          "active"
                        }`}
                        href="/work"
                      >
                        Work
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          pathname.startsWith("/blog") && "active"
                        }`}
                        href="/blog"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li className="nav-item contactUs">
                      <Link className="nav-link" href="/contactus">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mobile">
              <div className="container-fluid">
                <Link
                  className="navbar-brand flex-grow-1 bd-highlight"
                  href="/"
                  onClick={closeNavbarAutomatically}
                >
                  <Image
                    src="/assets/images/logo-new.png"
                    className="logo position-static"
                    alt="Logo"
                    width={58}
                    height={81}
                  />
                </Link>

                <div className="nav-item contactUs">
                  <Link className="nav-link" href="/contactus">
                    CONTACT US
                  </Link>
                </div>

                <button
                  className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  id="navbar-toggler-button-open-and-close-navbar"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Image
                    src="/assets/images/bar.png"
                    alt=""
                    style={{ width: "22px" }}
                    className="position-static"
                    width={22}
                    height={22}
                  />
                </button>
                <div
                  className="collapse navbar-collapse in justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll right-nav homeNavBar">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        href="/about"
                        onClick={closeNavbarAutomatically}
                      >
                        About Atrule
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="/products"
                        onClick={closeNavbarAutomatically}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="nav-item dropdown ">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <Link
                            className="nav-link "
                            href="/services"
                            role="button"
                            onClick={closeNavbarAutomatically}
                          >
                            Services
                          </Link>
                        </div>
                        <div>
                          <button
                            className="btn p-0 m-0 nav-link dropdown-toggle"
                            style={{
                              background: "transparent",
                              float: "right",
                            }}
                            id="mobile-navbar-collapse-control-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          ></button>
                        </div>
                      </div>
                    </li>
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                        <ul className="mainHeaderMenu mainHeaderMenu-collapse-links p-0">
                          <li className="py-2">
                            <Link
                              className="dropdown-item"
                              href="/services/mobileappdevelopment"
                              onClick={closeSubNavbarAutomatically}
                            >
                              <Image
                                src="/assets/images/Group.png"
                                alt="App Development"
                                className="position-static"
                                width={34}
                                height={24}
                              />{" "}
                              App Development
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link
                              className="dropdown-item"
                              href="/services/webdevelopment"
                              onClick={closeSubNavbarAutomatically}
                            >
                              <Image
                                src="/assets/images/Group-1.png"
                                alt="Web Development"
                                className="position-static"
                                width={30}
                                height={24}
                              />{" "}
                              Web Development
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link
                              className="dropdown-item"
                              href="/services/ecommerce"
                              onClick={closeSubNavbarAutomatically}
                            >
                              <Image
                                src="../assets/images/Group-3.png"
                                alt="eCommerce"
                                className="position-static"
                                width={35}
                                height={24}
                              />
                              eCommerce
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link
                              className="dropdown-item"
                              href="/services/uiuxdesign"
                              onClick={closeSubNavbarAutomatically}
                            >
                              <Image
                                src="/assets/images/Group-2.png"
                                alt="UI/UX Design"
                                className="position-static"
                                width={32}
                                height={24}
                              />{" "}
                              UI/UX Design
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link
                              className="dropdown-item"
                              href="/services/softwaredevelopment"
                              onClick={closeSubNavbarAutomatically}
                            >
                              <Image
                                src="/assets/images/Group-4.png"
                                alt="Software Development"
                                className="position-static"
                                width={32}
                                height={24}
                              />{" "}
                              Software Development
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="/work"
                        onClick={closeNavbarAutomatically}
                      >
                        Work
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="/blog"
                        onClick={closeNavbarAutomatically}
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}
