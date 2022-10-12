/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Blog
 * Name: blog
 * Model ZUID: 6-ec8caa9fa7-xzl2f6
 * File Created On: Thu Oct 06 2022 13:29:47 GMT+0800 (Philippine Standard Time)
 *
 * Model Fields:
 *
 * blog_title (text)
 * top_articles (one_to_many)
 * category_title (text)
 * categories (one_to_many)
 * recent_news_title (text)
 * recent_news (one_to_many)
 * cta_card (one_to_many)
 * article_highlight (one_to_one)
 * eyebrow (text)
 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-ccfdbdbabf-63hhc8.manager.zesty.io/schema/6-ec8caa9fa7-xzl2f6
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import FeatureSection from 'components/Blog/FeatureSection';
import BlogSection from 'components/Blog/BlogSection';

import React from 'react';

function Blog({ content }) {
console.log(content)

  return (
    <>
      <div className="main-page-wrapper">
        <FeatureSection content={content} />
        <BlogSection content={content} />
      </div>
    </>
  );
}

export default Blog;
