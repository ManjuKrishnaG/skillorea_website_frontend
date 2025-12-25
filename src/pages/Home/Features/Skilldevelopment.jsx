import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/styles/skilldevelopment.css";
import skilldevelopmentImg from "../../../assets/images/skilldevelopment.png";
import section1Img from "../../../assets/images/skilldev1.png";
// import section2Img from "../../../assets/images/skill2.png";
import why1 from "../../../assets/images/whyskill1.png";
import why2 from "../../../assets/images/whyskill2.png";
import why3 from "../../../assets/images/whyskill3.png";
import why4 from "../../../assets/images/whyskill4.png";
import cardImg from "../../../assets/images/skillcard.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
// import FAQSection from "../../Home/Faq";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../../assets/styles/Faq.css";

const SkillDevelopmentPage = () => {
  const faqs = [
    {
      id: 1,
      question:
        "What makes Skillorea the best app for skill development courses?",
      answer:
        "Skillorea offers comprehensive and AI-powered skill development courses. We adopt a personalized solution to the needs of different students. This will make learning become effective among all the users.",
    },
    {
      id: 2,
      question:
        "Is Skillorea's skill development tailored for student success?",
      answer:
        "Yes, the programs offered by Skillorea are tailored in such a way as to suit various student learning preferences. We develop individual learning paths for students. This guarantees that they are appropriate and will gain maximum benefit through their learning and personal development.",
    },
    {
      id: 3,
      question: "How does Skillorea ensure practical skill application?",
      answer:
        "Skillorea provides practice in the form of interesting projects in real life. The students use the knowledge in practice quickly. This learning method is effective in developing critical thinking and problem-solving skills.",
    },
    {
      id: 4,
      question: "Can parents monitor their child's skill development progress?",
      answer:
        "Yes, parents may monitor the process of child skill development with no difficulties. They can see good indicators of their progress in our platform. This assists the parents to keep themselves updated and assist their child development.",
    },
    {
      id: 5,
      question:
        "What are the key benefits of Skillorea's skill development programs?",
      answer:
        "These programs prepare students for future success. We provide complete development beyond traditional academics. Students gain confidence and innovative thinking skills.",
    },
    {
      id: 6,
      question:
        "Does Skillorea provide certification for skill development courses?",
      answer:
        "Yes, upon completing certain skill development courses, students may earn certifications. These certifications recognize their achievements and new competencies. They help showcase acquired abilities for future opportunities.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const features = [
    {
      title: "Heading - Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
    {
      title: "Heading - Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
    {
      title: "Heading - Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
    {
      title: "Heading - Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper leo pharetra tellus",
    },
  ];

  const whySkillContent = [
    {
      id: "01",
      title: "Future Readiness",
      description:
        "Prepare students with essential skills. They will thrive in tomorrow's evolving job market effectively.",
    },
    {
      id: "02",
      title: "Complete development",
      description:
        "Beyond academics, we promote all aspects of development. Create individuals for life's experiences.",
    },
    {
      id: "03",
      title: "Practical application",
      description:
        "Get practical experience with real-world activities. Apply knowledge directly.",
    },
    {
      id: "04",
      title: "Confidence and Innovation",
      description:
        "Increase self-confidence and innovative thinking. Develop problem-solving skills for every challenge.",
    },
  ];

  return (
    <div>
      {/* Banner */}
      {/* <section className="skill-hero-section position-relative text-white d-flex align-items-center">
        <div
          className="skill-hero-bg"
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
        <Container className="position-relative z-2">
          <Row>
            <Col md={6}>
              <h1 className="display-5 fw-bold">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Augue lacus proin ut
                elementum laoreet aliquam. A fermentum pharetra congue
                adipiscing scelerisque.
              </p>
              <Button variant="warning" className="mt-3">
                Join Now
              </Button>
            </Col>
            <Col md={6} className="text-center">
              
            </Col>
          </Row>
        </Container>
      </section> */}

      <section
        className="skilldevelopmentfeature-section"
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={skilldevelopmentImg}
                alt="skilldevelopment"
                className="img-fluid top-image"
              />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Master Your Future Skills Today with Skillorea
              </h2>
              <p>
                Boost your career with skill enhancement programs and training.
                Gain confidence and success through personalized learning paths!
              </p>
              <p>
                Let us start skill development together, with expert guidance.
              </p>
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
                src={skilldevelopmentImg}
                alt="skilldevelopment"
                className="img-fluid skilldevelopment-right-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SKILL DEVELOPMENT */}
      {/* <section className="what-skill-section py-5">
        <Row className="mb-5">
          <Col>
            <h5 className="text-center fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>WHAT IS</span>{" "}
              <span style={{ color: "#070759" }}>SKILL DEVELOPMENT</span>
            </h5>
          </Col>
        </Row>
        <Container>
          <Row className="align-items-center"> 
            <Col md={6} className="position-relative mb-4 mb-md-0">
              <img
                src={section1Img}
                alt="Main"
                className="img-fluid rounded main-img"
              />
              
            </Col>

            
            <Col md={6} style={{ marginTop: "-240px" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
                ullamcorper leo pharetra tellus sapien pellentesque lectus.
              </p>
              <p>
                Sed sem tortor nibh sapien blandit. Sit dolor maecenas volutpat
                fermentum blandit porttitor turpis. Ullamcorper urna vitae neque
                porta nec facilisis vitae fermentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
                ullamcorper leo pharetra tellus sapien pellentesque lectus. Sed
                sem tortor nibh sapien blandit.
              </p>
             
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="what-is-skill py-5">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="text-center fw-bold mb-3">
              <span style={{ color: "#20CB01" }}>SKILL DEVELOPMENT</span>{" "}
              <span style={{ color: "#070759" }}>WITH SKILLOREA</span>
            </h5>
            {/* Left Side: Grouped Image */}
            <div className="row flex-column flex-xl-row align-items-center">
            {/* <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center"> */}
            <div className="col-xl-6 mb-4 text-center">
              <img
                src={section1Img}
                alt="skilldevelopment"
                className="skillgrouped img-fluid rounded"
                style={{marginTop: "30px"}}
              />
            </div>

            {/* Right Side: Text */}
            {/* <div className="skilldev_skillorea col-lg-6 col-md-12"> */}
            <div className="col-xl-6 skilldev_skillorea">
              <p className="skilldevcontent">
                Skillorea offers comprehensive skill development programs. We
                are dedicated to the growth of the potential of each student.
                Our customized approach ensures deep understanding. We offer to
                train a diverse set of necessary skills. This prepares learners
                for future challenges and opportunities effectively.
              </p>
              <p>
                Our platform covers diverse skill areas. You will be able to
                master AI and Java as technical expertise. Non-technical skills
                such as Public Speaking and Leadership are also offered. We
                integrate real-world projects for hands-on experience. This
                builds critical thinking, problem-solving, and creativity,
                essential for modern careers.
              </p>
              <p>
                Skillorea&apos;s programs prepare students for complete growth.
                They build strong foundations for lifelong success. Elevate your
                full potential with us.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY Skill Development Section */}
      <section className="why-skill-section py-0">
        <Row className="text-center mb-4">
          <Col>
            <h5 className="fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>WHY</span>{" "}
              <span style={{ color: "#070759" }}>SKILL DEVELOPMENT</span>
            </h5>
            <p className="text-muted">
              Investing in skill development is vital for every student&apos;s
              future success. It ensures they gain the necessary abilities.{" "}
              <br />
              This helps them achieve their potential.
            </p>
          </Col>
        </Row>
        <Container>
          {/* Heading */}

          {/* Main Grid */}
          <Row>
            {/* Left Text Column */}
            {/* <Col md={6} className="mb-4"> */}
            <Col xs={12} md={6} className="order-2 order-md-1 mb-4">
              <Row>
                {/* {[1, 2, 3, 4].map((item, i) => (
                  <Col xs={6} key={i} className="mb-4">
                    <div className="text-block">
                      <h4 className="fw-bold text-primary">0{item}.</h4>
                      <h6 className="fw-bold">Heading</h6>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum nisl
                        ipsum ullamcorper leo pharetra tellus
                      </p>
                    </div>
                  </Col>
                ))} */}
                {whySkillContent.map((item, index) => (
                  <Col xs={6} key={index} className="mb-4">
                    <div className="text-block">
                      <h4 className="fw-bold text-primary">{item.id}.</h4>
                      <h6 className="fw-bold">{item.title}</h6>
                      <p className="small text-muted mb-0">
                        {item.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Right Image Column */}
            {/* <Col md={6}> */}
            <Col xs={12} md={6} className="order-1 order-md-2 mb-4">
              <Row className="whyskill_dev">
                <Col xs={6} className="mb-4">
                  <img
                    src={why1}
                    alt="Skill"
                    className="img-fluid rounded shadow-sm why1"
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img
                    src={why2}
                    alt="Skill"
                    className="img-fluid rounded shadow-sm why2"
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img
                    src={why3}
                    alt="Skill"
                    className="img-fluid rounded shadow-sm why3"
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img
                    src={why4}
                    alt="Skill"
                    className="img-fluid rounded shadow-sm why4"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="skill-feature-section py-5">
        <Row className="text-center mb-4">
          <Col>
            <h5 className="fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>SKILL DEVELOPMENT</span>{" "}
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
          <Row className="feature-skillcard g-4 justify-content-center">
            {features.map((feature, idx) => (
              <Col
                xs={12}
                sm={6}
                lg={3}
                key={idx}
                className={idx === 1 || idx === 3 ? "stagger-card-lg" : ""}
              >
                <div
                  className="feature-card-img d-flex flex-column align-items-center justify-content-center text-center"
                  style={{ backgroundImage: `url(${cardImg})` }}
                >
                  <h6 className="fw-bold mb-2">{feature.title}</h6>
                  <p className="text-muted small px-3 mb-0">{feature.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* <FAQSection /> */}

      <section className="faq-section text-center py-5">
        <div className="faq-wrapper">
          <div className="faq-inner">
            <div className="container">
              {/* <div className="custom-container"> */}

              <div
                className="row justify-content-center"
                style={{ width: "100%", marginTop: "60px" }}
              >
                <div className="col-lg-10 col-md-12">
                  <h2 className="text-center faq-heading mb-4">
                    <span className="dark-text">FAQ</span>
                  </h2>
                  {/* <h2 className="text-center faq-heading mb-4">
                <span className="dark-text">FAQ’S</span>
              </h2> */}

                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="row">
                        {faqs.map((faq) => (
                          <div key={faq.id} className="col-md-6 mb-3">
                            <div
                              className={`faq-item border rounded p-3 ${
                                openFAQ === faq.id ? "expanded" : "collapsed"
                              }`}
                            >
                              <div
                                className="d-flex align-items-center justify-content-between"
                                style={{ cursor: "pointer" }}
                                onClick={() => toggleFAQ(faq.id)}
                              >
                                {/* <span className="fw-bold">{`0${faq.id}`}</span> */}
                                <button
                                  className="btn rounded-circle"
                                  // style={{
                                  //   backgroundColor: "#170645",
                                  //   borderColor: "#170645",
                                  //   color: "white",
                                  // }}
                                >
                                  {openFAQ === faq.id ? (
                                    <FaMinus />
                                  ) : (
                                    <FaPlus />
                                  )}
                                </button>
                                <span className="flex-grow-1 px-3 text-start">
                                  {faq.question}
                                </span>
                              </div>

                              {openFAQ === faq.id && (
                                <div className="faq-answer text-start mt-2">
                                  <p>{faq.answer}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopmentPage;
