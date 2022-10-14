import { useState, useEffect } from 'react';

const BlogRecentNews = ({ news }) => {
  const [ sortedNews, setSortedNews ] = useState(news);

  useEffect(() => {

    const x = [...news].sort((a, b) => {
      let newA = new Date(a.date);
      let newB = new Date(b.date);

      return Date.parse(newB) - Date.parse(newA);
    });

    setSortedNews(x.slice(0,3));
    
  }, []);
    
  return (
    <>
        {
            sortedNews.map((nw,i)=>{
                return(
                <div className="news-block d-flex align-items-center pt-20 pb-20 border-top" key={i}>
                <div>
                  <img
                    src={nw.image.data[0].url}
                    data-src="images/blog/blog_img_17.jpg"
                    alt=""
                    className="lazy-img"
                  />
                </div>
                <div className="post ps-4">
                  <h4 className="mb-5">
                    <a href="blog-details.html" className="title tran3s">
                      {nw.title}
                    </a>
                  </h4>
                  <div className="date">{nw.date}</div>
                </div>
              </div>
              )
            })

        }
     
    </>
  );
};

export default BlogRecentNews;
