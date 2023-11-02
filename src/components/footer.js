"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      <div className="clearfix"></div>
      <footer className="footer mt-2 mt-md-2 mt-lg-1 pt-2 pt-md-2 pt-lg-1">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row borderFooterbottom">
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <div className="footerNav">
                  <ul>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/products">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blogs</Link>
                    </li>
                  </ul>
                </div>
                <div className="address mt-4">
                  <div className="footerVisit">Visit Us</div>
                  <ul className="footerMap">
                    <li>
                      <div>
                        <Image
                          src="/assets/images/footerMap.png"
                          alt="map"
                          className="position-static"
                          width={12}
                          height={17}
                        />
                      </div>
                      <div>
                        <a href="#">
                          Office no 201, 2nd Floor, Al-Hafeez Executive, Gulberg
                          III, Lahore, Pakistan
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <Image
                          src="/assets/images/footerMap.png"
                          alt="Map"
                          className="position-static"
                          width={12}
                          height={17}
                        />
                      </div>
                      <div>
                        <a href="#">
                          Office no 6, 2nd Floor, Khawar Centre, Multan Cantt,
                          Pakistan
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                <div className="address">
                  <div className="footerVisit">Important Links</div>
                  <ul className="footerMap mt-4">
                    {/* <li>
                      <Link href="#">Desktop App Development</Link>
                    </li> */}
                    <li>
                      <Link href="/services/mobileappdevelopment">
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/webdevelopment">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ecommerce">eCommerce Website</Link>
                    </li>
                    <li>
                      <Link href="/services/uiuxdesign">
                        Web Designing (UI,UX)
                      </Link>
                    </li>

                    {/* <li>
                      <Link href="#">Graphic Designing</Link>
                    </li> */}
                    <li>
                      <Link href="/services/softwaredevelopment">
                        Software Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                <div className="address mt-5">
                  <ul className="footerMap mt-4">
                    {/* <li>
                      <Link href="#">CRM Development</Link>
                    </li> */}
                    {/* <li>
                      <a href="#">Digital Marketing Services</a>
                    </li>
                    <li>
                      <a href="#">PPC Services</a>
                    </li>
                    <li>
                      <a href="#">SEO Services</a>
                    </li>
                    <li>
                      <a href="#">E-Mail Marketing</a>
                    </li>
                    <li>
                      <a href="#">Search Engine Marketing</a>
                    </li>
                    <li>
                      <a href="#">Content Marketing</a>
                    </li>
                    <li>
                      <a href="#">Social Media Marketing</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div className="footer-social-icon pb-3 text-end">
                  <div className="social-icons">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/70936846"
                    >
                      {/* <i className="fab fa-linkedin"></i> */}
                      <Icon width={24} icon="uil:linkedin" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/atruletech"
                    >
                      {/* <i className="fab fa-facebook-f"></i> */}
                      <Icon width={24} icon="bxl:facebook" />
                    </a>
                    <a target="_blank" href="https://twitter.com/Atruletech">
                      {/* <i className="fab fa-twitter"></i> */}
                      <Icon width={24} icon="bi:twitter" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.pinterest.com/atruletech"
                    >
                      {/* <i className="fab fa-pinterest-p"></i> */}
                      <Icon width={24} icon="formkit:pinterest" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/atruletechnologiess/"
                    >
                      {/* <i className="fab fa-instagram"></i> */}
                      <Icon width={24} icon="iconoir:instagram" />
                    </a>
                  </div>
                </div>
                <div className="phone">
                  <div className="phone1">
                    <Image
                      src="/assets/images/whatsapp.png"
                      alt="image"
                      className="custom-img-footer position-static"
                      width={14}
                      height={15}
                    />
                    <a href="tel:+923042229245">+92 3042229245</a>
                  </div>
                  <div className="phone1">
                    <Image
                      src="/assets/images/phone.png"
                      alt="image"
                      className="custom-img-footer position-static"
                      width={15}
                      height={16}
                    />
                    <a href="tel:+923042229241">+92 3042229241</a>
                  </div>
                  <div className="phone1">
                    <Image
                      src="/assets/images/email.png"
                      alt="image"
                      className="custom-img-footer position-static"
                      width={15}
                      height={13}
                    />
                    <a href="mailto:hello@atrule.com">hello@atrule.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 mt-md-5 mt-lg-5 mt-xl-5 mb-3 mb-md-5 mb-lg-5 mb-xl-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="copyRight">
                  © 2023 Atrule Technologies. All rights reserved.
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="text-center footerLogo">
                  <Link href="/">
                    <Image
                      src="https://atrule.s3.us-east-2.amazonaws.com/public/assets/images/logo-new.png"
                      alt="Logo"
                      className="position-static"
                      width={51}
                      height={71}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="termsandcon text-end">
                  {/* <a href="#">Terms of Service </a> */}
                  <Link href="/privacy">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
