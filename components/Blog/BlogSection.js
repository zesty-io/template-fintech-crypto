import ArticleBlogSection from 'components/Blog/ArticleBlogSection';

const BlogSection = ({ content }) => {
  // const article1 = content.content.top_articles.data[0];
  const { articles } = content;
  console.log(articles);
  return (
    <>
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <ArticleBlogSection articles={articles.data} />
                </div>
                <div className="page-pagination-one pt-30">
                  <ul className="d-flex align-items-center style-none">
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>...</li>
                    <li>
                      <a href="#">Last</a>
                    </li>
                    <li className="arrow">
                      <a href="#">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <form action="#">
                      <input type="text" placeholder="Search.." />
                      <button>
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <ul className="style-none">
                      <li>
                        <a href="blog-v2.html">
                          Digital <span className="float-end">(3)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-v1.html">
                          Marketing <span className="float-end">(4)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-v2.html">
                          Design <span className="float-end">(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-v3.html">
                          WordPress <span className="float-end">(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-v1.html">
                          Plugin <span className="float-end">(5)</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <div className="news-block d-flex align-items-center pt-20 pb-20 border-top">
                      <div>
                        <img
                          src="images/lazy.svg"
                          data-src="images/blog/blog_img_17.jpg"
                          alt=""
                          className="lazy-img"
                        />
                      </div>
                      <div className="post ps-4">
                        <h4 className="mb-5">
                          <a href="blog-details.html" className="title tran3s">
                            10 days quick challange forboost visitors.
                          </a>
                        </h4>
                        <div className="date">23 July, 2022</div>
                      </div>
                    </div>
                    <div className="news-block d-flex align-items-center pt-20 pb-20 border-top">
                      <div>
                        <img
                          src="images/lazy.svg"
                          data-src="images/blog/blog_img_18.jpg"
                          alt=""
                          className="lazy-img"
                        />
                      </div>
                      <div className="post ps-4">
                        <h4 className="mb-5">
                          <a href="blog-details.html" className="title tran3s">
                            Easy way to boost your business.
                          </a>
                        </h4>
                        <div className="date">23 July, 2022</div>
                      </div>
                    </div>
                    <div className="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom">
                      <div>
                        <img
                          src="images/lazy.svg"
                          data-src="images/blog/blog_img_19.jpg"
                          alt=""
                          className="lazy-img"
                        />
                      </div>
                      <div className="post ps-4">
                        <h4 className="mb-5">
                          <a href="blog-details.html" className="title tran3s">
                            Introducing new tools for your design.
                          </a>
                        </h4>
                        <div className="date">23 July, 2022</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="sidebar-banner-add"
                    style={{ backgroundImage: 'url(images/blog/ad-bg.jpg)' }}
                  >
                    <div className="banner-content">
                      <h4>
                        Banner Advertise <br />
                        Heading
                      </h4>
                      <p>From its medieval origins digital</p>
                      <a href="#" className="btn-twentyOne fw-500 tran3s">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
