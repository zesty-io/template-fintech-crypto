const BlogSection = () => {

    return (<>

<div className="blog-section-four position-relative">
				<div className="container">
					<div className="title-style-nine text-center wow fadeInUp mb-40 lg-mb-20">
						<h2 className="main-title text-white">Inside <span>Story</span></h2>
					</div> 

					<div className="row gx-xxl-5">
						<div className="col-md-6 d-flex">
							<article className="blog-meta-four tran3s mt-40 wow fadeInUp" style={{backgroundImage: 'url(images/blog/blog_img_07.jpg)'}}>
								<div className="logo"><img src="images/lazy.svg" data-src="images/logo/Plogo-32.png" alt="" className="lazy-img"/></div>
								<div className="post-data mt-110 lg-mt-50">
									<div className="icon"><img src="images/lazy.svg" data-src="images/icon/icon_87.svg" alt="" className="lazy-img"/></div>
									<a href="blog-details.html"><h4 className="tran3s blog-title text-white mt-20 mb-55 lg-mb-30">Seattle Opera Simplifies Performance Planning with deski eSignature.</h4></a>
									<a href="blog-details.html" className="read-btn fw-500 text-white d-flex justify-content-between align-items-center">
										<span>Continue Reading</span>
										<img src="images/icon/icon_88.svg" alt=""/>
									</a>
								</div>
							</article> 
						</div>
						<div className="col-md-6 d-flex">
							<article className="blog-meta-four tran3s mt-40 wow fadeInUp" style={{backgroundimage: 'url(images/blog/blog_img_08.jpg)',}} data-wow-delay="0.2s">
								<div className="logo"><img src="images/lazy.svg" data-src="images/logo/Plogo-33.png" alt="" className="lazy-img"/></div>
								<div className="post-data mt-110 lg-mt-50">
									<div className="icon"><img src="images/lazy.svg" data-src="images/icon/icon_87.svg" alt="" className="lazy-img"/></div>
									<a href="blog-details.html"><h4 className="tran3s blog-title text-white mt-20 mb-55 lg-mb-30">How DocuSign CLM Helps Celonis Scale Its Global Business.</h4></a>
									<a href="blog-details.html" className="read-btn fw-500 text-white d-flex justify-content-between align-items-center">
										<span>Continue Reading</span>
										<img src="images/icon/icon_88.svg" alt=""/>
									</a>
								</div>
							</article> 
						</div>
					</div> 
					<div className="text-center mt-65 md-mt-30 wow fadeInUp">
						<div className="d-inline-block zn2 fs-20 text-white position-relative learn-more-btn">Want learn more? <a href="blog-v1.html" className="fw-500">Go to blog</a></div>
					</div>
				</div>
			</div>
    
    </>)
};


export default BlogSection;
