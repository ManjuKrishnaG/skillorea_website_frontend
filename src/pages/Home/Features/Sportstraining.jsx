import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/styles/sportstrainingfeatures.css";
import sportsImg from "../../../assets/images/sportsitems.png";
import sportbg from "../../../assets/images/sportbg.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import kidsImage from "../../../assets/images/whatssports.png";
import icon1 from "../../../assets/images/volleyball 1.png";
import icon2 from "../../../assets/images/volleyball 1.png";
import icon3 from "../../../assets/images/volleyball 1.png";
import imgsports1 from "../../../assets/images/whysports1.png";
import imgsports2 from "../../../assets/images/whysports2.png";
import runningImg from "../../../assets/images/sportfeature.png";
import iconImg from "../../../assets/images/sportsicon.png";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../../assets/styles/Faq.css";

// import FAQSection from "../../Home/Faq";

const SportsTrainingPage = () => {
  const sportsCards = [
    {
      icon: icon1,
      title: "Physical fitness",
      desc: "We build strength, speed, and endurance effectively.",
    },
    {
      icon: icon2,
      title: "Skill development",
      desc: "Master various techniques and game strategies.",
    },
    {
      icon: icon3,
      title: "Expert Guidance",
      desc: "Receive coaching from expert professionals.",
    },
  ];

  const sportsFeatures = [
    {
      icon: iconImg,
      title: "Live Coaching",
      desc: "Join real-time sessions with expert trainers.",
    },
    {
      icon: iconImg,
      title: "Skill Analysis",
      desc: "Use advanced tech for performance insights.",
    },
    {
      icon: iconImg,
      title: "Training Plans",
      desc: "Get customized schedules for your goals.",
    },
    {
      icon: iconImg,
      title: "Progress Tracking",
      desc: "Monitor your athletic journey closely.",
    },
  ];

  const faqs = [
  {
    id: 1,
    question: "What is Skillorea, and how does it make learning fun?",
    answer:
      "Skillorea is a learning app that makes education exciting! We use fun AI characters, interactive games, and personalized activities so kids love to learn.",
  },
  {
    id: 2,
    question: "How does Skillorea help my child develop skills?",
    answer:
      "We offer diverse skill development. Your child can learn academic subjects, gain life skills, and even work on real-world projects.",
  },
  {
    id: 3,
    question: "Does Skillorea support my child's overall well-being?",
    answer:
      "Yes! Skillorea has wellness programs for physical and mental health, including sports, arts, and mindfulness activities.",
  },
  {
    id: 4,
    question: "Can I get medical help through the Skillorea app?",
    answer:
      "Yes, our free Doctors on Call service lets you consult with qualified doctors online 24/7 for quick health advice.",
  },
  {
    id: 5,
    question: "How does Skillorea use AI in learning?",
    answer:
      "Skillorea uses AI to personalize lessons, adapt to your child's pace, and provide engaging AI learning companions for support.",
  },
  {
    id: 6,
    question: "Is Skillorea safe, and how can I track my child's progress?",
    answer:
      "Yes, safety is our priority. Parents have full control, and you can track your child's detailed progress reports easily within the app.",
  },
];

const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <section
        className="sportsfeature-section"
        style={{ backgroundImage: `url(${sportbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={sportsImg}
                alt="sports"
                className="img-fluid top-image"
              />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Master Skills, Expert Guidance, and Athletic Excellence with
                Skillorea
              </h2>
              <p>
                Skillorea ensures your child&apos;s athletic growth. We build
                skilled and successful futures through diverse sports programs
                and activities.
              </p>
              <p>Start your sports training, with expert guidance.</p>
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
                src={sportsImg}
                alt="sports"
                className="img-fluid sports-right-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-section">
        <h5 className="text-center fw-bold mb-2">
          <span style={{ color: "#20CB01" }}>SPORTS TRAINING</span>{" "}
          <span style={{ color: "#070759" }}>WITH SKILLOREA</span>
        </h5>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
              <img
                src={kidsImage}
                alt="Kids Running"
                className="whatskill img-fluid rounded"
              />
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-12">
              <p>
                Skillorea offers complete sports training programs. We develop
                physical fitness, coordination, and athletic skills. Expert
                guidance ensures every student reaches their full potential. Our
                approach emphasizes growth, discipline, and healthy living for
                all.This improves your child&apos;s overall physical
                conditioning and agility. We enhance athletic abilities with
                personalized instruction and practice, fostering true sporting
                potential and dedication. This is your best online sports
                training booking. Find convenient training options nearby home.
              </p>

              {/* Icon Cards */}
              <div className="row mt-4">
                {sportsCards.map((card, index) => (
                  <div className="col-4 text-center" key={index}>
                    <div className="icon-card p-3">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="icon-img mb-2"
                      />
                      <h6 className="fw-semibold">{card.title}</h6>
                      <small>{card.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="why-sports-section py-5">
        <div className="text-center mb-5">
          <h5 className="text-center fw-bold mb-2">
            <span style={{ color: "#20CB01" }}>WHY</span>{" "}
            <span style={{ color: "#070759" }}>SPORTS TRAINING</span>
          </h5>
          <p className="px-md-5">
            Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
            ullamcorper leo pharetra tellus sapien pellentesque lectus
          </p>
        </div>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={teamImage1}
                alt="Team 1"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={teamImage2}
                alt="Team 2"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="why-sports-training py-5">
        <Row className="mb-4 text-center">
          <Col>
            <h5 className="fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>WHY</span>{" "}
              <span style={{ color: "#070759" }}>SPORTS TRAINING</span>
            </h5>
            <p className="text-muted">
              Investing in sports training is essential for overall student
              development. It creates strong{" "}
              <br className="d-none d-md-block" />
              foundations for future success.
            </p>
          </Col>
        </Row>

        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6} className="mb-4 mb-md-0 text-center">
              <img
                src={imgsports1}
                alt="Training 1"
                className="why-sports-training-img1 img-fluid rounded"
              />
            </Col>
            <Col md={6}>
              <p>
                Skillorea&apos;s initiatives to promote physical wellness. We
                improve strength, speed, and endurance. Students increase their
                coordination and flexibility. Consistent physical activity
                promotes general well-being. It relieves stress and improves
                mental clarity, allowing for better academic performance. This
                builds adaptation and promotes a healthy lifestyle. Our training
                promotes balanced growth for all learners, assuring lasting
                benefits.
              </p>
              <p>
                Skillorea also improves mental strength. Students develop
                discipline and focus. They acquire strategic thinking skills
                through enjoyable play. These characteristics are required both
                on and off the field, preparing students to handle life&apos;s
                challenges with confidence.
              </p>
              <p>
                Choose Skillorea for complete physical and mental development.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <p>
                Our athletic training develops important life skills. Students
                develop teamwork and leadership skills. They learn
                problem-solving skills and good communication. Participation in
                athletics develops strong character. It teaches respect and fair
                play. This encourages social development in a supportive
                setting, which is essential for collaborative success.
              </p>
              <p>
                Sports exercises with Skillorea increase confidence. Achieving
                training goals leads to increased academic confidence. It
                instills hard work and determination. This produces well-rounded
                individuals who are ready for any challenge. Our programs offer
                a fun, energetic method to learn important skills for a balanced
                and successful future.
              </p>
              <p>
                Skillorea offers expert-led sports training that will empower
                your child.
              </p>
            </Col>
            <Col md={6} className="mb-4 mb-md-0 text-center">
              <img
                src={imgsports2}
                alt="Training 1"
                className="why-sports-training-img2 img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sports-features-section py-5">
        <div className="text-center mb-5">
          <h5 className="text-center section-subtitle mb-3">
            <span className="text-success fw-bold">SPORTS TRAINING </span>
            <span className="text-primary fw-bold">FEATURES</span>
          </h5>
          <p className="px-md-5">
            ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper
            leo pharetra tellus pellentesque lectus
          </p>
        </div>

        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 d-lg-none order-1 mb-4 text-center">
              <img
                src={runningImg}
                alt="Running Kids"
                className="sportsfeaturesimg img-fluid rounded"
              />
            </div>

            <div className="col-lg-6 order-2 order-lg-1 mb-4">
              <p>
                Skillorea's sports training features are designed for
                comprehensive athletic growth. We offer diverse programs to
                develop physical fitness and coordination. Expert guidance
                ensures skill enhancement. Our approach provides overall
                well-being, discipline, and healthy living for every
                participant. Experience a new dimension of sports advancement
                with us.
              </p>

              <img
                src={runningImg}
                alt="Running Kids"
                className="sportsfeaturesimg img-fluid rounded mt-3 d-none d-lg-block"
              />
            </div>

            {/* <div className="col-lg-6 order-3">
              <div className="row g-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="sports-feature-card text-white text-center p-3 h-100 rounded">
                      <img
                        src={iconImg}
                        alt="Icon"
                        className="mb-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <h6 className="fw-semibold text-start">Heading</h6>
                      <p
                        className="mb-0 text-start"
                        style={{ fontSize: "14px" }}
                      >
                        Lorem ipsum dolor sit amet, sed do eiusmod
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="col-lg-6 order-3">
              <div className="row g-4">
                {sportsFeatures.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="sports-feature-card text-white text-center p-3 h-100 rounded">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="mb-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <h6 className="fw-semibold text-start">{item.title}</h6>
                      <p
                        className="mb-0 text-start"
                        style={{ fontSize: "14px" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
                                      {openFAQ === faq.id ? <FaMinus /> : <FaPlus />}
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

export default SportsTrainingPage;
