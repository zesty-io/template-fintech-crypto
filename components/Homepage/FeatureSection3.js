const FeatureSection3 = (content) => {
    const whyChoseUsValueProps = content.content.why_choose_us_value_props || '';
    const statisticHighlights = content.content.statistic_highlights || '';

    
  return <>
    
    <div className="fancy-feature-twentyEight position-relative zn2 mt-225 lg-mt-120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="block-style-five pe-xl-5 me-xxl-5 wow fadeInLeft">
                        <div className="title-style-nine pb-20">
                            <div className="sc-title">Why Choose us</div>
                            <h2 className="main-title text-white">Why <span>Choose</span> us for your business.</h2>
                        </div> 
                        <ul className="style-none list-item">
                            <li>{whyChoseUsValueProps.data[0].value_proposition || ''}</li>
                            <li>{whyChoseUsValueProps.data[1].value_proposition || ''}</li>
                            <li>{whyChoseUsValueProps.data[2].value_proposition || ''}</li>
                        </ul>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-8 m-auto wow fadeInRight">
                    <div className="illustration-holder md-mt-50 position-relative">
                        <img src="images/lazy.svg" data-src="images/shape/shape_106.svg" alt="" className="lazy-img main-img"/>
                        <img src="images/lazy.svg" data-src="images/assets/ils_10.png" alt="" className="lazy-img illustration-img"/>
                    </div> 
                </div>
            </div>
        </div> 
        <div className="wrapper mt-110 lg-mt-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                        <div className="counter-block-four text-center mt-40 wow fadeInUp">
                            <div className="main-count fw-500"><span className="counter">{statisticHighlights.data[0].main_statistic || ''}</span></div>
                            <p className="fs-18 m0">{statisticHighlights.data[0].statistic_description || ''}</p>
                        </div> 
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="counter-block-four text-center mt-40 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="main-count fw-500"><span className="counter">{statisticHighlights.data[1].main_statistic || ''}</span></div>
                            <p className="fs-18 m0">{statisticHighlights.data[0].statistic_description || ''}</p>
                        </div> 
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="counter-block-four text-center mt-40 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="main-count fw-500"><span className="counter">{statisticHighlights.data[2].main_statistic || ''}</span></div>
                            <p className="fs-18 m0">{statisticHighlights.data[2].statistic_description || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  </>;
};

export default FeatureSection3;
