function App()
{
	return (
		<>
			<header className="header" id="home">
				<div className="container">
					<div className="row align-items-center justify-content-between d-flex">
						<div id="logo">
							<a href="index.html">
								<img src="img/logo.png" alt="" title="" />
							</a>
						</div>
						<nav id="nav-menu-container">
							<ul className="nav-menu">
								<li className="menu-active">
									<a href="#home">Home</a>
								</li>
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#service">Service</a>
								</li>
								<li>
									<a href="#unique">Unique Feature</a>
								</li>
								<li>
									<a href="#review">Review</a>
								</li>
								<li>
									<a href="#faq">Faq</a>
								</li>
								<li className="menu-has-children">
									<a href="">Pages</a>
									<ul>
										<li>
											<a href="generic.html">Generic</a>
										</li>
										<li>
											<a href="elements.html">Elements</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
						{/* #nav-menu-container */}
					</div>
				</div>
			</header>
			{/* #header */}
			{/* start banner Area */}
			<section className="banner-area" id="home">
				<div className="container">
					<div className="row fullscreen d-flex align-items-center justify-content-center">
						<div className="banner-content col-lg-10">
							<h5 className="text-white text-uppercase">
								Now you can feel the Heat
							</h5>
							<h1>Smart New Future</h1>
							<a href="#" className="primary-btn text-uppercase">
								Buy Now
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* End banner Area */}
			{/* Start video-sec Area */}
			<section className="video-sec-area section-gap" id="about">
				<div className="container">
					<div className="row justify-content-center align-items-center ">
						<div className="col-lg-6 video-left">
							<h6>Brand new app to blow your mind</h6>
							<h1>
								We’ve made a life <br />
								that will change you
							</h1>
							<p>
								<span>
									We are here to listen from you deliver
									exellence
								</span>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit, sed do eiusmod temp or
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim.
							</p>
							<a className="primary-btn" href="#">
								Get Started now
							</a>
						</div>
						<div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
							<div className="overlay overlay-bg" />
							<a
								className="play-btn"
								href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
								<img
									className="img-fluid"
									src="img/play-icon.png"
									alt=""
								/>
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* End video-sec Area */}
			{/* Start top-course Area */}
			<section className="top-course-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-60 col-lg-10">
							<div className="title text-center">
								<h1 className="mb-10">
									Top Courses That are open for Students
								</h1>
								<p>
									Who are in extremely love with eco friendly
									system.
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center align-items-center">
						<div className="col-lg-3 course-left">
							<div className="single-course">
								<span className="lnr lnr-rocket" />
								<a href="#">
									<h4>High Performance</h4>
								</a>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisic ing elit, seddo eiusmod tempor
									incid.idunt ut labore et dolore magna
									aliqua.
								</p>
							</div>
							<div className="single-course">
								<span className="lnr lnr-cog" />
								<a href="#">
									<h4>High Performance</h4>
								</a>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisic ing elit, seddo eiusmod tempor
									incid.idunt umagna
									aliqua.
								</p>
							</div>
						</div>
						<div className="col-lg-6 course-middle">
							<img
								className="img-fluid mx-auto d-block"
								src="img/c1.png"
								alt=""
							/>
						</div>
						<div className="col-lg-3 course-right">
							<div className="single-course">
								<span className="lnr lnr-apartment" />
								<a href="#">
									<h4>High Performance</h4>
								</a>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisic ing elit, seddo eiusmod tempor
									incid.idunt ut labore et dolore magna
									aliqua.
								</p>
							</div>
							<div className="single-course">
								<span className="lnr lnr-phone" />
								<a href="#">
									<h4>High Performance</h4>
								</a>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisic ing elit, seddo eiusmod tempor
									incid.idunt ut labore et dolore magna
									aliqua.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End top-course Area */}
			{/* Start home-about Area */}
			<section className="home-about-area">
				<div className="container-fluid">
					<div className="row justify-content-center align-items-center">
						<div className="col-lg-6 no-padding home-about-left">
							<img
								className="img-fluid"
								src="img/about-img.jpg"
								alt=""
							/>
						</div>
						<div className="col-lg-6 no-padding home-about-right">
							<h1>
								Globally Connected <br />
								by Large Network
							</h1>
							<p>
								<span>
									We are here to listen from you deliver
									exellence
								</span>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod
								tempor.
							</p>
							<a className="text-uppercase primary-btn" href="#">
								get details
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* End home-about Area */}
			{/* Start service Area */}
			<section className="service-area section-gap" id="service">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-8 pb-40 header-text">
							<h1>Some Features that Made us Unique</h1>
							<p>
								Who are in extremely love with eco friendly
								system.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-service">
								<h4>
									<span className="lnr lnr-user" />
									Expert Technicians
								</h4>
								<p>
									Usage of the Internet is becoming more
									common due to rapid advancement of
									technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-service">
								<h4>
									<span className="lnr lnr-license" />
									Professional Service
								</h4>
								<p>
									Usage of the Internet is becoming more
									common due to rapid advancement of
									technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-service">
								<h4>
									<span className="lnr lnr-phone" />
									Great Support
								</h4>
								<p>
									Usage of the Internet is becoming more
									common due to rapid advancement of
									technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-service">
								<h4>
									<span className="lnr lnr-rocket" />
									Technical Skills
								</h4>
								<p>
									Usage of the Internet is becoming more
									common due to rapid advancement of
									technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-service">
								<h4>
									<span className="lnr lnr-diamond" />
									Highly Recomended
								</h4>
								<p>
									Usage of the Internet is becoming more
									common due to rapid advancement of
									technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-service">
								<h4>
									<span className="lnr lnr-bubble" />
									Positive Reviews
								</h4>
								<p>
									Usage of the Internet is becoming more
									common due to rapid advancement of
									technology and power.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End service Area */}
			{/* Start unique-feature Area */}
			<section className="unique-feature-area section-gap" id="unique">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-60 col-lg-10">
							<div className="title text-center">
								<h1 className="mb-10 text-white">
									Some Features that Made us Unique
								</h1>
								<p>
									Who are in extremely love with eco friendly
									system.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-unique-product">
								<img
									className="img-fluid"
									src="img/u1.jpg"
									alt=""
								/>
								<div className="desc">
									<h4>Apple Watch White</h4>
									<h6>£399.00</h6>
									<a
										className="text-uppercase primary-btn"
										href="#">
										Pre Order
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-unique-product">
								<img
									className="img-fluid"
									src="img/u2.jpg"
									alt=""
								/>
								<div className="desc">
									<h4>Apple Watch White</h4>
									<h6>£399.00</h6>
									<a
										className="text-uppercase primary-btn"
										href="#">
										Pre Order
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-unique-product">
								<img
									className="img-fluid"
									src="img/u3.jpg"
									alt=""
								/>
								<div className="desc">
									<h4>Apple Watch White</h4>
									<h6>£399.00</h6>
									<a
										className="text-uppercase primary-btn"
										href="#">
										Pre Order
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-unique-product">
								<img
									className="img-fluid"
									src="img/u4.jpg"
									alt=""
								/>
								<div className="desc">
									<h4>Apple Watch White</h4>
									<h6>£399.00</h6>
									<a
										className="text-uppercase primary-btn"
										href="#">
										Pre Order
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End unique-feature Area */}
			{/* Start review Area */}
			<section className="review-area section-gap" id="review">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-60 col-lg-10">
							<div className="title text-center">
								<h1 className="mb-10">
									Some Features that Made us Unique
								</h1>
								<p>
									Who are in extremely love with eco friendly
									system.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-review">
								<h4>Cody Hines</h4>
								<p>
									Accessories Here you can find the best
									computer accessory for your laptop, monitor,
									printer, scanner, speaker.
								</p>
								<div className="star">
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star" />
									<span className="fa fa-star" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-review">
								<h4>Chad Herrera</h4>
								<p>
									Accessories Here you can find the best
									computer accessory for your laptop, monitor,
									printer, scanner, speaker.
								</p>
								<div className="star">
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star" />
									<span className="fa fa-star" />
									<span className="fa fa-star" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-review">
								<h4>Andre Gonzalez</h4>
								<p>
									Accessories Here you can find the best
									computer accessory for your laptop, monitor,
									printer, scanner, speaker.
								</p>
								<div className="star">
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star" />
									<span className="fa fa-star" />
									<span className="fa fa-star" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-review">
								<h4>Jon Banks</h4>
								<p>
									Accessories Here you can find the best
									computer accessory for your laptop, monitor,
									printer, scanner, speaker.
								</p>
								<div className="star">
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star" />
									<span className="fa fa-star" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-review">
								<h4>Landon Houston</h4>
								<p>
									Accessories Here you can find the best
									computer accessory for your laptop, monitor,
									printer, scanner, speaker.
								</p>
								<div className="star">
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-review">
								<h4>Nelle Wade</h4>
								<p>
									Accessories Here you can find the best
									computer accessory for your laptop, monitor,
									printer, scanner, speaker.
								</p>
								<div className="star">
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star checked" />
									<span className="fa fa-star" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End review Area */}
			{/* Start faq Area */}
			<section className="faq-area section-gap" id="faq">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-60 col-lg-10">
							<div className="title text-center">
								<h1 className="mb-10">
									Frequently Asked Questions
								</h1>
								<p>
									Who are in extremely love with eco friendly
									system.
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-start">
						<div className="col-lg-6 faq-left">
							<div id="accordion">
								<div className="card">
									<div
										className="card-header"
										id="headingOne">
										<h5 className="mb-0">
											<button
												className="btn btn-link"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne">
												Are your Templates responsive?
											</button>
										</h5>
									</div>
									<div
										id="collapseOne"
										className="collapse show"
										aria-labelledby="headingOne"
										data-parent="#accordion">
										<div className="card-body">
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud
											exercitation ullamco laboris.
										</div>
									</div>
								</div>
								<div className="card">
									<div
										className="card-header"
										id="headingTwo">
										<h5 className="mb-0">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo">
												Does it have all the plugin as
												mentioned?
											</button>
										</h5>
									</div>
									<div
										id="collapseTwo"
										className="collapse"
										aria-labelledby="headingTwo"
										data-parent="#accordion">
										<div className="card-body">
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud
											exercitation ullamco laboris.
										</div>
									</div>
								</div>
								<div className="card">
									<div
										className="card-header"
										id="headingThree">
										<h5 className="mb-0">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree">
												Can i use the these theme for my
												client?
											</button>
										</h5>
									</div>
									<div
										id="collapseThree"
										className="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordion">
										<div className="card-body">
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud
											exercitation ullamco laboris.
										</div>
									</div>
								</div>
								<div className="card">
									<div
										className="card-header"
										id="headingThree">
										<h5 className="mb-0">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseThree">
												Are your Templates responsive?
											</button>
										</h5>
									</div>
									<div
										id="collapseFour"
										className="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordion">
										<div className="card-body">
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud
											exercitation ullamco laboris.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End faq Area */}
			{/* start footer Area */}
			<footer className="footer-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h6>About Us</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore dolore magna aliqua.
								</p>
								<p className="footer-text">
									{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
									Copyright © All rights reserved | This
									template is made with{" "}
									<i
										className="fa fa-heart-o"
										aria-hidden="true"
									/>{" "}
									by{" "}
									<a
										href="https://colorlib.com"
										target="_blank">
										Colorlib
									</a>
									{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
								</p>
							</div>
						</div>
						<div className="col-lg-5  col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h6>Newsletter</h6>
								<p>Stay update with our latest</p>
								<div className="" id="mc_embed_signup">
									<form
										target="_blank"
										noValidate="true"
										action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
										method="get"
										className="form-inline">
										<input
											className="form-control"
											name="EMAIL"
											placeholder="Enter Email"
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Enter Email '"
											required=""
											type="email"
										/>
										<button className="click-btn btn btn-default">
											<i
												className="fa fa-long-arrow-right"
												aria-hidden="true"
											/>
										</button>
										<div
											style={{
												position: "absolute",
												left: "-5000px",
											}}>
											<input
												name="b_36c4fd991d266f23781ded980_aefe40901a"
												tabIndex={-1}
												defaultValue=""
												type="text"
											/>
										</div>
										<div className="info" />
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6 social-widget">
							<div className="single-footer-widget">
								<h6>Follow Us</h6>
								<p>Let us be social</p>
								<div className="footer-social d-flex align-items-center">
									<a href="#">
										<i className="fa fa-facebook" />
									</a>
									<a href="#">
										<i className="fa fa-twitter" />
									</a>
									<a href="#">
										<i className="fa fa-dribbble" />
									</a>
									<a href="#">
										<i className="fa fa-behance" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* End footer Area */}
		</>
	)
}

export default App
