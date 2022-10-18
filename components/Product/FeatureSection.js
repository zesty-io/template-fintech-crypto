import MuiMarkdown from 'mui-markdown';

const FeatureSection = ({ content }) => {
  const { block_2_h2 } = content || '';
  const { block_2_description } = content || '';
  const { services_cards } = content || {};

  const servicesCards = Object.values(services_cards.data);
  console.log(servicesCards);

  return (
    <>
      <div className="fancy-feature-one pt-120 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="title-style-one text-center text-lg-start">
                <h2
                  className="main-title fw-bold tx-dark m0"
                  dangerouslySetInnerHTML={{ __html: block_2_h2 }}
                ></h2>
              </div>
            </div>
            <div className="col-lg-5 ms-auto wow fadeInRight">
              <div
                dangerouslySetInnerHTML={{ __html: block_2_description }}
              ></div>
            </div>
          </div>
        </div>
        <div className="container pt-120 lg-pt-80 md-pt-60">
          <div className="row gx-xxl-5">
            {servicesCards.reverse().map((cards,i) => {

                return (
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" key={i}>
                <div className="card-style-one pe-xxl-5 position-relative mb-90 md-mb-70">
                  <div
                    className="icon d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(100, 219, 226, 0.18)' }}
                  >
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_02.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                  <h5 className="fw-500 mt-35 mb-25">
                    <a href="service-details.html" className="tran3s tx-dark">
                      {cards.title}
                    </a>
                  </h5>

                  <MuiMarkdown
                    overrides={{
                      p: {
                        component: 'p',
                        props: {
                          className: 'mb-25',
                        },
                      },
                    }}
                  >
                    {cards.description}
                  </MuiMarkdown>

                  <a href="service-details.html">
                    <img
                      src="images/lazy.svg"
                      data-src="images/icon/icon_05.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </a>
                </div>
              </div>
                )
              
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
