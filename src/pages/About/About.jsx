import "../../assets/styles/About.css";
import { Helmet } from "react-helmet";
import image1 from "../../assets/images/aboutimg1.png";
import image2 from "../../assets/images/aboutimg2.png";
//import dottedImg from "../../assets/images/dotted.png";

// News Section Images
// import entrackr from "../../assets/images/about1.png";
// import galatta from "../../assets/images/about2.png";
// import yourstory from "../../assets/images/about3.png";
// import vccircle from "../../assets/images/about4.png";
// import behindwoods from "../../assets/images/about5.png";
// import decorator from "../../assets/images/decorators.png";

import tutorImage from "../../assets/images/mobileimg.png";
import triangleBg from "../../assets/images/about-tri.png";
import icon1 from "../../assets/images/tut1.png";
import icon2 from "../../assets/images/tut2.png";
import icon3 from "../../assets/images/tut3.png";
import dottedImg from "../../assets/images/dots.png";

import missionImg from "../../assets/images/mission.png"; // Replace with your actual image path
import visionImg from "../../assets/images/vision.png";

// import TeamSection from "../Home/Team.jsx";

// import team1 from "../../assets/images/team1.png";
// import team2 from "../../assets/images/team2.png";
// import team3 from "../../assets/images/team3.png";
// import outlineImg from "../../assets/images/testimonialoutline.png";
// import TeamSection from "../../pages/Home/Team";

