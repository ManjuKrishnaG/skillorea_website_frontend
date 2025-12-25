import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/CourseSection.css";
import courseImage from "../../assets/images/innovationmobile.png"; // Main image
// import leftIcon from "../../assets/images/courseimg.png";
import icon1 from "../../assets/images/tuticon3.png";
import icon2 from "../../assets/images/tuticon1.png";
import icon3 from "../../assets/images/tuticon2.png";
import icon4 from "../../assets/images/coursetickicon.png";
// import getmoreinfoImg from "../../assets/images/getmoreinfo.png";

const CourseSection = () => {
  return (
    <section className="course-section">
      {/* Centered Heading */}
      {/* <h2 className="text-center section-heading">
        <span className="light-text">AN INNOVATIVE</span><br />
        <span className="dark-text">COURSE FOR STUDENTS</span>
      </h2> */}

      <h2 className="course-heading">
        <span> AN INNOVATIVE </span>
        <span className="highlight">PROGRAM FOR STUDENTS</span>
      </h2>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side - Content */}
          <div className="col-md-6 content-box">
            {/* <img src={leftIcon} alt="Left Decorative Icon" className="left-image" />  */}
            {/* <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary me-2">01</h4>
              <div className="heading-box px-3 py-2 text-white">HEADING</div>
              
            </div> */}

            <div className="d-flex align-items-center mb-3">
              {/* <h4 className="text-primary me-2">01</h4> */}
              <div className="heading-box py-2 px-0 text-start">
                HEALTH AND WELLNESS PROGRAM{" "}
              </div>
            </div>
            <p>
              Nurture your kid’s health with Skillorea. We offer fun activities
              and expert medical support.
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <img src={icon1} alt="Icon" className="me-2" />
                Diverse games and sports.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon2} alt="Icon" className="me-2" />
                Engaging arts and dance.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon3} alt="Icon" className="me-2" />
                24/7 online doctor access.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img
                  src={icon4}
                  style={{ marginLeft: "4px" }}
                  alt="Icon"
                  className="me-3"
                />
                Guidance from expert sports coaches.
              </li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img
                src={courseImage}
                alt="Course Preview"
                className="courseimg-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img
                src={courseImage}
                alt="Course Preview"
                className="courseimg-fluid"
              />
            </div>
          </div>
          {/* Left Side - Content */}
          <div className="col-md-6 content-box">
            {/* <img src={leftIcon} alt="Left Decorative Icon" className="left-image" />  */}
            {/* <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary me-2">02</h4>
              <div className="heading-box px-3 py-2">PREMIUM HOME TUITION</div>
            </div> */}

            <div className="d-flex align-items-center mb-3">
              <div className="heading-box py-2 px-0 text-start">
                PREMIUM HOME TUITION
              </div>
            </div>

            <p>
              Skillorea&apos;s Premium Tuition combines self-paced study with live
              expert classes for maximum learning.
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <img src={icon1} alt="Icon" className="me-2" />
                Interactive self-learning.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon2} alt="Icon" className="me-2" />
                Unlimited retests for mastery.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon3} alt="Icon" className="me-2" />
                Live doubt-clearing sessions.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img
                  src={icon4}
                  style={{ marginLeft: "4px" }}
                  alt="Icon"
                  className="me-3"
                />
                Personalized attention.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side - Content */}
          <div className="col-md-6 content-box">
            {/* <img src={leftIcon} alt="Left Decorative Icon" className="left-image" />  */}
            <div className="d-flex align-items-center mb-3">
              {/* <h4 className="text-primary me-2">03</h4> */}
              <div className="heading-box py-2 px-0 text-start">
                NEXT-GEN PROJECT GUIDANCE{" "}
              </div>
            </div>
            <p>
              Gain hands-on skills and collaborate in real teams to build
              projects for future success.
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <img src={icon1} alt="Icon" className="me-2" />
                Work on real-world projects.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon2} alt="Icon" className="me-2" />
                Develop essential teamwork skills and communication skills.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon3} alt="Icon" className="me-2" />
                Build a strong professional portfolio.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img
                  src={icon4}
                  style={{ marginLeft: "4px" }}
                  alt="Icon"
                  className="me-3"
                />
                Receive expert guidance on innovative projects.
              </li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img
                src={courseImage}
                alt="Course Preview"
                className="courseimg-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Button Below course Section */}
      {/* <div className="course-btn-container">
        <a href="your-target-link" target="_blank" rel="noopener noreferrer">
          <img
            src={getmoreinfoImg}
            alt="Get Started"
            className="course-btn-img"
          />
        </a>
      </div> */}
    </section>
  );
};

export default CourseSection;
