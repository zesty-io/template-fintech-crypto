const BlogCategory = ({ categories }) => {
  return (
    <>
      {categories.map((category, i) => {
        return (
            <li key={i}>
              <a href="blog-v2.html">
                {category.category_name} <span className="float-end"></span>
              </a>
            </li>
        );
      })}
    </>
  );
};

export default BlogCategory;
