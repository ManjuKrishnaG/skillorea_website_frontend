import { motion } from "framer-motion";
import appStore from "../../assets/images/app-store.png";
import playStore from "../../assets/images/google-play.png";
import logo from "../../assets/images/logowhitetm.png";
import background from "../../assets/images/skilloreabg.png";
import "../../assets/styles/Skilloreabanner.css";

const SkilloreaBanner = () => {
  return (
    <section
      className="skilloreabanner-section py-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <div className="container" style={{ maxWidth: "1140px" }}>
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <motion.div
            className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-3">More than an EdTech App</h2>
            <h5 className="mb-3">It’s a movement towards Excellence</h5>
            <p className="mb-0">
              <span style={{ color: "#00B140", fontWeight: 600 }}>
                Download Skillorea
              </span>{" "}
              <span style={{ color: "#FFA500", fontWeight: 700 }}>
                & Step into a world of Limitless Learning
              </span>
            </p>
          </motion.div>

          {/* Right Column - Logo + Buttons */}
          <motion.div
            className=" col-lg-6 d-flex flex-column align-items-lg-end align-items-center text-lg-end text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated Logo */}
            <motion.div
              animate={{
                y: [0, -8, 0], // bounce effect
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                className="skilloreabannerlogo"
                src={logo}
                alt="Skillorea Logo"
                style={{ maxWidth: "220px", height: "auto" }}
              />
            </motion.div>

            {/* Buttons - Shifted slightly right */}
            <div
              className="d-flex store-buttons"
              style={{ marginLeft: "40px" }}
            >
              {/* <img
                src={appStore}
                alt="App Store"
                className="me-2"
                style={{ height: "50px", width: "auto" }}
              />
              <img
                src={playStore}
                alt="Google Play"
                style={{ height: "50px", width: "auto" }}
              /> */}

              <a
                href="https://apps.apple.com/in/app/skillorea/id6744912575"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn"
              >
                {/* <img src={appStore} alt="App Store" /> */}
                <img
                  src={appStore}
                  alt="App Store"
                  className="me-2"
                  style={{ height: "50px", width: "auto" }}
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.skill.orea"
                target="_blank"
                rel="noopener noreferrer"
                className="play-store-btn"
              >
                {/* <img src={playStore} alt="Google Play" /> */}
                <img
                  src={playStore}
                  alt="Google Play"
                  style={{ height: "50px", width: "auto" }}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkilloreaBanner;
