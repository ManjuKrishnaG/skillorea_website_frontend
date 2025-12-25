import { useState } from "react";
import "../../../assets/styles/Features.css";
import icon1 from "../../../assets/images/feature4.png";
import icon2 from "../../../assets/images/feature2.png";
import icon3 from "../../../assets/images/feature3.png";
import icon4 from "../../../assets/images/feature1.png";
import icon5 from "../../../assets/images/feature5.png";
import icon6 from "../../../assets/images/feature6.png";
import icon7 from "../../../assets/images/feature7.png";
import icon8 from "../../../assets/images/feature8.png";
import icon9 from "../../../assets/images/feature9.png";
import full1 from "../../../assets/images/skilldev.png";
import full2 from "../../../assets/images/sportstraining.png";
import full3 from "../../../assets/images/onlinetuition.png";
import full4 from "../../../assets/images/Ailearning.png";
import full5 from "../../../assets/images/learnimg.png";
import full6 from "../../../assets/images/projectguidance.png";
import full7 from "../../../assets/images/healthandwellness.png";
import full8 from "../../../assets/images/parentsportal.png";
import full9 from "../../../assets/images/scoreboard.png";

import arrowIcon from "../../../assets/images/featureicon.png";
import downArrow from "../../../assets/images/downarrow.png";
import upArrow from "../../../assets/images/uparrow.png";

const OurFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const features = [
    {
      title: "LEARN & EARN",
      icon: icon5,
      expandedImage: full5,
      description:
        "Earn points for your learning achievements. Redeem rewards and build smart money habits.",
      // link: "/learn-earn",
    },
    {
      title: "SKILL DEVELOPMENT",
      icon: icon1,
      expandedImage: full1,
      description:
        "Develop real-world skills with Skillorea's engaging activities. Prepare for future success through practical learning.",
      // link: "/skill-development",
    },
    {
      title: "SPORTS TRAINING",
      icon: icon2,
      expandedImage: full2,
      description:
        "Learn from expert coaches to master your chosen sports skills, fitness and teamwork.",
      // link: "/sports-training",
    },
    {
      title: "ONLINE TUITION",
      icon: icon3,
      expandedImage: full3,
      description:
        "Personalized academic support, expert guidance, interactive lessons, and effective study strategies.",
      // link: "/online-tuition",
    },
    {
      title: "AI LEARNING",
      icon: icon4,
      expandedImage: full4,
      description:
        "Smart learning with Skillorea's AI tools. Meet your personalized AI learning buddy.",
      // link: "/Ai-learning",
    },
    {
      title: "PROJECT GUIDANCE",
      icon: icon6,
      expandedImage: full6,
      description:
        "Work on real-world projects for practical experience. Develop essential skills for future success.",
      // link: "/project-guidance",
    },
    {
      title: "HEALTH & WELLNESS",
      icon: icon7,
      expandedImage: full7,
      description:
        "Nurture your child's physical and mental well-being. Access diverse activities and expert health support.",
      // link: "/health-wellness",
    },
    {
      title: "PARENTS PORTAL",
      icon: icon8,
      expandedImage: full8,
      description:
        "Parents can track their child's performance easily. Stay informed with detailed reports on their learning journey.",
      // link: "/parents-portal",
    },
    {
      title: "SCOREBOARD & RANKINGS",
      icon: icon9,
      expandedImage: full9,
      description:
        "Monitor your progress and see your scores. Engage in healthy competition with dynamic rankings across locations.",
      // link: "/scoreboard-rankings",
    },
  ];

  return (
    <section className="feature-section bg-white">
      {/* <section className="py-5 bg-white custom-feature-section"> */}
      <div className="container d-flex flex-column align-items-center text-center">
        <h2
          className="custom-featuresheading fw-bold d-flex align-items-center justify-content-center mb-4"
          style={{ fontSize: "20px", marginTop: "-20px", marginLeft: "40px" }}
        >
          <span style={{ color: "#20CB01" }}>OUR</span>
          <span style={{ color: "#070759", marginLeft: "8px" }}>FEATURES</span>
          <img
            src={arrowIcon}
            alt="arrow"
            style={{ width: "35px", marginLeft: "10px" }}
          />
        </h2>

        <div className="feature-card-sec d-flex flex-wrap justify-content-center gap-3">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="feature-card-wrapper">
                {/* Desktop layout (≥ md) */}
                <div
                  className="d-none d-md-flex flex-column align-items-center justify-content-between p-3"
                  style={{
                    backgroundColor: "#000E5E",
                    borderRadius: "20px",
                    height: "360px",
                    width: isActive ? "300px" : "100px",
                    color: "white",
                    transition: "all 0.3s ease-in-out",
                    overflow: "hidden",
                  }}
                >
                  <div
                    onClick={() => toggleCard(index)}
                    style={{ cursor: "pointer", alignSelf: "flex-end" }}
                  >
                    <img
                      src={arrowIcon}
                      alt="Arrow"
                      style={{ width: "25px", marginBottom: "10px" }}
                    />
                  </div>

                  {isActive ? (
                    <>
                      <img
                        src={feature.expandedImage}
                        alt={feature.title}
                        style={{ width: "90%", borderRadius: "10px" }}
                      />
                      <h5 className="fw-bold mt-2 mb-1">{feature.title}</h5>
                      <p
                        className="text-white mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        {feature.description}
                      </p>
                      <a
                        href={feature.link}
                        className="text-white text-decoration-underline"
                        style={{ fontSize: "14px", marginBottom: "10px" }}
                      >
                        Read More
                      </a>
                    </>
                  ) : (
                    <>
                      <p
                        className="text-white fw-bold text-center"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          fontSize: "16px",
                          margin: 0,
                        }}
                      >
                        {feature.title}
                      </p>
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="icon-animate"
                        style={{ width: "40px" }}
                      />
                    </>
                  )}
                </div>

                {/* Mobile layout (≤ md) */}
                {/* Mobile layout (≤ md) */}
                <div
                  className="d-flex d-md-none flex-column mb-3"
                  style={{
                    backgroundColor: "#000E5E",
                    borderRadius: "20px",
                    color: "white",
                    width: "100%",
                    padding: "15px",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    onClick={() => toggleCard(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={feature.icon}
                      alt="icon"
                      style={{ width: "30px" }}
                    />
                    <h6 className="mb-0 fw-bold text-white">{feature.title}</h6>
                    <img
                      src={isActive ? upArrow : downArrow}
                      alt="arrow"
                      style={{ width: "20px" }}
                    />
                  </div>

                  {isActive && (
                    <div
                      className="mt-3 p-2"
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        color: "#000E5E",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      }}
                    >
                      <img
                        src={feature.expandedImage}
                        alt={feature.title}
                        className="img-fluid mb-2"
                        style={{ borderRadius: "10px" }}
                      />
                      <h6 className="fw-bold">{feature.title}</h6>
                      <p style={{ fontSize: "14px" }}>{feature.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
