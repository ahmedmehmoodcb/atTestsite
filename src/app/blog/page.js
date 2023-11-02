"use client";
import axios from "axios";
import Link from "next/link";
import API from "../../api.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
  
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);


  const getBlogs = async () => {
    try {
      setLoading(true);
      const getBlogsRequest = await axios.get(`${API.BACKEND_API_URL}/blog/1`);
      const getBlogsData = await getBlogsRequest.data;
      setBlogs(getBlogsData.blogs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <section class="innerTop topMobileApp blogPageImg">
        <div class="container-fluid">
          <div class="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="topInner">
                  <div class="howworkTxt">
                    <span class="txtCom d-block">Blog </span>
                    <span class="buildTxt d-block">
                      Latest and trending blogs
                    </span>
                  </div>
                  <div class="mt-3 mt-md-5 mt-lg-5"></div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="innerParDetail text-end"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading && (
        <div className="text-center my-5">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <section className="blogImg">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row">
              {blogs?.length > 0 &&
                blogs?.map((blog) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                      <div className="postbox">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="image-sizepost"
                        >
                          <img
                            width="1280"
                            height="650"
                            src={
                              API.BACKEND_API_URL_IMAGES + blog.featuredImage
                            }
                            className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid"
                            alt="Top 5 Mobile App Development Trends in 2023"
                            decoding="async"
                            fetchpriority="high"
                            //       srcset="
                            //   https://atrule.com/wp-content/uploads/2023/07/1.jpg          1280w,
                            //   https://atrule.com/wp-content/uploads/2023/07/1-300x152.jpg   300w,
                            //   https://atrule.com/wp-content/uploads/2023/07/1-1024x520.jpg 1024w,
                            //   https://atrule.com/wp-content/uploads/2023/07/1-768x390.jpg   768w
                            // "
                            sizes="(max-width: 1280px) 100vw, 1280px"
                          />
                        </Link>
                        <div className="text-box-post">
                          <div className="time pt-3">
                            <span>July 13, 2023</span> |{" "}
                            <span className="theCategory">
                              Mobile App Development
                            </span>
                          </div>
                          <div className="pt-2 pb-3">
                            <Link
                              href={`/blog/${blog.slug}`}
                              className="custom-class-po"
                            >
                              {blog.title}
                            </Link>
                          </div>
                          <div className="post_the_content">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: blog.bodyContent,
                              }}
                            />
                          </div>
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="po-Readmore custom-readmore"
                          >
                            Read More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              ></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                <div className="postbox">
                  <Link href="/blog/innerblog" className="image-sizepost">
                    <img
                      width="1280"
                      height="650"
                      src="https://atrule.com/wp-content/uploads/2023/07/1.jpg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid"
                      alt="Top 5 Mobile App Development Trends in 2023"
                      decoding="async"
                      fetchpriority="high"
                      srcset="
                        https://atrule.com/wp-content/uploads/2023/07/1.jpg          1280w,
                        https://atrule.com/wp-content/uploads/2023/07/1-300x152.jpg   300w,
                        https://atrule.com/wp-content/uploads/2023/07/1-1024x520.jpg 1024w,
                        https://atrule.com/wp-content/uploads/2023/07/1-768x390.jpg   768w
                      "
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </Link>
                  <div className="text-box-post">
                    <div className="time pt-3">
                      <span>July 13, 2023</span> |{" "}
                      <span className="theCategory">
                        Mobile App Development
                      </span>
                    </div>
                    <div className="pt-2 pb-3">
                      <Link href="/blog/innerblog" className="custom-class-po">
                        Top 5 Mobile App Development Trends in 2023
                      </Link>
                    </div>
                    <div className="post_the_content">
                      <p>
                        In the ever-evolving world of{" "}
                        <strong>
                          <Link href="/services/mobileappdevelopment">
                            Mobile App Development
                          </Link>
                        </strong>
                        , staying ahead of the latest trends is crucial. With
                        technology advancing at a rapid pace, the year 2023
                        promises exciting developments in this field. From the
                        integration of AI to the advancement of AR and VR
                        experiences, mobile apps are set to become more
                        personalized, intelligent, and immersive than ever
                        before.
                      </p>
                    </div>
                    <Link
                      href="/blog/innerblog"
                      className="po-Readmore custom-readmore"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                <div className="postbox">
                  <Link href="/blog/innerblog" className="image-sizepost">
                    <img
                      width="1280"
                      height="650"
                      src="https://atrule.com/wp-content/uploads/2023/07/1.jpg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid"
                      alt="Top 5 Mobile App Development Trends in 2023"
                      decoding="async"
                      fetchpriority="high"
                      srcset="
                        https://atrule.com/wp-content/uploads/2023/07/1.jpg          1280w,
                        https://atrule.com/wp-content/uploads/2023/07/1-300x152.jpg   300w,
                        https://atrule.com/wp-content/uploads/2023/07/1-1024x520.jpg 1024w,
                        https://atrule.com/wp-content/uploads/2023/07/1-768x390.jpg   768w
                      "
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </Link>
                  <div className="text-box-post">
                    <div className="time pt-3">
                      <span>July 13, 2023</span> |{" "}
                      <span className="theCategory">
                        Mobile App Development
                      </span>
                    </div>
                    <div className="pt-2 pb-3">
                      <Link href="/blog/innerblog" className="custom-class-po">
                        Top 5 Mobile App Development Trends in 2023
                      </Link>
                    </div>
                    <div className="post_the_content">
                      <p>
                        In the ever-evolving world of{" "}
                        <strong>
                          <Link href="/services/mobileappdevelopment">
                            Mobile App Development
                          </Link>
                        </strong>
                        , staying ahead of the latest trends is crucial. With
                        technology advancing at a rapid pace, the year 2023
                        promises exciting developments in this field. From the
                        integration of AI to the advancement of AR and VR
                        experiences, mobile apps are set to become more
                        personalized, intelligent, and immersive than ever
                        before.
                      </p>
                    </div>
                    <Link
                      href="/blog/innerblog"
                      className="po-Readmore custom-readmore"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                <div className="postbox">
                  <Link href="/blog/innerblog" className="image-sizepost">
                    <img
                      width="1280"
                      height="650"
                      src="https://atrule.com/wp-content/uploads/2023/07/1.jpg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid"
                      alt="Top 5 Mobile App Development Trends in 2023"
                      decoding="async"
                      fetchpriority="high"
                      srcset="
                        https://atrule.com/wp-content/uploads/2023/07/1.jpg          1280w,
                        https://atrule.com/wp-content/uploads/2023/07/1-300x152.jpg   300w,
                        https://atrule.com/wp-content/uploads/2023/07/1-1024x520.jpg 1024w,
                        https://atrule.com/wp-content/uploads/2023/07/1-768x390.jpg   768w
                      "
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </Link>
                  <div className="text-box-post">
                    <div className="time pt-3">
                      <span>July 13, 2023</span> |{" "}
                      <span className="theCategory">
                        Mobile App Development
                      </span>
                    </div>
                    <div className="pt-2 pb-3">
                      <Link href="/blog/innerblog" className="custom-class-po">
                        Top 5 Mobile App Development Trends in 2023
                      </Link>
                    </div>
                    <div className="post_the_content">
                      <p>
                        In the ever-evolving world of{" "}
                        <strong>
                          <Link href="/services/mobileappdevelopment">
                            Mobile App Development
                          </Link>
                        </strong>
                        , staying ahead of the latest trends is crucial. With
                        technology advancing at a rapid pace, the year 2023
                        promises exciting developments in this field. From the
                        integration of AI to the advancement of AR and VR
                        experiences, mobile apps are set to become more
                        personalized, intelligent, and immersive than ever
                        before.
                      </p>
                    </div>
                    <Link
                      href="/blog/innerblog"
                      className="po-Readmore custom-readmore"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                <div className="postbox">
                  <Link href="/blog/innerblog" className="image-sizepost">
                    <img
                      width="1280"
                      height="650"
                      src="https://atrule.com/wp-content/uploads/2023/07/1.jpg"
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid"
                      alt="Top 5 Mobile App Development Trends in 2023"
                      decoding="async"
                      fetchpriority="high"
                      srcset="
                        https://atrule.com/wp-content/uploads/2023/07/1.jpg          1280w,
                        https://atrule.com/wp-content/uploads/2023/07/1-300x152.jpg   300w,
                        https://atrule.com/wp-content/uploads/2023/07/1-1024x520.jpg 1024w,
                        https://atrule.com/wp-content/uploads/2023/07/1-768x390.jpg   768w
                      "
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </Link>
                  <div className="text-box-post">
                    <div className="time pt-3">
                      <span>July 13, 2023</span> |{" "}
                      <span className="theCategory">
                        Mobile App Development
                      </span>
                    </div>
                    <div className="pt-2 pb-3">
                      <Link href="/blog/innerblog" className="custom-class-po">
                        Top 5 Mobile App Development Trends in 2023
                      </Link>
                    </div>
                    <div className="post_the_content">
                      <p>
                        In the ever-evolving world of{" "}
                        <strong>
                          <Link href="/services/mobileappdevelopment">
                            Mobile App Development
                          </Link>
                        </strong>
                        , staying ahead of the latest trends is crucial. With
                        technology advancing at a rapid pace, the year 2023
                        promises exciting developments in this field. From the
                        integration of AI to the advancement of AR and VR
                        experiences, mobile apps are set to become more
                        personalized, intelligent, and immersive than ever
                        before.
                      </p>
                    </div>
                    <Link
                      href="/blog/innerblog"
                      className="po-Readmore custom-readmore"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

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
