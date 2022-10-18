
import Banner from 'components/Product/Banner'
import FeatureSection from 'components/Product/FeatureSection'

const ServicePage = ({content}) => {
  

  return (
    <>
      
      <Banner content={content}/>
      <FeatureSection content={content}/>

      <div className="fancy-feature-fiftyFour p-30 mt-50 lg-mt-40">
        <div className="bg-wrapper position-relative zn2 pt-110 lg-pt-80 pb-110 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 wow fadeInLeft">
                <div className="title-style-one">
                  <div className="sc-title text-uppercase">Why us?</div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>choose</span> Jano.
                  </h2>
                </div>
                <p className="text-lg mt-40 lg-mt-20">
                  We helping our client to fullfill their needs with our expert.
                </p>
                <img
                  src="images/lazy.svg"
                  data-src="images/shape/shape_179.svg"
                  alt=""
                  className="lazy-img d-none d-lg-block mt-40"
                />
              </div>
              <div className="col-lg-7 ms-auto wow fadeInRight">
                <div className="bg-white pe-3 ps-3 pe-lg-5 ps-lg-5 pt-15 pb-15 ms-xxl-4 rounded-3 md-mt-40">
                  <div
                    className="accordion accordion-style-two"
                    id="accordionOne"
                  >
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Google ads setup & management
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionOne"
                      >
                        <div className="accordion-body">
                          <p>
                            Our founders Dustin Moskovitz and Justin Rosenstein
                            met while leading Engineering teams at Facebook.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Web Design & Development
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionOne"
                      >
                        <div className="accordion-body">
                          <p>
                            Our founders Dustin Moskovitz and Justin Rosenstein
                            met while leading Engineering teams at Facebook.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Reputation management
                        </button>
                      </div>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionOne"
                      >
                        <div className="accordion-body">
                          <p>
                            Our founders Dustin Moskovitz and Justin Rosenstein
                            met while leading Engineering teams at Facebook.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/lazy.svg"
            data-src="images/shape/shape_11.svg"
            alt=""
            className="lazy-img shapes shape-one"
          />
          <img
            src="images/lazy.svg"
            data-src="images/shape/shape_13.svg"
            alt=""
            className="lazy-img shapes shape-two"
          />
          <img
            src="images/lazy.svg"
            data-src="images/shape/shape_10.svg"
            alt=""
            className="lazy-img shapes shape-three"
          />
          <img
            src="images/lazy.svg"
            data-src="images/shape/shape_12.svg"
            alt=""
            className="lazy-img shapes shape-four"
          />
        </div>
      </div>

      <div className="feedback-section-one zn2 position-relative wow fadeInUp">
        <div className="bg-white zn2 position-relative pt-150 lg-pt-100">
          <div className="shapes shape-two"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 m-auto">
                <div className="title-style-one text-center">
                  <h2 className="main-title fw-bold tx-dark m0">
                    What’s <span>Our Client</span> Say About us.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="inner-content mt-100 lg-mt-60">
            <div className="feedback_slider_one">
              <div className="item">
                <div className="feedback-block-one pt-45 align-items-end d-sm-flex">
                  <div className="img-meta position-relative">
                    <img
                      src="images/media/img_02.png"
                      alt=""
                      className="m-auto"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div
                      className="icon d-flex align-items-center justify-content-center rounded-circle mb-15"
                      style={{backgroundColor:'#825EFF'}}
                    >
                      <img src="images/icon/icon_07.svg" alt="" />
                    </div>
                    <div className="rating h3 fw-bold tx-dark">
                      Very solid, 8.3 out 10
                    </div>
                    <p className="text-lg pt-35 pb-20">
                      We’v 9,000 agents across are country, Find agents near
                      your neighborhood.
                    </p>
                    <h6>
                      Martin Jonas, <span className="opacity-25">USA</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feedback-block-one pt-45 align-items-end d-sm-flex">
                  <div className="img-meta position-relative">
                    <img
                      src="images/media/img_03.png"
                      alt=""
                      className="m-auto"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div
                      className="icon d-flex align-items-center justify-content-center rounded-circle mb-15"
                      style={{backgroundColor:'#08CE97'}}
                    >
                      <img src="images/icon/icon_07.svg" alt="" />
                    </div>
                    <div className="rating h3 fw-bold tx-dark">
                      Very solid, 7.2 out 10
                    </div>
                    <p className="text-lg pt-35 pb-20">
                      We’v 9,000 agents across are country, Find agents near
                      your neighborhood.
                    </p>
                    <h6>
                      Martin Jonas, <span className="opacity-25">USA</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feedback-block-one pt-45 align-items-end d-sm-flex">
                  <div className="img-meta position-relative">
                    <img
                      src="images/media/img_02.png"
                      alt=""
                      className="m-auto"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div
                      className="icon d-flex align-items-center justify-content-center rounded-circle mb-15"
                      style={{backgroundColor:'#FF8A3A'}}
                    >
                      <img src="images/icon/icon_07.svg" alt="" />
                    </div>
                    <div className="rating h3 fw-bold tx-dark">
                      Very solid, 9.1 out 10
                    </div>
                    <p className="text-lg pt-35 pb-20">
                      We’v 9,000 agents across are country, Find agents near
                      your neighborhood.
                    </p>
                    <h6>
                      Martin Jonas, <span className="opacity-25">USA</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feedback-block-one pt-45 align-items-end d-sm-flex">
                  <div className="img-meta position-relative">
                    <img
                      src="images/media/img_03.png"
                      alt=""
                      className="m-auto"
                    />
                  </div>
                  <div className="text-wrapper">
                    <div
                      className="icon d-flex align-items-center justify-content-center rounded-circle mb-15"
                      style={{backgroundColor:'#08CE97'}}
                    >
                      <img src="images/icon/icon_07.svg" alt="" />
                    </div>
                    <div className="rating h3 fw-bold tx-dark">
                      Very solid, 10 out 10
                    </div>
                    <p className="text-lg pt-35 pb-20">
                      We’v 9,000 agents across are country, Find agents near
                      your neighborhood.
                    </p>
                    <h6>
                      Martin Jonas, <span className="opacity-25">USA</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto text-center">
              <div className="title-style-one wow fadeInUp">
                <h2 className="main-title fw-bold tx-dark m0">
                  Ready to take plan? It’s just a matter of{' '}
                  <span>one clike</span>
                </h2>
              </div>
              <p
                className="text-lg tx-dark pt-40 pb-35 lg-pt-30 lg-pb-20 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Try it risk free — we don’t charge cancellation fees.
              </p>
              <a
                href="#"
                className="btn-two fs-18 fw-500 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Purchase Now
              </a>
            </div>
          </div>
        </div>
        <img
          src="images/lazy.svg"
          data-src="images/shape/shape_20.svg"
          alt=""
          className="lazy-img shapes shape-one"
          style={{
            top:'5%',
            left: '10%'
          }}
        />
        <img
          src="images/lazy.svg"
          data-src="images/shape/shape_21.svg"
          alt=""
          className="lazy-img shapes shape-two"
          style={{
            bottom:'-4%',
             left: '18%'
          }}
        />
        <img
          src="images/lazy.svg"
          data-src="images/shape/shape_22.svg"
          alt=""
          className="lazy-img shapes shape-three"
          style={{
            bottom:'-4%', 
            right: '23%'
          }}
        />
        <img
          src="images/lazy.svg"
          data-src="images/shape/shape_23.svg"
          alt=""
          className="lazy-img shapes shape-four"
          style={{
            top:'-3%',
            right: '14%'
          }}
        />
      </div>

      <div className="fancy-short-banner-one mt-170 lg-mt-120">
        <div className="container">
          <div className="bg-wrapper position-relative wow fadeInUp">
            <div className="shapes shape-one"></div>
            <div className="inner-wrapper">
              <div className="subscribe-area">
                <div className="row align-items-end">
                  <div className="col-lg-6">
                    <div className="title-style-two">
                      <div className="sc-title fw-500 ">Subscirbe Now</div>
                      <h4 className="main-title fw-bold tx-dark">
                        New user? Start your free trial now.
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="email" placeholder="Email address" />
                        <button className="tran3s position-absolute">
                          Subscribe
                        </button>
                      </form>
                      <p className="m0 pt-10">
                        Already a member?{' '}
                        <a href="#" className="tx-dark">
                          Sign in.
                        </a>
                      </p>
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

export default ServicePage;
