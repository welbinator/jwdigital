<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>JW Digital</title>

	<link rel="stylesheet" href="assets/css/form.css">
	<link rel="stylesheet" href="assets/css/slider.css" />
	<link rel="stylesheet" href="assets/css/swiper.min.css">
	<link rel="stylesheet" href="assets/css/mss.css">
	<link rel="stylesheet" href="assets/css/style.css" />

	<script src="https://kit.fontawesome.com/b6c33c7af2.js" crossorigin="anonymous"></script>
</head>

<body>
	<div class="border"></div>
	<div id="next-container"><?php include "includes/next-arrow.php" ?></div>
	<nav class="nav fix">
		<ul class="nav__list">
			<li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
			<li class="nav__item"><a href="#about" class="nav__link">About</a></li>
			<li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
			<li class="nav__item"><a href="#team" class="nav__link">Team</a></li>
			<li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
		</ul>
	</nav>
	<div class="left abs">
		<div class="logo abs">
			<a href="#home"><?php include "includes/logo-anim.php" ?></a>
		</div>

	</div>

	<div class="right abs">
		<div class="controls-container abs">
			<div class="controls-item" id="navClick">
				<div class="menu-icon">
					<div class="line-container straight"></div>
					<div class="line-container straight"></div>
					<div class="line-container straight"></div>
					<div class="line-container x one"></div>
					<div class="line-container x two"></div>
				</div>
			</div>
			<div class="controls-item">
				<a target="_blank" href="https://www.facebook.com/cedarrapidswebdesign/"><?php include "includes/fb-icon.php" ?></a>
			</div>
			<div class="controls-item">
				<a target="_blank" href="https://www.linkedin.com/in/jameswelbes/"><?php include "includes/linkedin-icon.php" ?></a>
			</div>
			<div class="controls-item">
				<a href="#contact"><?php include "includes/email-icon.php" ?></a>
			</div>
		</div>
	</div>
	<div class="gradient"></div>
	<div class="wrapper">

		<section id="home" slide="1">
			<div class="overlay"></div>
			<div class="inner">
			<div class="my-slider">
					<div class="mss-slide active">
						<div class="container">
							<div class="caption">
								<p>It's business time</p cl>

								<hr style="width: 175px;">

								<h3>Let's turn your idea into money</h3>
								<div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
							</div>
						</div>
					</div>
					<div class="mss-slide">
						<div class="container">
							<div class="caption">
								<p>Be unique</p>

								<hr style="width: 100px;">

								<h3>How do you plan to differentiate yourself?</h3>
								<div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
							</div>
						</div>
					</div>
					<div class="mss-slide">
						<div class="container">
							<div class="caption">
								<p>Find your customers</p class="rellax" data-rellax-speed="-1">

								<hr style="width: 204px;">

								<h3>Need help identifying your target market?</h3>
								<div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
							</div>
						</div>
					</div>
				</div>

				<div class="controls">
					<div class="prev">
						<</div> <div class="next">>
					</div>
				</div>

				<div class="indicator"></div>
			</div>
		</section>

		<section id="about" slide="2">
			<div class="overlay"></div>

			<div class="inner">
				<p>What we do</p>

				<hr style="width:118px;">

				<h3>JW Digital specializes in responsive, effective websites</h3>

				<p class="description">Our goals are your goals. Whether you're looking for more leads, exposure, an eCommerce platform, or just an informational hub for your clients and/or employees, we can help.</p>
				<p class="description">All of our websites are mobile responsive, load fast, and utilize best on-page SEO practices so customers can find your business.</p>

				<div class="cta-container"><a class="cta" href="/#portfolio">Examples</a></div>
			</div>
		</section>
		<section id="portfolio" slide="3">
			<div class="overlay"></div>
			<div class="inner">
				<p>Some of our work</p>
				<hr style="width: 174px;">
				<h3>We like to let our work speak for itself</h3>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" style="background-image:url(/assets/images/finnprep-card.jpg)">
							<a target="_blank" href="https://finnprep.com">Visit Site</a>
						</div>
						<div class="swiper-slide" style="background-image:url(/assets/images/americlean-card.jpg)">
							<a target="_blank" href="https://americleaniowa.com">Visit Site</a>
						</div>
						<div class="swiper-slide" style="background-image:url(/assets/images/chromebookguide-card.jpg)">
							<a target="_blank" href="https://chromebook.guide">Visit Site</a>
						</div>
						<div class="swiper-slide" style="background-image:url(/assets/images/fanstree-card.jpg)">
							<a target="_blank" href="https://fanstree.com">Visit Site</a>
						</div>
						<!-- <div class="swiper-slide" style="background-image:url(/assets/images/horizons-card.jpg)">
	  <a target="_blank" href="https://horizonsfamily.org">Visit Site</a>
	</div> -->

					</div>
					<!-- Add Pagination -->
					<div class="swiper-pagination"></div>


				</div>
				<div class="swiper-buttons">
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
		</section>
		<section id="team" slide="4">
			<div class="overlay"></div>
			<div class="inner">
				<p>Meet our Team</p>
				<hr style="width: 174px;">
				<h3>Cool people doin' cool stuff</h3>
				<div class="team-inner">



					<div class="team-member-wrapper">
						<div class="james infocardContainer active">
							<div class="teamMain">
								<img src="./assets/images/james.jpg"></img>
							</div>
							<div class="team-member-inner">
							<div class="textbois active">
								<h2>James Welbes</h2>
								<h4>Owner & Web Developer</h4>


							</div>
							<div class="hotlinks active">
							<a target="_blank" href="https://www.facebook.com/cedarrapidswebdesign">
									<i class="fab fa-facebook"></i>
								</a>
								<a target="_blank" href="https://www.linkedin.com/in/jameswelbes/">
									<i class="fab fa-linkedin"></i>
								</a>
								
							</div>
