const Banner = ({content}) => {

  const {title} = content || '';
  const {description} = content || '';

    return(<>
        <div className="inner-banner-three text-center p-30">
        <div className="bg-wrapper text-center">
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">{title}</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>)
}

export default Banner;