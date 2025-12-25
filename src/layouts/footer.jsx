import logo from "../assets/images/logowhitetm.png";
import "../assets/styles/footer.css"; // Ensure correct path to CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="row d-flex justify-content-between align-items-start">
          {/* Left Section - Logo and Description */}
          <div className="col-md-3 col-sm-6">
            <h3 className="footer-logo">
              <img
                src={logo}
                alt="Skillorea Logo"
                className="footer-logo-img"
              />
            </h3>
            <p className="footer-text">
              Diverse learning experiences, building essential skills for
              lifelong success.
            </p>
            <hr className="footer-divider" />
            <p className="m-0">© 2025 All Rights Reserved</p>
          </div>

          {/* Centered Columns */}
          <div className="footer-menu-labels col-md-6 d-flex justify-content-center gap-3">
            <div className="col-md-3 col-sm-6">
              <ul className="footer-menu">
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/our-team">Our Team</a>
                </li>
                <li>
                  <a href="/wellness-sports">Wellness</a>
                </li>
                <li>
                  <a href="/online-shopping">Shop</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul className="footer-menu">
                <li>
                  <a href="/doctor-on-call">Doctor On Call</a>
                </li>
                <li>
                  <a href="/careers">Career</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul className="footer-menu">
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/refund-policy">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Newsletter Subscription */}
          <div className="col-md-3 col-sm-6 ">
            <h5 className="newsletter fw-bold" style={{ color: "#F48616" }}>
              JOIN A NEWSLETTER
            </h5>
            <p>Your Email</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button
                className="btn"
                style={{ backgroundColor: "#F48616", color: "#fff" }}
              >
                SUBSCRIBE
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/skillorea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/skill_orea/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/skillorea/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@Skillorea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://x.com/skillorea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
