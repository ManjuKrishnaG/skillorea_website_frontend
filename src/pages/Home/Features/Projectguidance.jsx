import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../../assets/styles/Faq.css";
import { Container, Row, Col } from "react-bootstrap";
import cardImg from "../../../assets/images/aifeaturecard.png";
import "../../../assets/styles/projectguidance.css";
import projectImg from "../../../assets/images/projectguidanceimg.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import whatisproject from "../../../assets/images/whatsprojectguidance.png";

const ProjectGuidance = () => {
  const whyProjectCards = [
    {
      dark: false,
      title: "Real-World Applications",
      description:
        "Apply what you learnt in class to real-life situations. Bridge theory and practice effectively. Gain practical knowledge. This prepares you for professional settings directly.",
    },
    {
      dark: true,
      title: "Improve Your Skills",
      description:
        "Develop critical thinking and problem-solving skills. Improve your creative and communication skills. These are essential qualities for modern success. Establish a strong foundation for your future roles.",
    },
    {
      dark: true,
      title: "Future Readiness",
      description:
        "Prepare for college and professional difficulties. Gain an advantage in competitive fields. Create a professional portfolio to exhibit your work. This guarantees preparation for next-generation opportunities.",
    },
    {
      dark: false,
      title: "Innovation & Creativity",
      description:
        "Encourage fresh thinking and innovative solutions. Hands-on projects provide opportunities to explore new concepts. Unleash your whole creative potential. This supports innovative approaches to learning.",
    },
  ];

  const features = [
    {
      title: "Practical Use",
      desc: "Use classroom concepts in real-life situations. Acquire good experience.",
    },
    {
      title: "Improvement of Skills",
      desc: "Develop your ability to think critically and solve problems. Develop your inventiveness.",
    },
    {
      title: "Building a Portfolio",
      desc: "Make a good professional portfolio. Effectively present your innovative projects.",
    },
    {
      title: "Professional Guidance",
      desc: "Get direction from experts. Realise the full potential of your idea.",
    },
  ];
  const faqs = [
    {
      id: 1,
      question: "What are the Real World Projects of the Skillorea?",
      answer:
        "At Skillorea, we have real-world project-based learning, which gives students real challenges to work with. These projects provide real-life experience to any student beyond the pages of textbooks.",
    },
    {
      id: 2,
      question:
        "What is the benefit of these Real-World Projects to student learning?",
      answer:
        "Students practice skills and apply what they learn in classrooms to real-life situations. This will instill critical skills and problem-solving that are essential skills in future life.",
    },
    {
      id: 3,
      question: "Which Real World Projects does Skillorea provide?",
      answer:
        "Skillorea will provide various real-world project opportunities in many different spheres. The projects vary between creative experiments and creative uses of technical knowledge.",
    },
    {
      id: 4,
      question:
        "How do Real World Projects at Skillorea receive expert guidance?",
      answer:
        "Highly skilled coaches offer all-encompassing advice throughout the project lifecycle. They make sure that students are provided with an individual approach to get their projects done.",
    },
    {
      id: 5,
      question:
        "What do Real world projects do to prepare students for future professions?",
      answer:
        "Such undertakings develop an effective professional portfolio, which is an illustration of real-life experience. This will enable the students to face any challenge and opportunities in any career.",
    },
    {
      id: 6,
      question: "Do Real World Projects of Skillorea suit every student?",
      answer:
        "Indeed, the project guidance of Skillorea is flexible in terms of diverse interests and skill levels. This will make the Real-World Project Skillorea helpful to different learners.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <>
      <section
        className="projectfeature-section"
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={projectImg}
                alt="project"
                className="img-fluid top-image"
              />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Master Practical Skills, Real Projects for Future Success
              </h2>
              <p>
                Skillorea ensures your child gains hands-on experience. We
                develop essential future skills through innovative, real-life
                projects and personalised guidance.
              </p>
              <p>
                Let us begin project guidance together, with expert support.
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
                src={projectImg}
                alt="project"
                className="img-fluid project-right-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-project py-5">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="text-center fw-bold mb-4" style={{}}>
              <span style={{ color: "#20CB01" }}>PROJECT GUIDANCE</span>{" "}
              <span style={{ color: "#070759" }}>WITH SKILLOREA</span>
            </h5>
            {/* Left Side: Grouped Image */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
              <img
                src={whatisproject}
                alt="project Overview"
                className="projectgrouped img-fluid rounded"
              />
            </div>

            {/* Right Side: Text */}
            <div className="project-guidance col-lg-6 col-md-12">
              {/* <h5 className="section-subtitle mb-4">
                      <span className="text-success fw-bold">WHAT IS </span>
                      <span className="text-primary fw-bold">ONLINE TUITION</span>
                    </h5> */}

              <p>
                Skillorea&apos;s Project Guidance offers hands-on experience
                through real-world projects. This innovative method turns
                education into real-world use. Students directly use their
                theoretical knowledge. It develops critical abilities for
                upcoming difficulties. Our programs are made to have a
                significant impact.
              </p>
              <p>
                We guide students while they work on creative projects. Students
                gain creativity, critical thinking, and problem-solving skills.
                Independent investigation is encouraged by this immersive
                method. It encourages a more profound comprehension of ideas.
                Students acquire useful experience outside of the classroom. We
                give support at every stage of the project.
              </p>
              <p>
                Project Guidance prepares students for their future success.
                They build a strong professional portfolio. This ensures
                readiness for real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-project-guidance py-5">
        <div className="text-center mb-4">
          <h5 className="fw-bold">
            <span style={{ color: "#20CB01" }}>WHY</span>{" "}
            <span style={{ color: "#070759" }}>PROJECT GUIDANCE</span>
          </h5>
          <p className="text-muted">
            Transform Learning Through Projects for Real-Life Application.
          </p>
        </div>
        <div className="container">
          {/* <div className="why-project row g-4">
            {whyProjectCards.map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div
                  className={`rounded p-4 h-100 ${
                    item.dark ? "bg-dark text-white" : "bg-light text-dark"
                  } shadow-sm d-flex flex-column justify-content-between position-relative`}
                  style={{
                    borderRadius: "20px",
                    background: item.dark
                      ? "#070759 url('/path-to-dot-dark.png') no-repeat top right"
                      : "#fff url('/path-to-dot-light.png') no-repeat top right",
                    backgroundSize: "50px",
                  }}
                >
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="why-project row g-4">
            {whyProjectCards.map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div
                  className={`why-card rounded p-4 h-100 shadow-sm d-flex flex-column justify-content-between position-relative 
          ${item.dark ? "default-dark" : "default-light"}`}
                >
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    {item.description}
                  </p>
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
              Discover the features of the project guidance programs by
              Skillorea. Learn how our innovative model changes learning to
              practice. <br />
              It gives the students the power to create a solid foundation for
              their future achievements.
            </p>
          </Col>
        </Row>
        <Container>
          {/* Heading Row */}

          {/* Cards Row */}
          {/* <Row className="feature-projectcard g-4 justify-content-center">
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
          </Row> */}
          <Row className="feature-projectcard g-4 justify-content-center">
            {features.map((feature, idx) => (
              <Col xs={12} sm={6} lg={6} xl={3} key={idx}>
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
    </>
  );
};

export default ProjectGuidance;
