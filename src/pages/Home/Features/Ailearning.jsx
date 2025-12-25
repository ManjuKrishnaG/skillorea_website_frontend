import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/styles/Ailearning.css";
import AiImg from "../../../assets/images/AiLearningimg.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import whatisai from "../../../assets/images/what_is_ai.png";
import icon1 from "../../../assets/images/whyaiicon1.png";
import icon2 from "../../../assets/images/whyaiicon2.png";
import icon3 from "../../../assets/images/whyaiicon3.png";
import icon4 from "../../../assets/images/whyaiicon4.png";
import aiImage from "../../../assets/images/whyailearning.png";
import cardImg from "../../../assets/images/aifeaturecard.png";
// import FAQSection from "../../Home/Faq";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../../assets/styles/Faq.css";

const AiLearningPage = () => {
  const aiFeatures = [
    {
      icon: icon1,
      title: "Critical Thinking",
      desc: "AI-powered tasks can help to improve problem-solving and reasoning skills.",
    },
    {
      icon: icon2,
      title: "Collaboration",
      desc: "Engaging group activities can help to improve teamwork and communication.",
    },
    {
      icon: icon3,
      title: "Creativity",
      desc: "Develop creativity by completing tasks that encourage fresh thought.",
    },
    {
      icon: icon4,
      title: "Communication",
      desc: "Acquire clarity and confidence by disciplined expression and communication.",
    },
  ];

  const features = [
    {
      title: "Personalized Paths",
      desc: "AI creates custom learning journeys tailored to each student's unique needs effectively.",
    },
    {
      title: "Interactive Tutors",
      desc: "Learn with AI characters, and Rea AI guiding you through lessons interactively.",
    },
    {
      title: "Content Simplification",
      desc: "AI transforms difficult topics into shorter, more engaging, and easier-to-understand content.",
    },
    {
      title: "Performance Insights",
      desc: "AI analyzes your progress, offering data-driven insights for optimal results and development.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the AI Learning with Skillorea?",
      answer:
        "Skillorea uses Artificial Intelligence as a way to provide smarter and personalised educational experience. It takes your individual requirements and uses content and guidance to study effectively.",
    },
    {
      id: 2,
      question:
        "What does it mean that AI makes my learning experience personal?",
      answer:
        "Artificial intelligence technology also examines how you move forward and what you like to give you a unique course. This makes sure that you get the content that fits your individual demands.",
    },
    {
      id: 3,
      question: "How to use AI characters in the learning process?",
      answer:
        "Virtual aides and teachers are AI characters such as Rea AI. They are the ones to teach you the lessons as well as offer immediate fallback wherever there is an inquiry.",
    },
    {
      id: 4,
      question: "Does it simplify learning on advanced topics with AI?",
      answer:
        "Of course, AI rewrites complex material, shortening it and making it more engaging. It encourages interactive operations in order to understand better.",
    },
    {
      id: 5,
      question: "Is AI learning instead of human teachers?",
      answer:
        "Not, AI learning supplements well trained pedants by offering an individualized tutoring. It supplements the entire learning process with human learning.",
    },
    {
      id: 6,
      question: "What grades will I get in AI learning?",
      answer:
        "The learning of AI seeks maximum outcome and growth which results to good grades. The personalized style enables students to learn concepts well.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <section
        className="aifeature-section"
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img src={AiImg} alt="ai" className="img-fluid top-image" />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Master Learning, AI-Powered, and Personalized Excellence
              </h2>
              <p>
                Skillorea ensures your child&apos;s smart learning. We build
                brilliant minds and strong foundations through customized AI
                programs and interactive functions.
              </p>
              <p>Let us start AI learning together, with expert guidance.</p>
              <img
                src={bookNowImage}
                alt="Book Now"
                className="img-button"
                // onClick={handleClick}
              />
            </div>

            {/* Right Side Image (Hidden on Small Screens) */}
            <div className="col-lg-6 col-md-12 col-10 text-center d-none d-md-block">
              <img src={AiImg} alt="ai" className="img-fluid ai-right-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-ailearning py-5">
        <div className="container">
          <div className="row align-items-center ai-layout">
            <h5 className="Ailearn-heading text-center fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>AI LEARNING WITH</span>{" "}
              <span style={{ color: "#070759" }}>SKILLOREA</span>
            </h5>
            {/* Left Side: Grouped Image */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
              <img
                alt="Tuition Overview"
                src={whatisai}
                className="ailearninggrouped img-fluid rounded"
              />
            </div>

            {/* Right Side: Text */}
            <div className="Ailearn-para col-lg-6 col-md-12">
              {/* <h5 className="section-subtitle mb-4">
                <span className="text-success fw-bold">WHAT IS </span>
                <span className="text-primary fw-bold">ONLINE TUITION</span>
              </h5> */}

              <p>
                Skillorea&apos;s AI Learning offers highly personalized academic
                support. It creates a custom journey for each user. Our
                intelligent system adapts to individual needs and preferences.
                This results in the most effective and interesting learning
                experience for students. It truly transforms how education is
                delivered.
              </p>
              <p>
                Our platform features AI-powered virtual assistants and engaging
                characters. They guide and support students from beginning to
                end. AI makes difficult content shorter and more interesting to
                understand. This promotes interactive functions within the
                learning environment. It&apos;s smart, effective, and deeply engaging
                education for all.
              </p>
              <p>
                Skillorea AI Tutor Rea AI is here for you. You can ask anything
                anytime; Rea will help you. Skillorea’s AI ensures optimal
                results and development. It provides a unique, customized
                learning advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-ai-section py-5">
        <Row className="text-center mb-4">
          <Col>
            <h5 className="transform-heading fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>TRANSFORM LEARNING</span>{" "}
              <span style={{ color: "#070759" }}>WITH AI</span>
            </h5>
            <p className="text-muted">
              AI learning offers personalized, smart, and highly effective
              education for students. This innovative strategy ensures that
              every student <br />
              reaches their full academic potential.
            </p>
          </Col>
        </Row>

        <Container>
          <Row>
            {/* Left Column - Features */}
            <Col xs={12} md={6} className="order-2 order-md-1 mb-4">
              <Row>
                {aiFeatures.map((item, index) => (
                  <Col xs={6} key={index} className="mb-4">
                    <div className="text-block d-flex flex-column align-items-start">
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{
                          width: "45px",
                          height: "45px",
                          marginBottom: "10px",
                        }}
                      />
                      <h6 className="fw-bold">{item.title}</h6>
                      <p className="small text-muted mb-0">{item.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Right Column - Single Image */}
            <Col xs={12} md={6} className="order-1 order-md-2 mb-4 text-center">
              <img
                src={aiImage}
                alt="Ai Development"
                className="transform-img img-fluid rounded shadow-sm"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ai-feature-section py-5">
        <Row className="text-center mb-4">
          <Col>
            <h5 className="ailearn-features fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>AI LEARNING</span>{" "}
              <span style={{ color: "#070759" }}>FEATURES</span>
            </h5>
            <p className="text-muted">
              Explore the advanced features of Skillorea&apos;s AI learning
              platform. Discover how our
              <br />
              technology customizes your educational journey
            </p>
          </Col>
        </Row>
        <Container>
          {/* Heading Row */}

          {/* Cards Row */}
          <Row className="feature-aicard g-4 justify-content-center">
            {features.map((feature, idx) => (
              // <Col xs={12} sm={6} lg={3} key={idx}>
              <Col xs={12} sm={6} lg={6} xl={3} key={idx}>
                <div
                  className="aifeature-card-img d-flex flex-column align-items-center justify-content-center text-center"
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
                    <span className="faq-heading dark-text">FAQ</span>
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
    </>
  );
};

export default AiLearningPage;
