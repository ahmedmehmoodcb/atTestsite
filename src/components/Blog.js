"use client";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import API from "../api.json";
const Blog = ({ slug }) => {
  const param = useParams();
  const router = useRouter();
  const blogId = slug;

  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiSuccess, setApiSuccess] = useState("");

  const [error, setError] = useState("");

  const formateDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = inputDate.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const getBlogs = async () => {
    try {
      setLoading(true);
      const getBlogsRequest = await axios.get(`${API.BACKEND_API_URL}/blog/1`);
      const getBlogsData = await getBlogsRequest.data;
      if (getBlogsData && getBlogsData?.blogs?.length > 0) {
        let allBlogs = getBlogsData.blogs.filter((item) => item.slug != blogId);
        setBlogs(allBlogs);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getSingleBlog = async () => {
    try {
      setLoading(true);
      const getSingleBlogRequest = await axios.get(
        `${API.BACKEND_API_URL}/blog/single/${blogId}`
      );
      const getSingleBlogData = await getSingleBlogRequest.data;
      if (getSingleBlogData?.type == "error") {
        setError("Blog Does not Exist");
      }
      setBlog(getSingleBlogData.blog);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Internal server error occurs");
    }
  };

  useEffect(() => {
    getBlogs();
    getSingleBlog();
  }, []);

  return (
    <>
      <section className="inner-blog">
        <div className="container-fluid">
          <div className="px-2 px-md-2 px-lg-3 px-xl-5 mx-2 mx-md-2 mx-lg-3 mx-xl-5">
            <div className="row min-vh-100">
              {loading ? (
                <div className="text-center my-5">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : blog ? (
                <>
                  <div className="col-sm-12 col-md-12 col-lg-8">
                    <h2 className="inner-blog-title">{blog?.title}</h2>
                    {blog && (
                      <>
                        <div className="post_the_content">
                          <p>
                            Posted on{" "}
                            <a href="#" className="fw-bold">
                              {formateDate(blog?.createdDate)}
                            </a>
                          </p>
                        </div>
                        <div className="blog-img">
                          <img
                            src={
                              API.BACKEND_API_URL_IMAGES + blog?.featuredImage
                            }
                            className="img-fluid"
                          />
                        </div>
                      </>
                    )}
                    <span
                      id="blog-inner-data-backend"
                      dangerouslySetInnerHTML={{ __html: blog?.bodyContent }}
                    />
                  </div>

                  <div className="col-sm-12 col-md-12 col-lg-4">
                    {blog && (
                      <div className="recent-posts">
                        <h2 className="title">Recent Posts</h2>
                      </div>
                    )}
                    {blog &&
                      blogs.length > 0 &&
                      blogs.map((blog) => {
                        return (
                          <p
                            className="recent-post pb-2"
                            onClick={() => {
                              router.push(`/blog/${blog.slug}`);
                            }}
                          >
                            <Link
                              className="py-3 text-decoration-none"
                              href={`/blog/${blog.slug}`}
                            >
                              {blog.title}
                            </Link>
                          </p>
                        );
                      })}
                  </div>
                </>
              ) : (
                error && <h2 className="text-center">{error}</h2>
              )}
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

      <div className="clearfix"></div>
    </>
  );
};

export default Blog;
