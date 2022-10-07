import MuiMarkdown from 'mui-markdown';

const FeatureSection = (content) => {
  const howItWorksMainText = content.content.how_it_works_main_text;
  const howItWorksDescription = content.content.how_it_works_description;
  const howItWorksContent = content.content.how_it_works_content;

  const signUpSteps = content.content.sign_up_steps;
  console.log(signUpSteps);

  return (
    <>
      <div className="fancy-feature-twentySeven position-relative zn2 mt-250 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto order-lg-last">
              <div className="block-style-three ps-xxl-5 wow fadeInRight">
                <div className="title-style-nine">
                  <div
                    className="sc-title"
                    dangerouslySetInnerHTML={{ __html: howItWorksMainText }}
                  ></div>
                  <h2 className="main-title text-white">
                    Buy <span>Crypto</span> fast & Instantly.
                  </h2>
                </div>
                <MuiMarkdown
                  overrides={{
                    p: {
                      component: 'p',
                      props: {
                        className:
                          'text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20',
                      },
                    },
                    ul: {
                      component: 'ul',
                      props: {
                        className:
                          'style-none list-item fs-18 text-white opacity-75',
                      },
                    },
                  }}
                >
                  {howItWorksContent}
                </MuiMarkdown>
                <a href="#" className="btn-sixteen fw-500 border7 tran3s mt-45">
                  Start Trading
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 m-auto order-lg-first wow fadeInLeft">
              <div className="illustration-holder md-mt-50 pe-xxl-1 pe-xl-5 pe-lg-4">
                <img
                  src="images/lazy.svg"
                  data-src="images/assets/ils_09.png"
                  alt=""
                  className="lazy-img main-img m-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="wrapper mt-130 lg-mt-100 wow fadeInUp">
            <div className="row">
              <div className="col-xl-4">
                <div className="card-style-thirteen position-relative">
                  <div className="icon d-flex align-items-end">
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_82.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                  <h4 className="text-white mt-20 mb-10">
                    {signUpSteps.data[0].step_name}
                  </h4>
                  <p className="fs-18">
                    {signUpSteps.data[0].step_description}
                  </p>
                  <div className="arrow d-flex align-items-center justify-content-center rounded-circle position-absolute">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card-style-thirteen position-relative">
                  <div className="icon d-flex align-items-end">
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_83.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                  <h4 className="text-white mt-20 mb-10">
                    {signUpSteps.data[1].step_name}
                  </h4>
                  <p className="fs-18">
                    {signUpSteps.data[1].step_description}
                  </p>
                  <div className="arrow d-flex align-items-center justify-content-center rounded-circle position-absolute">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card-style-thirteen position-relative border-0">
                  <div className="icon d-flex align-items-end">
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_84.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                  <h4 className="text-white mt-20 mb-10">
                    {signUpSteps.data[2].step_name}
                  </h4>
                  <p className="fs-18">
                    {signUpSteps.data[2].step_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="r-shape-one shapes"></div>
      </div>
    </>
  );
};

export default FeatureSection;
