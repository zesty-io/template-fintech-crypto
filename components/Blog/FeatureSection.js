const FeatureSection = (content) =>{
    const blogTitle = content.content.blog_title;

    return (<>
        
        <div className="fancy-feature-fiftyOne position-relative mt-200">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 wow fadeInLeft">
							<div className="title-style-five mb-65 lg-mb-40">
								<div className="sc-title-two fst-italic position-relative">Blog</div>
								<h2 className="main-title fw-500 tx-dark">{blogTitle}</h2>
							</div>
						</div>
					</div>
				</div> 
				<img src="images/lazy.svg" data-src="images/shape/shape_172.svg" alt="" className="lazy-img shapes shape-two"/>
			</div>
        
    </>)
}

export default FeatureSection;