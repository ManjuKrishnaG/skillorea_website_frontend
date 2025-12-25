import { Container, Row, Col } from "react-bootstrap";
// import heroImg from "../../../assets/images/learnandearnbanner.png";
import learnImg from "../../../assets/images/learnbannerimg.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import graphImg from "../../../assets/images/whatlearnandearn.png";
import featureImg from "../../../assets/images/whylearnandearnimg.png";
import student1 from "../../../assets/images/student1.png";
import student2 from "../../../assets/images/student2.png";
import student3 from "../../../assets/images/student3.png";
import startlearning from "../../../assets/images/learnbannernew.png";
import "../../../assets/styles/learnfeature.css";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../../assets/styles/Faq.css";
// import FAQSection from "../../Home/Faq";

import {
  FaBook,
  FaUsers,
  FaBullhorn,
  FaLightbulb,
  // FaArrowRight,
} from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What is Skillorea's Learn & Earn program?",
    answer:
      "Skillorea's Learn & Earn program rewards your learning efforts. It turns academic achievements and engagement into valuable Credit Points.",
  },
  {
    id: 2,
    question: "How do I earn Credit Points with Skillorea?",
    answer:
      "You earn Credit Points by scoring well on tests and engaging in various activities like wellness and sports. Daily logins, skill course completion, and referrals also add to your points.",
  },
  {
    id: 3,
    question: "What can I use my earned Credit Points for?",
    answer:
      "Your earned Credit Points can be used for exciting benefits within the Skillorea ecosystem. This helps you unlock more learning opportunities and exclusive features.",
  },
  {
    id: 4,
    question: "Do Credit Points have real monetary value?",
    answer:
      "Yes, Credit Points reflect real-world value based on your effort and performance. They subtly introduce essential financial literacy and money management skills.",
  },
  {
    id: 5,
    question: "Are Credit Points refundable or transferable?",
    answer:
      "Generally, Credit Points are non-refundable and non-transferable once earned. Specific bonuses like Referral and Revision points are also non-refundable.",
  },
  {
    id: 6,
    question: "How does Learn & Earn motivate continuous learning?",
    answer:
      "The program provides tangible incentives, making education more engaging and rewarding. This helps students stay disciplined and eager to master new skills.",
  },
];

