import React from 'react';
import UploadImages from './UploadImages'; // Import the UploadImages component
import { useState } from 'react';


// Importations CSS ajustées  
import './css/bootstrap.min.css';
import './css/nice-select.css';
import './css/font-awesome.min.css';
import './css/slicknav.min.css';
import './css/datepicker.css';
import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/normalize.css';
import './style.css';
import './css/responsive.css';
import sliderImage from './img/slider2.jpg';
import sectionImage from './img/section-img.png';
import logoImage from './img/logo.png';
import sectionImage2 from './img/section-img.png';




function Home() {
  const [showUpload, setShowUpload] = useState(false); // State to track visibility of UploadImages

  const handleClick = () => {
    setShowUpload(true); // Set state to true when button is clicked
  };
  return (
    <div className="Home">
      <header className="header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                  <li><i className="fa fa-phone"></i>+880 1234 56789</li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:support@yourmail.com">support@yourmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <a href="index.html">
                      <img src={logoImage} alt="Logo" />
                    </a>
                  </div>

                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li><a href="#">Services</a></li>
                        <li>
                          <a href="#">Blogs <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown">
                            <li><a href="blog-single.html">Blog Details</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 col-12">
                  <div className="get-quote">
                    <a href="Homeointment.html" className="btn">Book Homeointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        {/* Start Slider Section */}
        <div className="slider">
          <div className="hero-slider">

            {/* Section du slider */}
            <div className="single-slider" style={{ backgroundImage: `url(${sliderImage})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.</p>
                      <div className="button">
                        {/* Lien vers la page UploadImages */}
                        <button onClick={handleClick}>Click Here</button> {/* Button to show UploadImages */}

                        {showUpload && <UploadImages />} {/* Conditionally render UploadImages */}                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Start Schedule Section */}
        <div className="schedule">
          <div className="container">
            <div className="schedule-inner">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-schedule first">
                    <div className="inner">
                      <div className="icon">
                        <i className="fa fa-ambulance"></i>
                      </div>
                      <div className="single-content">
                        <span>Lorem Amet</span>
                        <h4>Emergency Cases</h4>
                        <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                        <a href="#">LEARN MORE <i className="fa fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-schedule middle">
                    <div className="inner">
                      <div className="icon">
                        <i className="icofont-prescription"></i>
                      </div>
                      <div className="single-content">
                        <span>Fusce Porttitor</span>
                        <h4>Doctors Timetable</h4>
                        <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                        <a href="#">LEARN MORE <i className="fa fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 col-12">
                  <div className="single-schedule last">
                    <div className="inner">
                      <div className="icon">
                        <i className="icofont-ui-clock"></i>
                      </div>
                      <div className="single-content">
                        <span>Donec luctus</span>
                        <h4>Opening Hours</h4>
                        <ul className="time-sidual">
                          <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                          <li className="day">Saturday <span>9.00-18.30</span></li>
                          <li className="day">Monday - Thursday <span>9.00-15.00</span></li>
                        </ul>
                        <a href="#">LEARN MORE <i className="fa fa-long-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* End Schedule Section */}

        {/* Start Features Section */}
        <div className="features section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You & Your Family</h2>
                  <img src={sectionImage} alt="Feature Section" />
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="single-feature">
                  <div className="single-icon">
                    <i className="icofont icofont-ambulance-cross"></i>
                  </div>
                  <h3>Emergency Help</h3>
                  <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="single-feature">
                  <div className="single-icon">
                    <i className="icofont icofont-medical-sign-alt"></i>
                  </div>
                  <h3>Enriched Pharmacy</h3>
                  <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="single-feature last">
                  <div className="single-icon">
                    <i className="icofont icofont-stethoscope"></i>
                  </div>
                  <h3>Medical Treatment</h3>
                  <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-home"></i>
                  <div className="content">
                    <span className="counter">3468</span>
                    <p>Hospital Rooms</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-user-alt-3"></i>
                  <div className="content">
                    <span className="counter">557</span>
                    <p>Specialist Doctors</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont-simple-smile"></i>
                  <div className="content">
                    <span className="counter">4379</span>
                    <p>HHomey Patients</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-table"></i>
                  <div className="content">
                    <span className="counter">32</span>
                    <p>Years of Experience</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
            </div>
          </div>
        </div>
        <section className="why-choose section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Offer Different Services To Improve Your Health</h2>
                  <img src={sectionImage2} alt="Health Services" />
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                {/* Start Choose Left */}
                <div className="choose-left">
                  <h3>Who We Are</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>
                  <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list">
                        <li><i className="fa fa-caret-right"></i>Maecenas vitae luctus nibh.</li>
                        <li><i className="fa fa-caret-right"></i>Duis massa massa.</li>
                        <li><i className="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list">
                        <li><i className="fa fa-caret-right"></i>Maecenas vitae luctus nibh.</li>
                        <li><i className="fa fa-caret-right"></i>Duis massa massa.</li>
                        <li><i className="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Choose Left */}
              </div>
              <div className="col-lg-6 col-12">
                {/* Start Choose Right */}
                <div className="choose-right">
                  <div className="video-image">
                    {/* Video Animation */}
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                      </div>
                    </div>
                    {/*/ End Video Animation */}
                    <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className="video video-popup mfp-iframe">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
                {/* End Choose Right */}
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                {/* About Us */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                    {/* Social */}
                    <ul className="social">
                      <li><a href="#"><i className="icofont-facebook"></i></a></li>
                      <li><a href="#"><i className="icofont-google-plus"></i></a></li>
                      <li><a href="#"><i className="icofont-twitter"></i></a></li>
                      <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                      <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                    </ul>
                    {/* End Social */}
                  </div>
                </div>
                {/* Quick Links */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h2>Quick Links</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Our Cases</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Consulting</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Open Hours */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Open Hours</h2>
                    <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                    <ul className="time-sidual">
                      <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                      <li className="day">Saturday <span>9.00-18.30</span></li>
                      <li className="day">Monday - Thursday <span>9.00-15.00</span></li>
                    </ul>
                  </div>
                </div>
                {/* Newsletter */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Newsletter</h2>
                    <p>Subscribe to our newsletter to get all our news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                      <input
                        name="email"
                        placeholder="Email Address"
                        className="common-input"
                        onFocus={() => this.placeholder = ''}
                        onBlur={() => this.placeholder = 'Your email address'}
                        required
                        type="email"
                      />
                      <button className="button"><i className="icofont icofont-paper-plane"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Footer Top */}

          {/* Copyright */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="copyright-content">
                    <p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank" rel="noopener noreferrer">wpthemesgrid.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Copyright */}
        </footer>

        {/* End Features Section */}
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.0.js"></script>
        <script src="js/jquery-ui.min.js"></script>
        <script src="js/easing.js"></script>
        <script src="js/colors.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap-datepicker.js"></script>
        <script src="js/jquery.nav.js"></script>
        <script src="js/slicknav.min.js"></script>
        <script src="js/jquery.scrollUp.min.js"></script>
        <script src="js/niceselect.js"></script>
        <script src="js/tilt.jquery.min.js"></script>
        <script src="js/owl-carousel.js"></script>
        <script src="js/jquery.counterup.min.js"></script>
        <script src="js/steller.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
      </div>
    </div>
  );

}

export default Home;
