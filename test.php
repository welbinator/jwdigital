<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JW Digital</title>
        
		<link rel="stylesheet" href="assets/css/form.css">
		<link rel="stylesheet" href="assets/css/slider.css" />
		<link rel="stylesheet" href="assets/css/swiper.min.css">
		<link rel="stylesheet" href="assets/css/style.css" />
	</head>
	<body>
		<div class="border"></div>
		<div id="next-container"><?php include "includes/next-arrow.php" ?></div>
		<nav class="nav fix">
			<ul class="nav__list">
				<li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
				<li class="nav__item"><a href="#about" class="nav__link">About</a></li>
				<li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
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
					<a href="https://www.facebook.com/cedarrapidswebdesign/" target="_blank"><?php include "includes/fb-icon.php" ?></a>
				</div>
				<div class="controls-item">
					<a href="https://www.linkedin.com/in/jameswelbes/" target="_blank"><?php include "includes/linkedin-icon.php" ?></a>
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
						<div class="my-slide active">
							<div class="container">
								<div class="caption">
									<p>It's business time</p cl>

                                        <hr>
            
                                        <h3>Let's turn your idea into money</h3>
                                        <div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
								</div>
							</div>
						</div>
						<div class="my-slide">
							<div class="container">
								<div class="caption">
									<p>Be unique</p>

									<hr>

									<h3>How do you plan to differentiate yourself?</h3>
									<div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
								</div>
							</div>
						</div>
						<div class="my-slide">
							<div class="container">
								<div class="caption">
										<p>Find your customers</p class="rellax" data-rellax-speed="-1">

                                        <hr>
            
                                        <h3>Need help identifying your target market?</h3>
										<div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
								</div>
							</div>
						</div>
					</div>

					<div class="controls">
						<div class="prev"><</div>
						<div class="next">></div>
					</div>

					<div class="indicator"></div>
				</div>
			</section>

			<section id="about" slide="2">
			<div class="overlay"></div>
                
                <div class="inner">
                    <p>What we do</p>

                        <hr>

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
				<hr>
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
	  <a href="https://horizonsfamily.org">Visit Site</a>
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
		<section id="contact" slide="4">
		<div class="overlay"></div>
			<div class="inner">
				<?php include 'includes/form.php' ?>
			</div>
		</section>
		
		</div>

		<!-- wrapper -->


      
		<!-- <script type="text/javascript" src="assets/js/slider.js"></script> -->
		<!-- <script type="text/javascript" src="assets/js/observer.js"></script> -->
		<script type="text/javascript" src="assets/js/swiper.min.js"></script>
		<script type="module" src="assets/js/script.js"></script>

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
	
		
        slideShadows : true,
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
