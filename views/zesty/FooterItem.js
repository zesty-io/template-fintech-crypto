/**
  * Zesty.io Content Model Component
  * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
  *
  * Label: Footer Items
  * Name: footer_items
  * Model ZUID: 6-f6969bebf7-x05r4c
  * File Created On: Mon Oct 10 2022 20:47:19 GMT+0800 (Philippine Standard Time)
  *
  * Model Fields:
  *
   * footer_title (text)
 * internal_url (internal_link)
 * external_url (link)
 * sort_by (sort)
 * column_number (number)
  *
  * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
  * images are objects {content.image_name.data[0].url}
  *
  * This file is expected to be customized; because of that, it is not overwritten by the integration script.
  * Model and field changes in Zesty.io will not be reflected in this comment.
  *
  * View and Edit this model's current schema on Zesty.io at https://8-ccfdbdbabf-63hhc8.manager.zesty.io/schema/6-f6969bebf7-x05r4c
  *
  * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
  * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
  */
 
 import React  from 'react';
 
 function FooterItem({ content }) {
     return (
         <>
             {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
             <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
             <div>{content.meta.web.seo_meta_description}</div>
             {/* End of Zesty.io output example */}
         </>
     );
 }
 
 export default FooterItem;
 