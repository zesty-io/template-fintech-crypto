const HeroBanner = () => {
  return (
    <div className="hero-banner-eight position-relative pt-225 md-pt-150">
      <div className="container">
        <div className="row">
          <div className="col-md-7 wow fadeInLeft">
            <h1 className="hero-heading fw-500 text-white mb-45">
              Trsuted & Secure <span>Crypto</span> Market Exchange.
            </h1>
            <p className="text-lg text-white opacity-75 mb-65 lg-mb-50 pe-lg-5">
              Already have a website? Try our hosting to alive it with
              industry-leading load times.
            </p>
            <div className="d-sm-flex align-items-center">
              <a
                className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
                data-fancybox=""
                href="https://www.youtube.com/embed/aXFSJTjVjw0"
              >
                <span className="icon d-block">
                  <i className="bi bi-play"></i>
                </span>
                <div className="ps-3">
                  <span className="d-block fs-15 text-uppercase tx1">
                    Watch
                  </span>
                  <strong className="fs-18 fw-500 text-white d-block">
                    Intro Video
                  </strong>
                </div>
              </a>
              <a
                href="#"
                className="btn-sixteen fw-500 tran3s mb-25 me-4 order-sm-first"
              >
                Start Trading
              </a>
            </div>
            <h2 className="fw-500 text-white mt-60 lg-mt-30 mb-5">
              A+ Rating{' '}
            </h2>
            <p className="fs-20 opacity-50 text-white">
              Avg rating 4.8 makes us world most best apps.
            </p>
          </div>
        </div>
      </div>
      <div className="illustration-holder wow fadeInRight">
        <img
          src="images/lazy.svg"
          data-src="images/assets/ils_08.png"
          alt=""
          className="main-illustration lazy-img"
        />
        <div className="shapes shape-one rounded-circle"></div>
      </div>
      <img
        src="images/lazy.svg"
        data-src="images/shape/shape_100.svg"
        alt=""
        className="lazy-img shapes line-shape"
      />
    </div>
  );
};

export default HeroBanner;