const LearnandEarn = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <div className="learn-earn-wrapper">
      {/* Hero Section */}

      <section
        className="learnfeature-section"
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img src={learnImg} alt="learn" className="img-fluid top-image" />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Learn, Earn Points, Grow Smart Habits with Skillorea
              </h2>
              <p>
                Earn points with every learning step you take. Earn while you
                learn, gain skills, and manage money wisely!
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
                src={learnImg}
                alt="learn"
                className="img-fluid learn-right-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Graph Section */}
      {/* <section className="stats-section py-5">
        <Container>
          <Row className="align-items-center">
            <div className="text-center mb-3">
              <h5 className="mb-2 fw-bold">
                <span style={{ color: "#20CB01" }}>WHAT</span>
                <span style={{ color: "#20CB01", margin: "0 8px" }}>IS</span>
                <span style={{ color: "#070759" }}>LEARN & EARN ?</span>
              </h5>
            </div>

            <Row className="align-items-center">
              <Col md={6}>
                <img
                  src={graphImg}
                  alt="Bar Graph"
                  className="whatlearnimg img-fluid"
                  style={{ maxWidth: "80%", height: "auto" }}
                />
              </Col>
              <Col md={6}>
                <div style={{ marginTop: "-80px" }}>
                  {" "}
                  
                  <p className="whatlearn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </section> */}

      <section className="stats-section py-5">
        <div className="text-center mb-4">
          <h5 className="mb-2 fw-bold">
            <span style={{ color: "#20CB01" }}>WHAT</span>
            <span style={{ color: "#20CB01", margin: "0 8px" }}>IS</span>
            <span style={{ color: "#070759" }}>LEARN & EARN ?</span>
          </h5>
        </div>
        <Container>
          <Row className="align-items-center">
            {/* Left Image with graph and numbers */}
            <Col lg={6} className="position-relative text-center">
              <img
                src={graphImg}
                alt="Bar Graph"
                className="whatlearnimg img-fluid"
                style={{ maxWidth: "70%", height: "auto" }}
              />
              <div className="d-flex justify-content-center gap-4 stats-numbers-container">
                <div className="text-start">
                  <h5 className="fw-bold text-success mb-0">30K+</h5>
                  <small className="text-muted">Customers</small>
                </div>
                <div className="text-start">
                  <h5 className="fw-bold text-success mb-0">28K+</h5>
                  <small className="text-muted">Active Customer</small>
                </div>
              </div>
            </Col>

            {/* Right Text Content */}
            <Col lg={6}>
              <div className="learn-earn-text">
                <p className="mb-3">
                  Skillorea introduces a unique program where your learning
                  directly earns rewards. This system will inspire students
                  because they will feel appreciated for all the efforts they
                  put in. It will turn studying into a fascinating experience.
                  You achieve milestones and gain points. This encourages active
                  participation in the activities. It is an effective way of
                  learning that is rewarding.
                </p>
                <p className="mb-3">
                  Our program makes an educational link to the real-world value.
                  The points are obtained by doing tests, practicing wellness
                  activities, and even logging in. Referrals and completing the
                  courses on skills are also credited to the balance. All this
                  means is your commitment. This new model encourages regular
                  studying behaviours.
                </p>
                <p>
                  This method will help students develop intelligent ways of
                  managing money and learn about earning.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Feature Section */}
      {/* <section className="features-section py-5 bg-light">
      <h2 className="text-center mb-5">Core Skills We Teach</h2>
        <Container>
          
          <Row>
            <Col md={6}>
              <ul className="feature-list">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Communication
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Collaboration
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Leadership
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Problem Solving
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <img
                src={featureImg}
                alt="Features"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="why-learn-earn py-5">
        <Container>
          <Row className="align-items-center">
            <div className="mb-3" style={{ textAlign: "center" }}>
              <div className="text-center mb-3">
                <h5 className="mb-2 fw-bold">
                  <span style={{ color: "#20CB01" }}>WHY</span>
                  <span style={{ color: "#070759", margin: "0 8px" }}>
                    LEARN
                  </span>
                  <span style={{ color: "#070759" }}>& EARN</span>
                </h5>
              </div>
              <p className="text-muted mb-4">
                Skillorea introduces an innovative Learn & Earn. It makes
                education a thrilling experience. This platform encourages
                students in innovative ways that are not traditionally used,
                facilitates interactive learning, and the application of
                financial literacy.
              </p>
            </div>
            {/* LEFT COLUMN */}
            <Col md={6} className="mb-4 mb-md-0">
              <Row>
                {/* Feature Boxes */}
                <Col xs={6} className="mb-4">
                  <div className="headingtext feature-box p-3  rounded text-center  h-100">
                    <FaBook size={24} className=" text-primary mb-2" />
                    <h6 className="fw-bold">Boosted Motivation</h6>
                    <p className="small mb-0 text-muted">
                      Learning becomes exciting when efforts earn rewards. This
                      system creates enthusiasm towards each lesson.
                    </p>
                  </div>
                </Col>
                <Col xs={6} className="mb-4">
                  <div className="headingtext feature-box p-3 rounded text-center h-100">
                    <FaUsers size={24} className="text-success mb-2" />
                    <h6 className="fw-bold">Value for Effort</h6>
                    <p className="small mb-0 text-muted">
                      Every step taken in learning has value. Students see their
                      hard work directly translated into points.
                    </p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div
                    className="headingtext1
                   feature-box p-3 rounded text-center  h-100"
                  >
                    <FaBullhorn size={24} className="text-danger mb-2" />
                    <h6 className="fw-bold">Practical Financial Skills</h6>
                    <p className="small mb-0 text-muted">
                      Acquire essential money management skills at an early
                      stage. Know how hard work is worth in real life.
                    </p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="headingtext1 feature-box p-3 rounded text-center h-100">
                    <FaLightbulb size={24} className="text-dark mb-2" />
                    <h6 className="fw-bold">Complete Growth</h6>
                    <p className="small mb-0 text-muted">
                      Connect academic achievements with personal rewards.
                      Develop a balanced view of success.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            {/* RIGHT COLUMN */}
            <Col md={6} className="text-center position-relative">
              {/* Arrow icon */}
              {/* <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#0c0c4a",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "10px",
                  zIndex: 1,
                }}
              >
                <FaArrowRight size={20} />
              </div> */}

              <img
                src={featureImg}
                alt="Kids"
                className="img-fluid rounded"
                style={{ width: "60%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      {/* <section className="how-work-section py-5">
        <div className="text-center mb-5">
          <div className="text-center mb-3">
            <h5 className="mb-2 fw-bold">
              <span style={{ color: "#20CB01" }}>HOW</span>
              <span style={{ color: "#20CB01", margin: "0 8px" }}>DOES IT</span>
              <span style={{ color: "#070759" }}>WORK</span>
            </h5>
          </div>
          <p className="text-muted small">
            ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper
            leo pharetra tellus <br />
            pellentesque lectus
          </p>
        </div>
        <Container>
          
          <Row className="justify-content-center align-items-end">
            <Col xs={10} md={4} className="mb-3 mb-md-0">
              <div className="image-card position-relative overflow-hidden rounded shadow">
                <img
                  src={student1}
                  alt="Efforts"
                  className="img-fluid w-100 student-img"
                />
                <div className="overlay-text position-absolute text-white p-3 w-100">
                  <h6 className="fw-bold mb-1">Efforts</h6>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum nisl
                    ipsum
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={10} md={4} className="mb-3 mb-md-0 mt-md-n4">
              <div className="position-relative">
                <img
                  src={student2}
                  alt="Hard Work"
                  className="img-fluid w-100 student-img"
                />
                <div className="overlay-text position-absolute text-white p-3 w-100">
                  <h6 className="fw-bold">Hard Work</h6>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum nisl
                    ipsum
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={10} md={4} className="mb-3 mb-md-0">
              <div className="position-relative">
                <img
                  src={student3}
                  alt="Earnings"
                  className="img-fluid w-100 student-img"
                />
                <div className="overlay-text position-absolute text-white p-3 w-100">
                  <h6 className="fw-bold text-danger">Earnings</h6>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum nisl
                    ipsum
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="how-it-works py-5">
        <div className="text-center mb-4">
          <h5 className="fw-bold mb-2">
            <span style={{ color: "#20CB01" }}>THE LEARN & EARN</span>{" "}
            <span style={{ color: "#070759" }}>ADVANTAGE</span>
          </h5>
          <p className="text-muted" style={{ marginBottom: "70px" }}>
            Our innovative model turns your dedication into rewards.{" "}
            <br className="d-none d-md-block" />
            You can redeem these rewards.
          </p>
        </div>
        <Container>
          <Row className="justify-content-center">
            {/* Left Card */}
            <Col md={4} className="mb-4">
              <div className="work-card">
                <img
                  src={student1}
                  alt="Efforts"
                  className="img-fluid rounded"
                />
                <div className="overlay">
                  <h6 className="title">Your Action</h6>
                  <p className="desc">
                    Your active learning and consistent study.
                  </p>
                </div>
              </div>
            </Col>

            {/* Center Card (lifted up) */}
            <Col md={4} className="mb-4">
              <div className="work-card lifted">
                <img
                  src={student2}
                  alt="Hard Work"
                  className="img-fluid rounded"
                />
                <div className="overlay">
                  <h6 className="title">Smart Dedication</h6>
                  <p className="desc">Mastering skills and achieving goals.</p>
                </div>
              </div>
            </Col>

            {/* Right Card */}
            <Col md={4} className="mb-4">
              <div className="work-card">
                <img
                  src={student3}
                  alt="Earnings"
                  className="img-fluid rounded"
                />
                <div className="overlay">
                  <h6 className="title text-danger">Rewards Gained</h6>
                  <p className="desc">Valuable points you collect and use.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      {/* <section
        className="cta-section text-white text-center py-5"
        style={{ backgroundImage: `url(${startlearning})` }}
      >
        <Container>
          <h2 className="mb-3">Learn today and start earning tomorrow!</h2>
          <Button variant="warning">Start Learning</Button>
        </Container>
      </section> */}

      <section
        className="start-learning-section text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${startlearning})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "250px",
        }}
      >
        <Container fluid className="py-5">
          <Row className="align-items-center px-md-5">
            <Col md={8}>
              <h5 className="text-uppercase fw-bold mb-3">
                Safe Learning with Parent Control
              </h5>
              <p className="small mb-0 text-white-50">
                Safety is our top priority. Parents can easily monitor their
                child’s progress and stay involved.
              </p>
            </Col>
            <Col md={4} className="text-end"></Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      {/* <section className="faq-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">FAQs</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Learn & Earn?</Accordion.Header>
              <Accordion.Body>
                It&apos;s a platform for students to learn new skills and earn
                rewards.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Who can participate?</Accordion.Header>
              <Accordion.Body>
                Students from grade 3 to 10 from any school.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Is it free to join?</Accordion.Header>
              <Accordion.Body>Yes, it is completely free.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section> */}
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

export default LearnandEarn;
