import { Container, Button } from "react-bootstrap";
import "../../assets/styles/Subscription.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/pagination";
import bg0 from "../../assets/images/darkblue-pricing.png";
import bg1 from "../../assets/images/pink-pricing.png";
import bg2 from "../../assets/images/green-pricing.png";
import bg3 from "../../assets/images/blue-pricing.png";
import bg4 from "../../assets/images/orange-pricing.png";

import iconShield from "../../assets/images/pf1.png";
import iconHalfCircle from "../../assets/images/pf2.png";
import iconCheck from "../../assets/images/pf3.png";
import { useNavigate } from "react-router-dom";

const features = [
  "Skill development",
  "Live classes",
  "Ria AI support",
  "Learning and earning",
  "Wellness and Sports",
  "Chatbot",
  "Doctor on call",
  "Self-learning modules",
  "Points and rewards",
];

const plans = [
  {
    name: "SKILLOREA HUB",
    price: "₹1,20,000/-",
    isHighlighted: true,
    discount: "30% OFF",
    features: [true, true, true, true, true, true, true, true, true],
  },
  {
    name: "ACADEMIC",
    price: "₹1,00,000/-",
    features: [true, true, true, true, true, false, false, false, false],
  },
  {
    name: "SKILL DEVELOPMENT",
    price: "₹20,000/-",
    features: [true, false, true, false, false, false, true, false, false],
  },
  {
    name: "LIVE TUITION",
    price: "₹20,000/-",
    features: [false, true, false, true, false, false, false, false, false],
  },
  {
    name: "SPORTS",
    price: "₹40,000/-",
    features: [false, false, false, false, true, false, false, false, false],
  },
];

const backgroundImages = [bg0, bg1, bg2, bg3, bg4];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section className="pricing-section">
      <Helmet>
        <title>
          Skillorea - Pricing | Free Trial Available | Flexible Plans
        </title>
        <meta
          name="description"
          content="Skillorea offers flexible plans for online learning, skill development, wellness, sports, and AI support. Find your perfect growth plan."
        />
        <meta name="keywords" content="Skilorea Pricing, App Free Trial" />
        <link rel="canonical" href="https://www.skillorea.com/pricing" />
      </Helmet>
      <h2
        className="pricing-heading text-center"
        style={{ marginTop: "120px", fontSize: "20px", fontWeight: "bold" }}
      >
        <span style={{ color: "#20CB01" }}> OUR </span>
        <span className="highlight" style={{ color: "#070759" }}>
          SUBSCRIPTION PLANS
        </span>
      </h2>

      <Container className="text-center mt-5">
        <p
          className="subscription-description"
          style={{ marginBottom: "20px" }}
        >
          Discover our flexible subscription plans . Choose the perfect fit for
          your child&apos;s academic path. Access the features like AI support,
          live classes, and wellness programs. Start your amazing learning
          journey now.
        </p>
      </Container>

      {/* Desktop Layout */}
      <Container
        className="pricingsection d-none d-lg-block"
        style={{ marginTop: "80px", marginBottom: "50px", overflowX: "auto" }}
      >
        <div
          className="subscription-table d-flex flex-nowrap"
          style={{ minWidth: "1024px" }}
        >
          {/* Features Column */}

          <div className="features-column border rounded p-3">
            <h2
              className="fw-bold mb-4 text-center text-md-start"
              style={{ fontSize: "25px", color: "#0c0c63" }}
            >
              FEATURES
            </h2>
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item border-bottom">
                {feature}
              </div>
            ))}
          </div>

          {/* Plan Columns */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-column border rounded p-3 text-center ${
                plan.isHighlighted ? "highlighted" : ""
              } ${index === 0 ? "first-card" : ""}`}
            >
              {plan.discount && (
                <div className="discount-badge">{plan.discount}</div>
              )}
              <h5
                className="fw-bold mt-3 plan-title"
                style={{ fontSize: "16px" }}
              >
                {plan.name}
              </h5>
              <h4
                className="fw-bold mb-3 plan-price"
                style={{ fontSize: "16px" }}
              >
                {plan.price}
              </h4>
              <Button
                variant={plan.isHighlighted ? "warning" : "outline-dark"}
                className="mb-3"
                onClick={() => navigate("/pricingdetails")}
              >
                Subscribe
              </Button>

              <div className="features-checklist mt-4">
                {plan.features.map((included, idx) => (
                  <div key={idx} className="tickmark-list">
                    {included ? (
                      <i className="bi bi-check-circle-fill tick-mark"></i>
                    ) : (
                      <i className="bi bi-dash-lg text-muted"></i>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Mobile Layout */}
      <div
        className="mobile-carousel d-block d-lg-none"
        style={{ marginTop: "80px", marginBottom: "40px" }}
      >
        <Swiper
          slidesPerView={1.1}
          spaceBetween={15}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 30, // mobile
            },
            768: {
              slidesPerView: 2.2, // for tablet
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3, // optional for large tablets
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: plans.length, // show all cards on larger screens
            },
          }}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div className="subscription-card">
                {/* <div className={`subscription-card-header color-${index}`}> */}
                <div
                  className="subscription-card-header"
                  style={{
                    backgroundImage: `url(${backgroundImages[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {plan.discount && (
                    <div
                      className="discount-badge"
                      style={{ marginTop: "-11px" }}
                    >
                      {plan.discount}
                    </div>
                  )}
                  <h5>{plan.name}</h5>
                  <h4>{plan.price}</h4>
                  {/* <Button variant="light" className="subscribe-button">
                    Subscribe
                  </Button> */}
                </div>
                <div className="subscription-card-body">
                  {features.map((feature, idx) => (
                    <div key={idx} className="feature-row">
                      <span>{feature}</span>
                      <span>
                        {plan.features[idx] ? (
                          <i className="bi bi-check-circle-fill text-success"></i>
                        ) : (
                          <i className="bi bi-dash-lg text-muted"></i>
                        )}
                      </span>
                    </div>
                  ))}
                  <Button
                    className="subscribe-button mb-3"
                    onClick={() => navigate("/pricingdetails")}
                  >
                    Subscribe
                  </Button>
                  <p
                    className="text-muted text-center"
                    style={{ fontSize: "12px" }}
                  >
                    *Terms and conditions apply
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Icons */}
      <div
        className="pricing-features text-center"
        style={{ marginTop: "10px", marginBottom: "40px" }}
      >
        {/* <div className="d-flex justify-content-center flex-wrap gap-4"> */}
        <div className="d-flex flex-column flex-md-row justify-content-center gap-4 align-items-center">
          <div className="feature text-center">
            <img src={iconShield} alt="Security" className="features-icon" />
            <p>Free Trial Available</p>
          </div>
          <div className="feature text-center">
            <img
              src={iconHalfCircle}
              alt="Half Circle"
              className="features-icon"
            />
            <p>Dedicated Support</p>
          </div>
          <div className="feature text-center">
            <img src={iconCheck} alt="Check" className="features-icon" />
            <p>Flexible Plans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
