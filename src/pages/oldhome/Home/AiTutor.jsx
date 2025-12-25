import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/AiTutor.css";

import dottedImg from "../../assets/images/dots.png";
import tutorImage from "../../assets/images/mobileimg.png";
import icon1 from "../../assets/images/tut1.png";
import icon2 from "../../assets/images/tut2.png";
import icon3 from "../../assets/images/tut3.png";
import tutorButtonImg from "../../assets/images/attendtest.png";

const AiTutorSection = () => {
  return (
    <section className="tutor-section position-relative">
      <div className="container">
        <div className="row align-items-center">
          {/* Right Side - Content (Heading First in Mobile) */}
          <div className="col-12 col-md-6 order-1 order-md-2">
            <h2 className="tutor-title">
              {/* <span className="highlight">An AI Tutor</span> For Every Child! */}
              <span className="titlecolor">
                The <span className="future">Future</span> of Learning{" "}
              </span>
            </h2>
            <p className="tutor-text">
              Empowering every child with personalized AI tutoring for smarter,
              stress-free learning!
            </p>

            <ul className="tutor-list">
              <li>
                <img src={icon1} alt="Shield Icon" className="icon-img" />
                Learn smarter, less stress, more success.
              </li>
              <li>
                <img src={icon2} alt="Percent Icon" className="icon-img" />
                Personalized learning, customized just for you.
              </li>
              <li>
                <img src={icon3} alt="Chat Icon" className="icon-img" />
                Instant answers with 24/7 AI support.
              </li>
            </ul>
            {/* Button Aligned with List Items */}
            <div className="tutor-btn-container">
              <a
                href="your-target-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tutorButtonImg}
                  alt="Get Started"
                  className="tutor-btn-img"
                />
              </a>
            </div>
          </div>

          {/* Left Side - Image (Placed Below Heading in Mobile) */}
          <div className="col-12 col-md-6 order-2 order-md-1 position-relative">
            <div className="triangle-bg"></div>
            <img src={tutorImage} alt="Tutor" className="tutor-img" />
          </div>
        </div>
      </div>

      {/* Dotted Background */}
      <div className="dotted-bg">
        <img src={dottedImg} alt="Dotted Background" />
      </div>
    </section>
  );
};

export default AiTutorSection;
