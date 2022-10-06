/**
  * Zesty.io Content Model Component
  * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
  *
  * Label: Dashboard Widgets
  * Name: widgets
  * Model ZUID: 6-9cb8e1fabb-3zf0q6
  * File Created On: Thu Oct 06 2022 13:29:47 GMT+0800 (Philippine Standard Time)
  *
  * Model Fields:
  *
   * type (text)
 * set_zuid (text)
 * direction (text)
 * widget_size (text)
 * position (number)
 * header (text)
 * data (textarea)
  *
  * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
  * images are objects {content.image_name.data[0].url}
  *
  * This file is expected to be customized; because of that, it is not overwritten by the integration script.
  * Model and field changes in Zesty.io will not be reflected in this comment.
  *
  * View and Edit this model's current schema on Zesty.io at https://8-ccfdbdbabf-63hhc8.manager.zesty.io/schema/6-9cb8e1fabb-3zf0q6
  *
  * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
  * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
  */
 
 import React  from 'react';
 
 function Widget({ content }) {
     return (
         <>
             {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
             <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
             <div>{content.meta.web.seo_meta_description}</div>
             {/* End of Zesty.io output example */}
         </>
     );
 }
 
 export default Widget;
 