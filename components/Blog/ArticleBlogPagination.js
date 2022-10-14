const ArticleBlogPagination = ({ articles }) => {
    let thePage = 1;
  return (
    <>
      <ul className="d-flex align-items-center style-none">
        {articles.map((article,index) => {
          return (
            
              <li className="active" key={index}>
                <a href="#">{
                    thePage++
                }</a>
              </li>
            
          );
        })}
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
    </>
  );
};

export default ArticleBlogPagination;
