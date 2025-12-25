import "../../assets/styles/Pricing.css";
import dottedImg from "../../assets/images/dots.png";
// import { FaCheckCircle } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import your icon images
import iconShield from "../../assets/images/pf1.png";
import iconHalfCircle from "../../assets/images/pf2.png";
import iconCheck from "../../assets/images/pf3.png";

import card1 from "../../assets/images/Sports.png";
import card2 from "../../assets/images/Sports & Skills.png";
import card3 from "../../assets/images/Tuition & live.png";
import card4 from "../../assets/images/Hub.png";

const variantToTextColor = {
  warning: "text-warning",
  primary: "text-primary",
  success: "text-success",
};

const pricingData = [
  {
    title: "SPORTS",
    price: "Rs. 40,000",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus diam nibh aliquam sit.",
    features: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    buttonColor: "warning",
    image: card1,
  },

  {
    title: "SPORTS & SKILLS",
    price: "Rs. 60,000",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus diam nibh aliquam sit.",
    features: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    buttonColor: "primary",
    image: card2,
  },
  {
    title: "TUITION & LIVE",
    price: "Rs. 20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus diam nibh aliquam sit.",
    features: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    buttonColor: "success",
    image: card3,
  },
  {
    title: "HUB",
    price: "Rs. 1,00,000",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus diam nibh aliquam sit.",
    features: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    buttonColor: "warning",
    image: card4,
  },
];

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

        <Container className="py-5">
          <Row className="g-4">
            {pricingData.map((plan, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <Card
                  className="h-100 text-center shadow rounded"
                  style={{
                    backgroundImage: `url(${plan.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    border: "none",
                  }}
                >
                  <Card.Body
                    className="p-4 d-flex flex-column justify-content-between"
                    style={{ height: "100%" }}
                  >
                    <div>
                      <h5 className="fw-bold text-uppercase">{plan.title}</h5>
                      <h3 className="fw-bold">{plan.price}</h3>
                      <p>{plan.description}</p>
                      <ul className="list-unstyled text-start ps-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            <i
                              className={`bi bi-check-circle-fill me-2 ${
                                variantToTextColor[plan.buttonColor]
                              }`}
                            ></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant={plan.buttonColor} className="mt-3 px-4">
                      Subscribe
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

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
