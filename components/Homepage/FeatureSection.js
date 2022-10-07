const FeatureSection = (content) => {
  const mainContext1 = content.content.homepage_tiles.data[0].main_text;
  const mainContext1__description = content.content.homepage_tiles.data[0].description;
  const mainContext1__img = content.content.homepage_tiles.data[0].main_image.data[0].url;

  const mainContext2 = content.content.homepage_tiles.data[1].main_text;
  const mainContext2__description = content.content.homepage_tiles.data[1].description;
  const mainContext2__img = content.content.homepage_tiles.data[1].main_image.data[0].url;

  const mainContext3 = content.content.homepage_tiles.data[2].main_text;
  const mainContext3__description = content.content.homepage_tiles.data[2].description;
  const mainContext3__img = content.content.homepage_tiles.data[2].main_image.data[0].url;

  const zuid = content.content.homepage_tiles.data[0].main_image.data[0].zuid;

  console.log(zuid);

  return (
    <div className="fancy-feature-twentySix position-relative zn2 pt-150 lg-pt-80">
      <div className="wrapper-xl m-auto wow fadeInUp">
        <div className="bg mb-200 lg-mb-80">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="trade-meta-block">
                <div className="d-sm-flex justify-content-between">
                  <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_75.png"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                  <div className="meta-point d-inline-flex align-items-center justify-content-between xs-mt-20">
                    <div className="pe-lg-4">
                      <div className="cr-name text-uppercase">BTC</div>
                      <div className="cr-point text-white opacity-75 fs-15">
                        1.34500
                      </div>
                    </div>
                    <div className="ms-5 text-center">
                      <div className="arrow arrow-up">
                        <i className="bi bi-caret-up-fill"></i>
                      </div>
                      <div className="cr-value">+14%</div>
                    </div>
                  </div>
                </div>
                <div className="mt-15 d-sm-flex justify-content-between align-items-center">
                  <img
                    src="images/shape/shape_103.svg"
                    alt=""
                    className="wow fadeInUp order-sm-last"
                  />
                  <div className="btc-balance xs-mt-10 text-white fw-500">
                    $<span className="counter">42,530.2310</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trade-meta-block">
                <div className="d-sm-flex justify-content-between">
                  <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_76.png"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                  <div className="meta-point d-inline-flex align-items-center justify-content-between xs-mt-20">
                    <div className="pe-lg-4">
                      <div className="cr-name text-uppercase">DESH</div>
                      <div className="cr-point text-white opacity-75 fs-15">
                        1.42800
                      </div>
                    </div>
                    <div className="ms-5 text-center">
                      <div className="arrow arrow-down">
                        <i className="bi bi-caret-down-fill"></i>
                      </div>
                      <div className="cr-value">-11%</div>
                    </div>
                  </div>
                </div>
                <div className="mt-15 d-sm-flex justify-content-between align-items-center">
                  <img
                    src="images/shape/shape_104.svg"
                    alt=""
                    className="wow fadeInUp order-sm-last"
                  />
                  <div className="btc-balance xs-mt-10 text-white fw-500">
                    $<span className="counter">3,210.2390</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trade-meta-block border-0">
                <div className="d-sm-flex justify-content-between">
                  <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_77.png"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                  <div className="meta-point d-inline-flex align-items-center justify-content-between xs-mt-20">
                    <div className="pe-lg-4">
                      <div className="cr-name text-uppercase">BTC</div>
                      <div className="cr-point text-white opacity-75 fs-15">
                        1.34500
                      </div>
                    </div>
                    <div className="ms-5 text-center">
                      <div className="arrow arrow-up">
                        <i className="bi bi-caret-up-fill"></i>
                      </div>
                      <div className="cr-value">+14%</div>
                    </div>
                  </div>
                </div>
                <div className="mt-15 d-sm-flex justify-content-between align-items-center">
                  <img
                    src="images/shape/shape_105.svg"
                    alt=""
                    className="wow fadeInUp order-sm-last"
                  />
                  <div className="btc-balance xs-mt-10 text-white fw-500">
                    $<span className="counter">51,530.2310</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title-style-nine text-center wow fadeInUp mb-60 lg-mb-30">
          <h2 className="main-title text-white">
            Trusted <span>Cryptocurrency</span> Platform
          </h2>
          <p className="text-white opacity-50 fs-20 pt-15">
            jano has a variety of features that make it the best place to start
            trading
          </p>
        </div>

        <div className="row gx-xxl-5">
          <div className="col-lg-4 col-md-6">
            <div className="card-style-twelve text-center position-relative mt-40 wow fadeInUp">
              <div className="icon d-flex align-items-center justify-content-center">
                <img
                  src={mainContext1__img}
                  data-src="images/icon/icon_78.png"
                  alt=""
                  className="lazy-img"
                />
              </div>
              <h4 className="text-white mb-10 mt-25">{mainContext1}</h4>
              <p className="text-white opacity-75 mb-25">
                {mainContext1__description}
              </p>
              <a href="#" className="arrow tran3s">
                <img
                  src="images/lazy.svg"
                  data-src="images/icon/icon_80.svg"
                  alt=""
                  className="lazy-img"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="card-style-twelve text-center position-relative mt-40 active wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icon d-flex align-items-center justify-content-center">
                <img
                  src={mainContext2__img}
                  data-src="images/icon/icon_79.png"
                  alt=""
                  className="lazy-img"
                />
              </div>
              <h4 className="text-white mb-10 mt-25">{mainContext2}</h4>
              <p className="text-white opacity-75 mb-25">
               {mainContext2__description}
              </p>
              <a href="#" className="arrow tran3s">
                <img
                  src="images/lazy.svg"
                  data-src="images/icon/icon_80.svg"
                  alt=""
                  className="lazy-img"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="card-style-twelve text-center position-relative mt-40 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon d-flex align-items-center justify-content-center">
                <img
                  src={mainContext3__img}
                  data-src="images/icon/icon_81.png"
                  alt=""
                  className="lazy-img"
                />
              </div>
              <h4 className="text-white mb-10 mt-25">{mainContext3}</h4>
              <p className="text-white opacity-75 mb-25">
                {mainContext3__description}
              </p>
              <a href="#" className="arrow tran3s">
                <img
                  src="images/lazy.svg"
                  data-src="images/icon/icon_80.svg"
                  alt=""
                  className="lazy-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shapes shape-one rounded-circle"></div>
      <div className="shapes shape-two rounded-circle"></div>
    </div>
  );
};

export default FeatureSection;
