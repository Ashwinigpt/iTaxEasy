import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex2 justify-between align-start wrap container">
        <div className="reach-us flex-25">
          <h4>Reach Us</h4>
          <nav>
            <ul className="flex2 flex-column justify-start align-start">
              <li>
                <address>
                  <i className="fas fa-location-arrow"> Main office -G - 41, Gandhi Nagar, Near Defence Colony,Padav Gwalior 474002 (M.P)</i>
                </address>
              </li>
              <li>
                <address>
                  <i className="fas fa-location-arrow"> Second Branch - Sat 1 ,Flat - 811, Logix Zest Blossom, Sector 143, Noida 201306 ( U.P)</i>
                </address>
              </li>
              <li>
                <a href="tel:+919389732668"><i className="fas fa-phone"></i> <span>+91-8770877270</span></a>
              </li>
              <li>
                <a href="mailto:info@yourmail.com"><i className="fas fa-envelope"></i>
                  <span> support@itaxeasy.com</span></a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="site-links flex-20">
          <h4>Site Links</h4>
          <nav>
            <ul className="flex2 flex-column justify-start align-start">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </nav>
        </div>
        <div className="quick-links flex-20">
          <h4>Quick Links</h4>
          <nav>
            <ul className="flex2 flex-column justify-start align-start">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </nav>
        </div>
        <div className="follow-us flex-20">
          <h4>Follow Us</h4>
          <nav>
            <ul className="flex2 justify-between align-start wrap">
              <li className="flex-30">
                <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square"></i></a>
              </li>
              <li className="flex-30">
                <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram-square"></i></a>
              </li>
              <li className="flex-30">
                <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter-square"></i></a>
              </li>
              <li className="flex-30">
                <a href="https://dribbble.com/" target="_blank"><i className="fab fa-dribbble-square"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright</p>
        <small>&copy; All Right Reserved by iTaxEasy</small>
      </div>
    </footer>
  );
}

export default Footer;