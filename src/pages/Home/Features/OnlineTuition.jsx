import "../../../assets/styles/onlinetuition.css";
import tuitionImg from "../../../assets/images/onlinetuitionimg.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import tuitionGrouped from "../../../assets/images/tuitiongrouped.png";
import icon1 from "../../../assets/images/online1.png";
import icon2 from "../../../assets/images/online2.png";
import icon3 from "../../../assets/images/online3.png";
import icon4 from "../../../assets/images/online4.png";
import icon5 from "../../../assets/images/online5.png";
import icon6 from "../../../assets/images/online6.png";
import tuitionFeatureImg from "../../../assets/images/onlinefeature.png";
import featureIcon from "../../../assets/images/onlinefeatureicon.png";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../../assets/styles/Faq.css";

// import FAQSection from "../../Home/Faq";

const OnlineTuitionPage = () => {
  const features = [
    {
      icon: icon1,
      title: "Personalized Learning",
      desc: "We adapt lessons precisely to your child's unique learning pace and needs.",
    },
    {
      icon: icon2,
      title: "Expert Guidance",
      desc: "Learn from qualified teachers who provide dedicated support and insightful instruction.",
    },
    {
      icon: icon3,
      title: "Flexible Access",
      desc: "Study any subject, anywhere, anytime, to fit your family's schedule perfectly.",
    },
    {
      icon: icon4,
      title: "Interactive Lessons",
      desc: "Engage with dynamic modules and live doubt-clearing sessions for better understanding.",
    },
    {
      icon: icon5,
      title: "Guaranteed Results",
      desc: "Our method focuses on mastery and optimal academic outcomes for every student.",
    },
    {
      icon: icon6,
      title: "Comprehensive Support",
      desc: "Access all subjects and receive continuous assistance throughout your learning journey.",
    },
  ];

  const onlinefeatures = [
    {
      title: "Live Interactive Classes",
      desc: "Engage with experienced teachers in real time. Participate actively, ask questions, and explain concepts during sessions.",
    },
    {
      title: "Personalised Study Plans",
      desc: "Receive individualised learning routes based on your specific requirements. This improves your progress and helps you meet your academic objectives.",
    },
    {
      title: "Unlimited Retests",
      desc: "Practice ideas with limitless retests to achieve mastery. Improve your understanding and confidence for tests.",
    },
    {
      title: "Doubt-clearing Sessions",
      desc: "Get rapid clarification from teachers. Resolve all of your questions to ensure a clear comprehension of the topics.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How much time is needed for online tuition daily?",
      answer:
        "One to two hours daily is sufficient for learning. Adjust based on your child’s pace.",
    },
    {
      id: 2,
      question: "What teaching methods are used in Skillorea's live classes?",
      answer:
        "There are also live classes where individual interaction with the specialist teachers is carried out: doubt resolution. Students also do self learning modules and free retention testing.",
    },
    {
      id: 3,
      question: "Can I track my child's progress and get academic support?",
      answer:
        "Yes, parents can monitor their child's learning journey and view progress clearly. The site provides ways of making sure that the students get the required academic assistance.",
    },
    {
      id: 4,
      question: "What subjects are covered in Skillorea's online tuition?",
      answer:
        "We provide online tuition in all the academic subjects, which means a wide curriculum coverage. Learners are able to master different concepts in many fields.",
    },
    {
      id: 5,
      question: "How can I access Skillorea's online tuition?",
      answer:
        "Our platform is convenient to use and is available over any device, any place, at any time. Just log in and you will be able to get your individualized lessons and live sessions.",
    },
    {
      id: 6,
      question: "Shall I only join there to get Skillorea tuition?",
      answer:
        "It is yes you may select live tuition as a special program with Skillorea. We provide definite plans dealing with interactive live classes only with experienced instructors.",
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
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={tuitionImg}
                alt="sports"
                className="img-fluid top-image"
              />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Master Academics, Personalized Expert Guidance, Online
                Excellence
              </h2>
              <p>
                Skillorea ensures your child&apos;s academic success. We build
                brilliant minds and strong foundations through tailored online
                learning programs and interactive lessons
              </p>
              <p>
                Let us start your tuition journey together, with expert
                guidance.
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
                src={tuitionImg}
                alt="sports"
                className="img-fluid sports-right-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-tuition py-5">
        <div className="container">
          <div className="row align-items-center online-tuition-layout">
            <h5 className="online-tuition-heading text-center fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>SKILLOREA</span>{" "}
              <span style={{ color: "#070759" }}>ONLINE TUITION</span>
            </h5>
            {/* Left Side: Grouped Image */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
              <img
                src={tuitionGrouped}
                alt="Tuition Overview"
                className="tuitiongrouped img-fluid rounded"
              />
            </div>

            {/* Right Side: Text */}
            <div className="online-tuition-para col-lg-6 col-md-12">

              <p>
                Skillorea&apos;s online tuition provides full academic help to
                all students. We offer personalised learning paths, which ensure
                customised instruction from qualified teachers. This approach is
                also flexible to the needs of individuals and well helps to
                guide students towards the academic success and best
                performance. It transfers better education to your home.
              </p>
              <p>
                We offer live doubt-clearing sessions and interactive
                self-learning programs. Unlimited retests help students ensure
                they have mastered the concepts. It also facilitates a deep
                learning and participation dynamic approach. It guarantees
                engaging lessons beyond ordinary learning activities. We want a
                constant growing and more confident students in our system.
              </p>
              <p>
                The goal of Skillorea&apos;s online instruction is academic
                success. It offers easy access to professional advice.
                Effectively accomplish your learning objectives from any
                location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-tuition-section py-5">
        <div className="text-center mb-5">
          <h5 className="elevate-section text-center fw-bold mb-2">
            <span style={{ color: "#20CB01" }}>ELEVATE YOUR EDUCATION,</span>{" "}
            <span style={{ color: "#070759" }}>THE ONLINE WAY</span>
          </h5>
          <p className="px-md-5">
            Online tuition offers flexible, personalized learning for student
            success. It provides expert guidance and interactive lessons. This
            method truly optimizes academic progress.
          </p>
        </div>
        <div className="container">
          {/* <div className="text-center mb-5">
            <h5 className="section-subtitle mb-3">
              <span className="text-success fw-bold">WHY </span>
              <span className="text-primary fw-bold">ONLINE TUITION</span>
            </h5>
            <p className="px-md-5">
              Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
              ullamcorper leo pharetra tellus sapien pellentesque lectus
            </p>
          </div> */}

          <div className="row">
            {features.map((item, idx) => (
              <div className="col-md-6 mb-4" key={idx}>
                <div className="elevate-points d-flex align-items-start gap-3">
                  <div>
                    <img
                      src={item.icon}
                      alt={`icon-${idx}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#f2f4ff",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">{item.title}</h6>
                    <p
                      className="mb-0"
                      style={{ fontSize: "14px", color: "#555" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="online-tuition-features py-5">
        <div className="text-center mb-5">
          <h5 className="academic-success text-center fw-bold mb-2">
            <span style={{ color: "#20CB01" }}>ONLINE TUITION</span>{" "}
            <span style={{ color: "#070759" }}>FOR ACADEMIC SUCCESS</span>
          </h5>
          <p className="px-md-5">
            Explore Skillorea&apos;s online tuition features. Discover how our
            comprehensive programs can benefit you.
          </p>
        </div>
        <div className="container">
          {/* Section Heading */}

          {/* Image + Feature List */}
          <div className="row align-items-center online-tuition-academic-layout">
            {/* Left Image */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
              <img
                src={tuitionFeatureImg}
                alt="Online Tuition"
                className="academy-img img-fluid rounded"
              />
            </div>

            {/* Right Feature Cards */}
            <div className="col-lg-6 col-md-12">
              {onlinefeatures.map((feature, idx) => (
                <div key={idx} className="d-flex align-items-start mb-4 gap-3">
                  <div>
                    <img
                      src={featureIcon}
                      alt="icon"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#00006A",
                        padding: "10px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">{feature.title}</h6>
                    <p
                      className="mb-0"
                      style={{ fontSize: "14px", color: "#444" }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
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

      {/* <FAQSection /> */}
    </>
  );
};

export default OnlineTuitionPage;
