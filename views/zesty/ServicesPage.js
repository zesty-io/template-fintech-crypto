/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Services pages
 * Name: services_pages
 * Model ZUID: 6-86f6cda7c6-kdtng0
 * File Created On: Thu Oct 06 2022 13:29:47 GMT+0800 (Philippine Standard Time)
 *
 * Model Fields:
 *
 * title (text)
 * description (textarea)
 * header_image (images)
 * block_2_h2 (text)
 * block_2_description (wysiwyg_basic)
 * services_cards (one_to_many)
 * block_3_title_description (wysiwyg_basic)
 * dropdown_1 (wysiwyg_basic)
 * dropdown_2 (wysiwyg_basic)
 * dropdown_3 (wysiwyg_basic)
 * testimonial_header (text)
 * testimonials (one_to_many)
 * cta_area_title_and_description (wysiwyg_basic)
 * cta_button (text)
 * cta_button_link (internal_link)
 * subscribe_block (wysiwyg_basic)
 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-ccfdbdbabf-63hhc8.manager.zesty.io/schema/6-86f6cda7c6-kdtng0
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import ServicePage from 'components/Product/ServicePage';

function ServicesPage({ content }) {
  return (
    <>
      <div>
        <ServicePage content={content} />
      </div>
    </>
  );
}

export default ServicesPage;