</div>

						</div>
					</div>
					<div class="team-member-wrapper">
						<div class="devin infocardContainer active">
							<div class="teamMain">
								<img src="./assets/images/devingreen.png"></img>
							</div>
							<div class="team-member-inner">
							<div class="textbois active">
								<h2>Devin Green</h2>
								<h4>Graphic & Web Designer</h4>
								<a target="_blank" href="https://devingreen.me">View Devin's Website</a>

							</div>
							<div class="hotlinks active">
								<a target="_blank" href="https://www.facebook.com/artistro08">
									<i class="fab fa-facebook"></i>
								</a>
								<a target="_blank" href="https://twitter.com/artistro08">
									<i class="fab fa-twitter"></i>
								</a>
								<a target="_blank" href="https://www.instagram.com/artistro08/">
									<i class="fab fa-instagram"></i>
								</a>
								<a target="_blank" href="https://dribbble.com/artistro08">
									<i class="fab fa-dribbble"></i>
								</a>
								<a target="_blank" href="https://www.linkedin.com/in/artistro08/">
									<i class="fab fa-linkedin"></i>
								</a>
							</div>
</div>
						</div>

					</div>
				</div>
		</section>
		<section id="contact" slide="5">
			<div class="overlay"></div>
			<div class="inner">
				<?php include 'includes/form.php' ?>
			</div>
		</section>

	</div>

	<!-- wrapper -->



	<!-- <script type="text/javascript" src="assets/js/slider.js"></script>
		<script type="text/javascript" src="assets/js/observer.js"></script> -->
	<script type="text/javascript" src="assets/js/swiper.min.js"></script>
	<script src="assets/js/observer.js"></script>
	<script src="assets/js/shownav.js"></script>
	<script src="assets/js/mss.js"></script>
	<script type="text/javascript" src="assets/js/script.js"></script>
	

	<script>
		var swiper = new Swiper('.swiper-container', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			initialSlide: 2,
			updateOnWindowResize: true,
			loop: true,
			//   loopedSlides: 1,

			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,


				slideShadows: true,
			},
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	</script>

</body>

</html>