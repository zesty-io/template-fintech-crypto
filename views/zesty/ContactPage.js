/**
  * Zesty.io Content Model Component
  * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
  *
  * Label: Contact page
  * Name: contact_page
  * Model ZUID: 6-bac3cbded7-jmfh5t
  * File Created On: Thu Oct 06 2022 13:29:47 GMT+0800 (Philippine Standard Time)
  *
  * Model Fields:
  *
   * title_and_description (wysiwyg_basic)
 * address (wysiwyg_basic)
 * contact_info (wysiwyg_basic)
 * support (wysiwyg_basic)
 * icon_1 (images)
 * icon_2 (images)
 * icon_3 (images)
  *
  * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
  * images are objects {content.image_name.data[0].url}
  *
  * This file is expected to be customized; because of that, it is not overwritten by the integration script.
  * Model and field changes in Zesty.io will not be reflected in this comment.
  *
  * View and Edit this model's current schema on Zesty.io at https://8-ccfdbdbabf-63hhc8.manager.zesty.io/schema/6-bac3cbded7-jmfh5t
  *
  * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
  * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
  */
 
 import React  from 'react';
 import ContactBanner from 'components/Contact/ContactBanner';
 
 function ContactPage({ content }) {
     return (
         <>
           
            <ContactBanner content={content}/>
            
         </>
     );
 }
 
 export default ContactPage;
 