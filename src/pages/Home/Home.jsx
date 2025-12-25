// import { useState } from "react";
import Navbar from "../../layouts/navbar.jsx";
import "../../assets/styles/Home.css";
import { Helmet } from "react-helmet";
import heroImage from "../../assets/images/herophones.png";
import heroRhombus from "../../assets/images/herohexagon.png";
import playStore from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";
import hiImage from "../../assets/images/hiimg.png";
import hexagonImage from "../../assets/images/hexagon.png";
import cloudImage from "../../assets/images/cloudimg.png";
import starImage from "../../assets/images/starimg.png";
import reactImage from "../../assets/images/reactimg.png";
import vImage from "../../assets/images/vimage.png";
import WhyStudySmart from "../Home/WhyStudySmart.jsx";
import SmartStudyEnroll from "../Home/enroll.jsx";
import Aspirations from "../Home/Aspirations.jsx";
import CharacterSection from "../Home/CharacterSection.jsx";
// import AITutorSection from "../Home/AiTutor.jsx";
import YoutubeSection from "../Home/youtube.jsx";
import CourseSection from "../Home/CourseSection.jsx";
import BlogSection from "../Home/Blog.jsx";
// import LearningActivities from "../Home/Learning.jsx";
import TeamSection from "../Home/Team.jsx";
import FAQSection from "../Home/Faq.jsx";
import dottedImage from "../../assets/images/dotted.png";
// import chatbotIcon from "../../assets/images/chatbot.png";
// import Chatbot from "../../layouts/chatbot.jsx";
import whatsappImage from "../../assets/images/whatsappbutton.png";
import WhyChooseSection from "../Home/WhyChoose.jsx";
import LearnEarn from "../Home/LearnEarn.jsx";
import OurFeatures from "./Features/OurFeatures.jsx";
import SportsTraining from "../Home/Sportstraining.jsx";
import CabFacility from "../Home/Cab.jsx";
import SkilloreaBanner from "../Home/Skilloreabanner.jsx";
import EnquiryForm from "../Home/EnquiryForm.jsx";

import { motion } from "framer-motion";

const Home = () => {
  // const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const whatsappAnimation = {
    hidden: { y: 100, opacity: 0 }, // Start below and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 }, // Delayed effect
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Skillorea - Best Online Education Platform App in Coimbatore
        </title>
        <meta
          name="description"
          content="Skillorea, the best online educational app in Coimbatore. AI learning, skills, wellness, online tuition, sports, learn and earn, and doctor-on-call services."
        />
        <meta
          name="keywords"
          content="Best Online Education Platform App in Coimbatore, Best online learning platform, Skillorea"
        />
        <link rel="canonical" href="https://www.skillorea.com" />
      </Helmet>
      <Navbar />

      {/* Chatbot Icon */}
      {/* <div className="chatbot-icon" onClick={() => setIsChatbotOpen(true)}>
        <img src={chatbotIcon} alt="Chatbot" />
      </div> */}

      {/* Chatbot Box */}
      {/* {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />} */}

      {/* 1Hero Section */}
      <div className="homepage">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text-container">
              <h1 className="hero-title">
                Hi👋, I am <span style={{ color: "#2CA008" }}>Rea</span>! <br />
                Your <span style={{ color: "#F48616" }}>AI Tutor</span>
              </h1>

              {/* <p className="hero-subtitle">
              Achieve academic success, your journey to better grades starts
              here!
              
            </p> */}
              <p className="hero-subtitle" style={{ fontSize: "18px" }}>
                Learning meets fun !!
              </p>
              <p className="hero-subtitle">
                Our AI-powered platform makes education an exciting,
                personalized adventure for every student.
              </p>

              <img src={hiImage} alt="Decorative Icon" className="hi-image" />
            </div>

            {/* Store Buttons */}
            <div className="hero-buttons">
              {/* <a href="#" className="store-btn">
              <img src={appStore} alt="App Store" />
            </a>
            <a href="#" className="store-btn">
              <img src={playStore} alt="Google Play" />
            </a> */}

              <a
                href="https://apps.apple.com/in/app/skillorea/id6744912575"
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                <img src={appStore} alt="App Store" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.skill.orea"
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                <img src={playStore} alt="Google Play" />
              </a>
              {/* WhatsApp Button */}
            </div>
            <motion.a
              // href="https://wa.me/yourwhatsappnumber"
              href="https://api.whatsapp.com/send/?phone=+919940506090&text=Hello+Skillorea&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              variants={whatsappAnimation}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src={whatsappImage}
                alt="WhatsApp"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Hero Image with Floating Icons */}
          <div className="hero-image-container">
            <img
              src={dottedImage}
              alt="Dotted Design"
              className="floating-image dotted-image top-dotted"
            />
            <img src={heroRhombus} alt="Rhombus" className="rhombus-image" />
            <img src={heroImage} alt="App Preview" className="hero-image" />
            {/* Floating Images */}
            <img
              src={hexagonImage}
              alt="Hexagon"
              className="floating-image hexagon-image"
            />
            <img
              src={cloudImage}
              alt="Cloud"
              className="floating-image cloud-image"
            />
            <img
              src={starImage}
              alt="Star"
              className="floating-image star-image"
            />
            <img
              src={reactImage}
              alt="React Logo"
              className="floating-image react-image"
            />
            <img
              src={vImage}
              alt="V Image"
              className="floating-image v-image"
            />{" "}
            {/* New Image */}
            {/* Dotted Image (Bottom Left) */}
            <img
              src={dottedImage}
              alt="Dotted Design"
              className="floating-image dotted-image bottom-dotted"
            />
          </div>
        </section>

        <LearnEarn />
        <OurFeatures />
        <WhyStudySmart />
        <SmartStudyEnroll />
        {/* <AITutorSection /> */}
        <WhyChooseSection />
        <CourseSection />
        <CharacterSection />
        <SportsTraining />
        <CabFacility />
        <YoutubeSection />
        <Aspirations />
        <SkilloreaBanner />

        {/* <LearningActivities /> */}
        {/* <TeamSection /> */}
        <BlogSection />

        <EnquiryForm />
        <FAQSection />
      </div>
    </>
  );
};

export default Home;
