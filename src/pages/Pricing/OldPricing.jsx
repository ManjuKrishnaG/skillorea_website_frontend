import "../../assets/styles/Pricing.css";
import dottedImg from "../../assets/images/dots.png";
import { FaCheckCircle } from "react-icons/fa";

// Import your icon images
import iconShield from "../../assets/images/pf1.png";
import iconHalfCircle from "../../assets/images/pf2.png";
import iconCheck from "../../assets/images/pf3.png";

const Pricing = () => {
  return (
    <section className="pricing-section">
      {/* Centered Pricing Heading */}
      <h2 className="pricing-heading">
        <span className="highlight">PRICING</span>
      </h2>

      <div className="pricing-container">
        {/* Background Shapes */}
        <img src={dottedImg} alt="Dotted Design" className="dotted-left" />
        <img src={dottedImg} alt="Dotted Design" className="dotted-right" />

        {/* Centered Pricing Card */}
        <div className="pricing-card">
          {/* Left Side */}
          <div className="pricing-left">
            <h3>Premium PRO</h3>
            <h2>₹329</h2>
            <p>billed just once</p>
            {/* <button className="btn btn-dark w-100">Get Started</button> */}
            <button className="pricing-btn w-100">Get Started</button>
          </div>

          {/* Right Side */}
          <div className="pricing-right">
            <p>Find your perfect Skillorea plan</p>
            <ul>
              <li>
                <FaCheckCircle className="icon" style={{ color: "#20CB01" }} />{" "}
                Personalized AI Learning
              </li>
              <li>
                <FaCheckCircle className="icon" style={{ color: "#20CB01" }} />{" "}
                24/7 Instant Support
              </li>
              <li>
                <FaCheckCircle className="icon" style={{ color: "#20CB01" }} />{" "}
                Interactive Learning Tools
              </li>
              <li>
                <FaCheckCircle className="icon" style={{ color: "#20CB01" }} />{" "}
                Progress Tracking & Rewards
              </li>
            </ul>
          </div>
        </div>

        {/* Features Section - Using Image Icons */}
        <div className="pricing-features">
          <div className="feature">
            <img src={iconShield} alt="Security" className="features-icon" />
            <p>Free Trial Available</p>
          </div>
          <div className="feature">
            <img
              src={iconHalfCircle}
              alt="Half Circle"
              className="features-icon"
            />
            <p>Dedicated Support </p>
          </div>
          <div className="feature">
            <img src={iconCheck} alt="Check" className="features-icon" />
            <p>Flexible Plans </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
