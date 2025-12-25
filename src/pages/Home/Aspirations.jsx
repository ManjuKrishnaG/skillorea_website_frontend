import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import { useState } from "react";
import "../../assets/styles/Aspirations.css";
import hex1 from "../../assets/images/hex1.png";
import hex2 from "../../assets/images/hex1.png";
import hex3 from "../../assets/images/hex1.png";
import hex4 from "../../assets/images/hex1.png";

// Function to format numbers (for final display)
const formatNumber = (value) => {
  // if (value >= 100000) return Math.round(value / 100000) + "L+";
  if (value >= 1000) return Math.round(value / 1000) + "K+";
  return value + "+";
};

const Aspirations = () => {
  const [countFinished50K, setCountFinished50K] = useState(false);
  const [countFinished6L, setCountFinished6L] = useState(false);

  return (
    <section className="aspirations-section">
      <Container className="aspirations-container">
        {/* Centered Heading */}
        <div className="aspiration-header">
          <h2 className="aspiration-heading">
            <span>EMPOWERING</span>{" "}
            <span className="highlight">ASPIRATIONS</span>
          </h2>
        </div>

        {/* Hexagons Grid */}
        <div className="hexagon-container">
          {/* 50K+ Counter */}
          <div className="hexagon">
            <img src={hex1} alt="Hexagon 1" />
            <div className="hex-content">
              {/* <strong>
                {!countFinished50K ? (
                  <CountUp
                    start={0}
                    end={50000}
                    duration={3}
                    onEnd={() => setCountFinished50K(true)}
                  />
                ) : (
                  formatNumber(50000)
                )}
              </strong> */}
              <strong>
                <CountUp start={0} end={100} duration={3} suffix="%" />
              </strong>
              <p>
              Platform Feature  <br />
              Availability. <br />
              </p>
            </div>
          </div>

          {/* 85% Counter */}
          <div className="hexagon">
            <img src={hex2} alt="Hexagon 2" />
            <div className="hex-content">
              <strong>
                <CountUp start={0} end={50} duration={3} suffix="+" />
              </strong>
              <p>
              Learning Programs  <br />
              Offered <br />
              </p>
            </div>
          </div>

          {/* 75% Counter */}
          <div className="hexagon">
            <img src={hex3} alt="Hexagon 3" />
            <div className="hex-content">
              <strong>
                <CountUp start={0} end={150} duration={3} suffix="+" />
              </strong>
              <p>
              Expert Educators  <br />
              Onboard <br />
              </p>
            </div>
          </div>

          {/* 6L+ Counter */}
          <div className="hexagon">
            <img src={hex4} alt="Hexagon 4" />
            <div className="hex-content">
              {/* <strong>
                {!countFinished6L ? (
                  <CountUp
                    start={0}
                    end={6000}
                    duration={3}
                    onEnd={() => setCountFinished6L(true)}
                  />
                ) : (
                  formatNumber(6000)
                )}
              </strong> */}
              <strong>
                <CountUp start={0} end={600} duration={3} suffix="+" />
              </strong>
              <p>
                Interactive Learning <br />
                Activities <br />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Aspirations;
