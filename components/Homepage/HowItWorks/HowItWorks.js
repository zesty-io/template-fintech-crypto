import MuiMarkdown from 'mui-markdown';

import SignUpSteps from './SignUpSteps';
const HowItWorks = ({content,signupcontent}) => {
  
  // const howItWorksMainText = content.content.how_it_works_main_text || '';
  // const howItWorksDescription = content.content.how_it_works_description || '';
  // const howItWorksContent = content.content.how_it_works_content || '';
  // const signUpSteps = content.content.sign_up_steps || '';



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
                    dangerouslySetInnerHTML={{ __html: content.how_it_works_main_text }}
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
                          "text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20",
                      },
                    },
                    ul: {
                      component: 'ul',
                      props: {
                        className:
                          "style-none list-item fs-18 text-white opacity-75",
                      },
                    },
                  }}
                >
                  {content.how_it_works_content}
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

        <SignUpSteps content={signupcontent}/>
        <div className="r-shape-one shapes"></div>
      </div>
    </>
  );
};

export default HowItWorks;
