// import { useState } from "react";
import Navbar from "../../layouts/navbar.jsx";
import "../../assets/styles/Home.css";
import heroImage from "../../assets/images/hero-phones.png";
import heroRhombus from "../../assets/images/herohexagon.png";
import playStore from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";
import hiImage from "../../assets/images/hiimg.png";
import hexagonImage from "../../assets/images/hexagon.png";
import cloudImage from "../../assets/images/cloudimg.png";
import starImage from "../../assets/images/starimg.png";
import reactImage from "../../assets/images/reactimg.png";
import vImage from "../../assets/images/vimage.png"; // Import the new image
import WhyStudySmart from "../Home/WhyStudySmart.jsx";
import SmartStudyEnroll from "../Home/enroll.jsx";
// import Aspirations from "../Home/Aspirations.jsx";
import CharacterSection from "../Home/CharacterSection.jsx";
import AITutorSection from "../Home/AiTutor.jsx";
import YoutubeSection from "../Home/youtube.jsx";
import CourseSection from "../Home/CourseSection.jsx";
import BlogSection from "../Home/Blog.jsx";
import LearningActivities from "../Home/Learning.jsx";
// import TeamSection from "../Home/Team.jsx";
import FAQSection from "../Home/Faq.jsx";
import dottedImage from "../../assets/images/dotted.png";
// import chatbotIcon from "../../assets/images/chatbot.png";
// import Chatbot from "../../layouts/chatbot.jsx";
import whatsappImage from "../../assets/images/whatsappbutton.png";
import WhyChooseSection from "../Home/WhyChoose.jsx";
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
      <Navbar />

      {/* Chatbot Icon */}
      {/* <div className="chatbot-icon" onClick={() => setIsChatbotOpen(true)}>
        <img src={chatbotIcon} alt="Chatbot" />
      </div> */}

      {/* Chatbot Box */}
      {/* {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />} */}

      {/* 1Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Hi👋, I am Skill<span style={{ color: "#2CA008" }}>orea</span>!{" "}
              <br />
              Your <span style={{ color: "#F48616" }}>AI Tutor</span>
            </h1>

            <p className="hero-subtitle">
              Achieve academic success, your journey to better grades starts
              here!
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. */}
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
              href="https://apps.apple.com/us/app/your-app-name/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn"
            >
              <img src={appStore} alt="App Store" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn"
            >
              <img src={playStore} alt="Google Play" />
            </a>
            {/* WhatsApp Button */}
          </div>
          <motion.a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            variants={whatsappAnimation}
            initial="hidden"
            animate="visible"
          >
            {/* <img src={whatsappImage} alt="WhatsApp" /> */}
            <motion.img
              src={whatsappImage}
              alt="WhatsApp"
              whileHover={{ scale: 1.1 }} // Slight scale effect on hover
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
          <img src={vImage} alt="V Image" className="floating-image v-image" />{" "}
          {/* New Image */}
          {/* Dotted Image (Bottom Left) */}
          <img
            src={dottedImage}
            alt="Dotted Design"
            className="floating-image dotted-image bottom-dotted"
          />
        </div>
      </section>

      <WhyStudySmart />
      <SmartStudyEnroll />
      <AITutorSection />
      <WhyChooseSection />
      <YoutubeSection />
      {/* <Aspirations /> */}
      <CharacterSection />
      <CourseSection />
      <LearningActivities />
      {/* <TeamSection /> */}
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default Home;
