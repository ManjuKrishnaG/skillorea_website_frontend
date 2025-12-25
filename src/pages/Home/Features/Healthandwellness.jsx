import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/styles/healthandwellness.css";
import cardImg from "../../../assets/images/aifeaturecard.png";
import healthImg from "../../../assets/images/healthwellness.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import whatishealth from "../../../assets/images/what_is_health.png";
import healthcard1 from "../../../assets/images/healthcard1.png";
import healthcard2 from "../../../assets/images/healthcard2.png";
import healthcard3 from "../../../assets/images/healthcard3.png";
import healthcard4 from "../../../assets/images/healthcard4.png";
import healthcard5 from "../../../assets/images/healthcard5.png";
import healthcard6 from "../../../assets/images/healthcard6.png";

import FAQSection from "../../Home/Faq";

const Healthandwellness = () => {
  const features = [
    {
      title: "Heading",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
    {
      title: "Heading",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
    {
      title: "Heading",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
    {
      title: "Heading",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
  ];
  return (
    <>
      <section
        className="healthfeature-section"
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={healthImg}
                alt="health"
                className="img-fluid top-image"
              />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Build Health, Expert Support, and Lifetime Well-being
              </h2>
              <p>
                Skillorea ensures your child&apos;s complete wellness. We build
                balanced and successful futures through diverse activities and
                expert health support.
              </p>
              <p>Let us start wellness together, with expert guidance.</p>
              <img
                src={bookNowImage}
                alt="Book Now"
                className="img-button"
                // onClick={handleClick}
              />
            </div>

            {/* Right Side Image (Hidden on Small Screens) */}
            <div className="col-lg-6 col-md-12 col-10 text-center d-none d-md-block">
              <img
                src={healthImg}
                alt="health"
                className="img-fluid health-right-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-health py-5">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="text-center fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>HEALTH & WELLNESS</span>{" "}
              <span style={{ color: "#070759" }}>BY SKILLOREA</span>
            </h5>
            {/* Left Side: Grouped Image */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
              <img
                src={whatishealth}
                alt="health&wellness"
                className="healthgrouped img-fluid rounded"
              />
            </div>

            {/* Right Side: Text */}
            <div className="col-lg-6 col-md-12">
              {/* <h5 className="section-subtitle mb-4">
                      <span className="text-success fw-bold">WHAT IS </span>
                      <span className="text-primary fw-bold">ONLINE TUITION</span>
                    </h5> */}

              <p>
                Skillorea’s Health & Wellness program is an extensive
                initiative. It focuses on promoting your child&apos;s overall
                well-being. We blend physical activity, mental balance, and
                professional health advice. This approach establishes solid
                foundations for a healthy, joyful life. It effectively addresses
                all aspects of growth.
              </p>
              <p>
                Our platform offers diverse activities for overall health. This
                includes engaging sports programs, martial arts, and yoga
                practices. We also have Doctor on Call services giving direct
                medical advice. Dietitian services also offer expert nutrition
                guidance. Counselling services are available for mental health,
                providing complete care.
              </p>
              <p>
                Health & Wellness, by Skillorea, encourages a healthy lifestyle.
                It enables students to enjoy the best health physically and
                mentally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="health-wellness-feature py-5">
        <div className="text-center mb-4">
          <h5 className="fw-bold mb-2">
            <span style={{ color: "#20CB01" }}>WHY</span>{" "}
            <span style={{ color: "#070759" }}>HEALTH & WELLNESS</span>
          </h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
            ullamcorper leo pharetra tellus <br />
            sapien pellentesque lectus
          </p>
        </div>
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "Mental Wellbeing",
                desc: "Activities to reduce stress and improve emotional regulation.",
                img: healthcard1,
              },
              {
                title: "Physical Fitness",
                desc: "Fitness routines tailored for young learners’ growth.",
                img: healthcard2,
              },
              {
                title: "Nutritional Advice",
                desc: "Expert tips for maintaining a balanced and healthy diet.",
                img: healthcard3,
              },
              {
                title: "Healthy Habits",
                desc: "Creating routines for daily wellness and hygiene.",
                img: healthcard4,
              },
              {
                title: "Mindful Practices",
                desc: "Guided mindfulness to boost concentration and calm.",
                img: healthcard5,
              },
              {
                title: "Digital Detox",
                desc: "Balanced screen time strategies for better well-being.",
                img: healthcard6,
              },
            ].map((card, idx) => (
              // <div className="col-md-6 col-lg-4" key={idx}>
              //   <div
              //     className="health-card"
              //     style={{
              //       backgroundImage: `url(${card.img})`,
              //       backgroundSize: "cover",
              //       backgroundPosition: "center",
              //       borderRadius: "16px",
              //       height: "220px",
              //       padding: "20px",
              //       display: "flex",
              //       flexDirection: "column",
              //       justifyContent: "flex-end",
              //       // boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              //     }}
              //   >
              //     <h6 className="fw-bold mb-1">{card.title}</h6>
              //     <p className="small mb-0">{card.desc}</p>
              //   </div>
              // </div>
              <div className="col-md-6 col-lg-4" key={idx}>
                <div
                  className="health-card d-flex flex-column justify-content-end"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    borderRadius: "16px",
                    height: "160px", // 👈 reduced height
                    padding: "12px 14px",

                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ zIndex: 2 }}>
                    <h6
                      className="fw-bold mb-1"
                      style={{ fontSize: "14px", lineHeight: "1.2" }}
                    >
                      {card.title}
                    </h6>
                    <p
                      className="mb-0"
                      style={{ fontSize: "12px", lineHeight: "1.3" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-feature-section py-5">
        <Row className="text-center mb-4">
          <Col>
            <h5 className="fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>PROJECT GUIDANCE</span>{" "}
              <span style={{ color: "#070759" }}>FEATURES</span>
            </h5>
            <p className="text-muted">
              ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
              ullamcorper leo pharetra tellus <br />
              pellentesque lectus
            </p>
          </Col>
        </Row>
        <Container>
          {/* Heading Row */}

          {/* Cards Row */}
          <Row className="feature-projectcard g-4 justify-content-center">
            {features.map((feature, idx) => (
              <Col xs={12} sm={6} lg={3} key={idx}>
                <div
                  className="projectfeature-card-img d-flex flex-column align-items-center justify-content-center text-center"
                  style={{ backgroundImage: `url(${cardImg})` }}
                >
                  <h6 className="fw-bold mb-2" style={{ marginTop: "40px" }}>
                    {feature.title}
                  </h6>
                  <p className="text-muted small px-3 mb-0">{feature.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <FAQSection />
    </>
  );
};

export default Healthandwellness;
