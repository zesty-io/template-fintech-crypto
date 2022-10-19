const SignUpSteps = ({ content }) => {
  console.log(content);
  return (
    <div className="container">
      <div className="wrapper mt-130 lg-mt-100 wow fadeInUp">
        <div className="row">
          {[...content].map((signupstep, i) => {

            return(
                <div className="col-xl-4" key={i}>
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
                  { signupstep.step_name || ''}
                </h4>
                <p className="fs-18">
                  {signupstep.step_description || ''}
                </p>
                <div className="arrow d-flex align-items-center justify-content-center rounded-circle position-absolute">
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default SignUpSteps;
