const FancyShortBanner = () => {
  return (
    <>
      <div className="fancy-short-banner-eleven position-relative zn2 pt-130 pb-170 lg-pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
              <div className="title-style-nine text-center wow fadeInUp mb-40">
                <h2 className="main-title text-white">
                  Get Ready to Started. It’s <span>Fast & Easy.</span> App
                </h2>
              </div>
              <p className="text-white opacity-75 text-center text-lg mt-40 mb-40 lg-mt-20 wow fadeInUp">
                Download our mobile app and start trading & earn money
              </p>

              <div className="d-sm-flex align-items-center justify-content-center platform-button-group-two">
                <a
                  href="#"
                  className="d-flex align-items-center ios-button wow fadeInLeft"
                >
                  <img
                    src="images/icon/icon_89.svg"
                    alt=""
                    className="lazy-img icon"
                  />
                  <div>
                    <span>Download on the</span>
                    <strong>App store</strong>
                  </div>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center windows-button wow fadeInRight"
                >
                  <img
                    src="images/icon/playstore.svg"
                    alt=""
                    className="lazy-img icon"
                  />
                  <div>
                    <span>Get it on</span>
                    <strong>Google play</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="shapes shape-one rounded-circle"></div>
        <div className="shapes shape-two rounded-circle"></div>
      </div>
    </>
  );
};

export default FancyShortBanner;
