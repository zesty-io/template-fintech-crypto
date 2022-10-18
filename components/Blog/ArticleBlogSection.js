// const fetch = require('node-fetch');
// const configs = require('../../zesty.config.json');
// import { React, useState, useEffect } from 'react';

const ArticleBlogSection = ({ articles }) => {
  //   const [articles, setArticles] = useState([]);
  //   async function fetchData(url) {
  //     console.log('fetching data from: ', url);
  //     let res = await fetch(url);
  //     let data = await res.json();
  //     setArticles(data);
  //   }

  //   useEffect(() => {
  //     // fetch request
  //     let data = fetchData(`${stageURL}/allarticles.json?zpw=e36863`);
  //   }, []);

  return (
    <>
      {articles.map((article, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-6">
              <article className="blog-meta-three mb-60 lg-mb-40 wow fadeInUp">
                <figure className="post-img m0">
                  <a href="#" className="w-100 d-block">
                    <img
                      src={article.image.data[0].url}
                      data-src="images/blog/blog_img_20.jpg"
                      alt=""
                      className="lazy-img w-100 tran4s"
                    />
                  </a>
                </figure>
                <div className="post-data mt-30">
                  <div className="post-date opacity-75 text-uppercase">
                    {article.date}
                  </div>
                  <a href="blog-details" className="mt-10 mb-15">
                    <h4 className="tran3s blog-title fw-normal tx-dark">
                      {article.title}
                    </h4>
                  </a>
                  <div>
                    <a
                      href="blog-details"
                      className="read-btn-two fw-500 tran3s"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArticleBlogSection;
