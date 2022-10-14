import ArticleBlogSection from 'components/Blog/ArticleBlogSection';
import ArticleBlogPagination from 'components/Blog/ArticleBlogPagination';
import BlogCategory from 'components/Blog/BlogCategory';
import BlogRecentNews from 'components/Blog/BlogRecentNews';
const BlogSection = ({ content }) => {
  // const article1 = content.content.top_articles.data[0];
  const { articles } = content;
  const { categories } = content;
  const {recent_news} = content;

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
                  <ArticleBlogPagination articles={articles.data} />
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
                      <BlogCategory categories={categories.data} />
                    </ul>
                  </div>

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <BlogRecentNews news={articles.data}/>
                  </div>

                  <div
                    className="sidebar-banner-add"
                    style={{ backgroundImage: `url('${content.banner_img.data[0].url}')` }}
                  >
                    <div className="banner-content">
                      <h4>
                        {content.banner_title}
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