// const teamMembers = [
//   { id: 1, name: "Elizabeth Thomas", image: team1 },
//   { id: 2, name: "Chris William", image: team2 },
//   { id: 3, name: "Chris William", image: team3 },
// ];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Best Online Teaching Platform | Skillorea </title>
        <meta
          name="description"
          content="Skillorea, the best online educational app in Coimbatore, trains students for increased learning, complete development, and future success."
        />
        <meta
          name="keywords"
          content="Best online teaching platforms, online learning platforms"
        />
        <link rel="canonical" href="https://www.skillorea.com/about-us" />
      </Helmet>
      <div className="container mt-5 about-container">
        {/* ABOUT SECTION */}
        <div className="row w-100 position-relative">
          <section className="about-section col-12">
            {/* Top-Rightmost Dotted Image */}
            <img
              src={dottedImg}
              alt="Dotted Top Right"
              className="about-dotted-top-right"
            />
            <h2 className="about-title">
              <span>ABOUT</span> <span className="highlight">SKILLOREA</span>
            </h2>

            <div className="row align-items-center about-row">
              {/* Left Side - Images with Triangle Background */}
              {/* <div className="col-md-6 position-relative text-center"> */}
              <div className="col-md-6 position-relative about-img-container about-img-container-tab">
                {/* Background Triangle */}
                <img
                  src={triangleBg}
                  alt="Triangle"
                  className="about-triangle-bg"
                />

                {/* Dotted Images - Positioned Around the Main Image */}
                <img
                  src={dottedImg}
                  alt="Dotted Top"
                  className="about-dotted-top"
                />
                <img
                  src={dottedImg}
                  alt="Dotted Bottom"
                  className="about-dotted-bottom"
                />
                <img
                  src={dottedImg}
                  alt="Dotted Right"
                  className="about-dotted-right"
                />

                {/* Main Image */}
                <img src={image1} alt="Main Image" className="main-img" />

                {/* Overlay Image */}
                <img src={image2} alt="Overlay Image" className="overlay-img" />
              </div>

              {/* Right Side - Text Content */}
              <div className="col-md-6 about-text-container-tab">
                <p className="about-text ">
                  Skillorea is like having a personal AI tutor right at your
                  fingertips. We understand that every student learns
                  differently. So, we create custom study plans for you, and if
                  you ever get stuck, our AI is ready with instant answers, or
                  you can connect with a real teacher. We want to make studying
                  fun with games and quizzes, and even teach you about saving
                  money with our reward system. We aim to give you the
                  confidence and independence to learn by yourself, that is your
                  own, knowing that support is always available.
                </p>
                <p className="about-text">
                  With Skillorea, you will get more than just good grades. You
                  will get personalized study plans that fit your learning
                  style, instant AI support whenever you need it, and access to
                  real teachers. Parents will love the tools to track their
                  progress and stay involved. You will enjoy fun learning tools,
                  earn points for your hard work, and learn valuable money
                  skills. Skillorea gives you the tools to unlock your full
                  potential.
                </p>
              </div>
            </div>

            {/* IN THE NEWS SECTION */}

            {/* <section className="news-section">
              <h2 className="news-heading">
                <span> IN THE</span>
                <span className="highlight">NEWS</span>
              </h2>
              <div className="news-slider">
                <div className="news-track">
                  
                  <img src={entrackr} alt="Entrackr" className="news-logo" />

                  <img src={yourstory} alt="YourStory" className="news-logo" />
                  <img src={vccircle} alt="VCCircle" className="news-logo" />
                  <img src={galatta} alt="Galatta" className="news-logo" />
                  <img
                    src={behindwoods}
                    alt="Behind Woods"
                    className="news-logo"
                  />

                  
                  <img src={entrackr} alt="Entrackr" className="news-logo" />

                  <img src={yourstory} alt="YourStory" className="news-logo" />
                  <img src={vccircle} alt="VCCircle" className="news-logo" />
                  <img
                    src={behindwoods}
                    alt="Behind Woods"
                    className="news-logo"
                  />
                  <img src={galatta} alt="Galatta" className="news-logo" />
                </div>
              </div>
              <img src={decorator} alt="Decorator" className="news-decorator" />
            </section> */}

            <section>
              {/* Mission Section */}
              <div
                className="mission-vision-wrapper container py-5"
                style={{ marginTop: "20px" }}
              >
                <div className="row align-items-center mission-row ">
                  {/* Mission Text */}
                  <div className="col-lg-6 col-12 order-2 order-lg-1 mission-text text-center text-lg-start">
                    <h6
                      className="mission-title fw-bold"
                      style={{ fontSize: "24px" }}
                    >
                      Our Mission
                    </h6>
                    {/* <h3
                      className="mission-heading fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Smart Education is accessible to all
                    </h3> */}
                    <p className="mission-description text-muted">
                      We envision a future where minds are bright and skills are
                      high. We aim to create a world full of opportunities for
                      everyone. Learning will inspire ambition, and talent will
                      lead to success. There will be no limits to what passion
                      can achieve.
                    </p>
                  </div>

                  {/* Mission Image */}
                  <div className="col-lg-6 col-12 order-1 order-lg-2 mission-image text-center">
                    <img
                      src={missionImg}
                      alt="Mission"
                      className="img-fluid rounded-4 w-75 mx-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Vision Section */}
              <div className="mission-vision-wrapper container py-5">
                <div className="row align-items-center vision-row mb-5">
                  {/* Vision Text */}
                  <div className="col-lg-6 col-12 order-2 order-lg-2 vision-text text-center text-lg-start">
                    <h6
                      className="vision-title fw-bold"
                      style={{ fontSize: "24px" }}
                    >
                      Our Vision
                    </h6>
                    {/* <h3
                      className="vision-heading fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Individualized and Interesting Instruction
                    </h3> */}
                    <p className="vision-description text-muted">
                      Our mission is to build a unique learning system. It will
                      seamlessly combine education with financial growth and
                      multi-skill mastery. This system will also include sports
                      excellence. We want to empower individuals to lead,
                      innovate, and achieve new definitions of success in the
                      next generation.
                    </p>
                  </div>

                  {/* Vision Image */}
                  <div className="col-lg-6 col-12 order-1 order-lg-1 vision-image text-center">
                    <img
                      src={visionImg}
                      alt="Vision"
                      className="img-fluid rounded-4 w-75 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* TUTOR SECTION */}
            <section className="tutor-section position-relative">
              <div className="container">
                <div className="row align-items-center">
                  {/* Left Side - Image with Triangle Background */}
                  <div className="col-md-6 position-relative tutor-img-container">
                    {/* Background Triangle */}
                    <img
                      src={triangleBg}
                      alt="Triangle"
                      className="triangle-bg"
                    />
                    {/* Tutor Image */}
                    <img src={tutorImage} alt="Tutor" className="tutor-img" />
                  </div>

                  {/* Right Side - Content */}
                  <div className="col-md-6">
                    <h2 className="tutor-title">
                      {/* <span className="highlight">An AI Tutor</span> For Every
                      Child! */}
                      <span className="titlecolor">
                        {/* The <span className="future">Future</span> of Learning{" "} */}
                        Smart AI support for your Personalized learning
                      </span>
                    </h2>
                    <p className="tutor-text">
                      Learn what you need. Get smart AI help now. Your cool AI
                      friends make it easy.
                    </p>

                    {/* Bullet Points */}
                    <ul className="tutor-list">
                      <li>
                        <img
                          src={icon1}
                          alt="Shield Icon"
                          className="icon-img"
                        />
                        Learning is personalized for you.
                      </li>
                      <li>
                        <img
                          src={icon2}
                          alt="Percent Icon"
                          className="icon-img"
                        />
                        Get 24/7 AI support anytime.
                      </li>
                      <li>
                        <img src={icon3} alt="Chat Icon" className="icon-img" />
                        Learn with your favourite AI friends.
                      </li>
                    </ul>
                    {/* <div className="dotted-bg">
                      <img src={dottedImg} alt="Dotted Background" />
                    </div> */}
                  </div>
                </div>
              </div>
            </section>

            {/* <TeamSection /> */}

            {/* <section className="about-teams-section text-center">
              
              <h2
                className="text-center about-teams-heading"
                
              >
                <span className="light-text">TEAM </span>{" "}
                <span className="dark-text">STUDY SMART</span>
              </h2>

              
              <div className="row justify-content-center mt-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="col-md-4 col-sm-6 col-12 mb-4"
                  >
                    <div className="card border-0 text-center p-3">
                      <div className="team-img-container position-relative">
                        
                        <img
                          src={outlineImg}
                          alt="Outline"
                          className="team-outline-img"
                        />
                        
                        <img
                          src={member.image}
                          className="team-profile-img"
                          alt={member.name}
                          style={{
                            width: "200px",
                            height: "290px",
                            objectFit: "cover",
                          }}
                        />
                       
                      </div>
                      <div className="card-body">
                        <h5 className="fw-bold">{member.name}</h5>
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet. Qui deserunt optio est
                          quia repellendus eos.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}

            {/* <div className="team-section-about">
              <TeamSection />
            </div> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
