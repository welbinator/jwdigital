<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
        
		<link rel="stylesheet" href="assets/css/form.css">
		<link rel="stylesheet" href="assets/css/slider.css" />
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
			<div class="logo abs"><a href="#home"><?php include "includes/logo.php" ?></a>
			</div>
		</div>
		<div class="right abs">
			<div class="controls-container abs">
				<div class="controls-item" onclick="showNav()">
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
		<div class="wrapper">
			<section class="section1" id="home" slide="1">
                <div class="overlay"></div>
				<div class="inner">
				<div class="slider">
						<div class="slide active">
							<div class="container">
								<div class="caption">
									<p>It's business time</p cl>

                                        <hr>
            
                                        <h3>Let's turn your idea into money</h3>
                                        <div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
								</div>
							</div>
						</div>
						<div class="slide">
							<div class="container">
								<div class="caption">
									<p>Be unique</p>

									<hr>

									<h3>How do you plan to differentiate yourself?</h3>
									<div class="cta-container"><a class="cta" href="/#contact">Get Started</a></div>
								</div>
							</div>
						</div>
						<div class="slide">
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

			<section class="section2" id="about" slide="2">
                
                <div class="inner">
                    <p>What we do</p cl>

                        <hr>

						<h3>JW Digital specializes in responsive, effective websites</h3>
						
						<p class="description">Our goals are your goals. Whether you're looking for more leads, exposure, an eCommerce platform, or just an informational hub for your clients and/or employees, we can help.</p>
						<p class="description">All of our websites are mobile responsive, load fast, and utilize best on-page SEO practices so customers can find your business.</p>
						
                        <div class="cta-container"><a class="cta" href="/#portfolio">Examples</a></div>
                </div>
            </section>
			<section class="section3" id="portfolio" slide="3">
                <div class="inner">
                <div class="card-wrapper">
                    <div class="card">
                        <img src="assets/images/finnprep-card.jpg">
                        <div class="card-inner">
                            <h2>FinnPREP</h2>
                            <a href="https://finnprep.com" target="_blank">Visit Website</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="assets/images/horizons-card.jpg">
                        <div class="card-inner">
                            <h2>Horizons Family</h2>
                            <a href="http://www.horizonsfamily.org/" target="_blank">Visit Website</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="assets/images/fanstree-card.jpg">
                        <div class="card-inner">
                            <h2>Fanstree</h2>
                            <a href="https://fanstree.com/" target="_blank">Visit Website</a>
                        </div>
					</div>
					<div class="card">
                        <img src="assets/images/chromebookguide-card.jpg">
                        <div class="card-inner">
                            <h2>Chromebook Guide</h2>
                            <a href="https://chromebook.guide/" target="_blank">Visit Website</a>
                        </div>
					</div>
					<div class="card">
                        <img src="assets/images/americlean-card.jpg">
                        <div class="card-inner">
                            <h2>Americlean Iowa</h2>
                            <a href="https://americleaniowa.com/" target="_blank">Visit Website</a>
                        </div>
					</div>
					<div class="card">
                        <img src="assets/images/stephanie-card.jpg">
                        <div class="card-inner">
                            <h2>Stephanie's Creations</h2>
                            <a href="https://stephaniesdress.com/" target="_blank">Visit Website</a>
                        </div>
                    </div>
                   
                </div>
            </div>
		</section>
		<section class="section4" id="contact" slide="4">
			<div class="inner">
				<?php include 'includes/form.php' ?>
			</div>
		</section>
		<section class="section5" id="team" slide="5">
    <div class="inner">
        <div class="cardContainer" id="devin">
            <div id="main">
                <img src="https://cedarrapidswebdesign.com/wp-content/uploads/2013/12/Cedar-Rapids-Web-Design_Devin-Green_profile-1024x1024.jpg"></img>
            </div>
            <div id="textbois">
                <h2>Devin Green</h2>
                <h4>Graphic & Web Designer</h4>
                <a href="https://devingreen.me">Meet Devin</a>
                <div id="hotlinks">
                    <a href="https://codepen.io/LIMESTA"><img src="assets/images/fb-icon.png" target="_blank"></img>
                    </a>
                    <a href="https://codepen.io/LIMESTA">
                    <img src="assets/images/linkedin-icon.png" target="_blank"></img>
                    </a>
                    <a href="https://codepen.io/LIMESTA">
                    <img src="assets/images/email-icon.png" target="_blank"></img>
                    </a>
                </div>
            </div>

    
		</div>
		
		<div class="cardContainer" id="james">
            <div id="main">
                <img src="assets/images/james.jpg"></img>
            </div>
            <div id="textbois">
                <h2>James Welbes</h2>
                <h4>Web Developer</h4>
                <a href="https://devingreen.me">Meet James</a>
                <div id="hotlinks">
                    <a href="https://codepen.io/LIMESTA"><img src="assets/images/fb-icon.png" target="_blank"></img>
                    </a>
                    <a href="https://codepen.io/LIMESTA">
                    <img src="assets/images/linkedin-icon.png" target="_blank"></img>
                    </a>
                    <a href="https://codepen.io/LIMESTA">
                    <img src="assets/images/email-icon.png" target="_blank"></img>
                    </a>
                </div>
            </div>

    
		</div>
		
		
		

</div>
</section>

		</div><!-- wrapper -->


      
		<script type="text/javascript" src="assets/js/slider.js"></script>
		<script type="text/javascript" src="assets/js/observer.js"></script>
		<script type="text/javascript" src="assets/js/script.js"></script>
	</body>
</html>
