import MuiMarkdown from 'mui-markdown';

const ContactBanner = ({ content }) => {
  const { description } = content || '';
  const { input_placeholder_2 } = content || '';
  const { input_placeholder_1 } = content || '';
  const { input_placeholder_3 } = content || '';
  const { address_details } = content || '';
  const { contact_details } = content || '';
  const { support_details } = content || '';
  const { icon_1 } = content || '';
  const { icon_2 } = content || '';
  const { icon_3 } = content || '';
  const {support_title} = content || ''
  const {address_title} = content || ''
  const {contact_title} = content || ''
  const {button_name} = content || ''

  return (
    <>
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundimage: 'url(images/assets/bg-17.svg)' }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Contact Us</h2>
            </div>
            <MuiMarkdown
              overrides={{
                p: {
                  component: 'p',
                  props: {
                    className: 'fs-20 mt-30 lg-mt-20',
                  },
                },
              }}
            >
              {description}
            </MuiMarkdown>
          </div>

          <div className="container">
            <div className="contact-section-two text-start mt-80 lg-mt-60">
              <div className="row">
                <div className="col-lg-7">
                  <div className="form-style-three md-mb-60 wow fadeInLeft">
                    <form
                      action="inc/contact.php"
                      id="contact-form"
                      data-toggle="validator"
                    >
                      <div className="messages"></div>
                      <div className="row controls">
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-35">
                            <label className="d-block" htmlFor={''}>
                              Name*
                            </label>
                            <input
                              type="text"
                              placeholder={input_placeholder_1}
                              name="name"
                              required="required"
                              data-error="Name is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="input-group-meta form-group mb-40">
                            <label className="d-block" htmlFor={''}>
                              Email*
                            </label>
                            <input
                              type="email"
                              placeholder={input_placeholder_2}
                              name="email"
                              required="required"
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-30">
                            <textarea
                              placeholder={input_placeholder_3}
                              name="message"
                              required="required"
                              data-error="Please,leave us a message."
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">
                            {button_name}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-5 ms-auto wow fadeInRight">
                  <div className="address-block-three d-flex mb-70 lg-mb-40 mt-20">
                    <div className="icon">
                      <img src={icon_1.data[0].url} alt="" />
                    </div>
                    <div className="text">
                      <h5 className="title">{address_title}</h5>
                      <MuiMarkdown
                        overrides={{
                          p: {
                            component: 'p',
                            props: {
                              className: '',
                            },
                          },
                        }}
                      >
                        {address_details}
                      </MuiMarkdown>
                     
                    </div>
                  </div>
                  <div className="address-block-three d-flex mb-70 lg-mb-40">
                    <div className="icon">
                      <img src={icon_2.data[0].url} alt="" />
                    </div>
                    <div className="text">
                      <h5 className="title">{contact_title}</h5>
                      <MuiMarkdown
                        overrides={{
                          p: {
                            component: 'p',
                            props: {
                              className: 'call',
                              href: 'tel:310.841.5500',
                            },
                          },
                        }}
                      >
                        {contact_details}
                      </MuiMarkdown>
                    </div>
                  </div>
                  <div className="address-block-three d-flex">
                    <div className="icon">
                      <img src={icon_3.data[0].url} alt="" />
                    </div>
                    <div className="text">
                      <h5 className="title">{ support_title }</h5>
                      <MuiMarkdown
                        overrides={{
                          p: {
                            component: 'p',
                            props: {
                              className: 'webaddress',
                              href: '#',
                            },
                          },
                        }}
                      >
                        {support_details}
                      </MuiMarkdown>
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

export default ContactBanner;
