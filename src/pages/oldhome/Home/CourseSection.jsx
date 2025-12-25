import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/CourseSection.css";
import courseImage from "../../assets/images/innovationmobile.png"; // Main image
// import leftIcon from "../../assets/images/courseimg.png";
import icon1 from "../../assets/images/tuticon3.png";
import icon2 from "../../assets/images/tuticon1.png";
import icon3 from "../../assets/images/tuticon2.png";
import icon4 from "../../assets/images/tuticon2.png";
import getmoreinfoImg from "../../assets/images/getmoreinfo.png";

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
        <span className="highlight">COURSE FOR STUDENTS</span>
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
              <h4 className="text-primary me-2">01</h4>
              <div className="heading-box">SmartScholar </div>
            </div>
            <p>
              Master Your Studies: Smart Learning for Grades 6-12 Across All
              Boards – Syllabus, QA, and Practice Tests!
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <img src={icon1} alt="Icon" className="me-2" />
                Tailored study plans for grades 6-12.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon2} alt="Icon" className="me-2" />
                Complete syllabus mastery for all boards.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon3} alt="Icon" className="me-2" />
                Instant QA support for clarity and confidence.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon4} alt="Icon" className="me-2" />
                Mock tests and quizzes for exam success.
              </li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img
                src={courseImage}
                alt="Course Preview"
                className="img-fluid"
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
                className="img-fluid"
              />
            </div>
          </div>
          {/* Left Side - Content */}
          <div className="col-md-6 content-box">
            {/* <img src={leftIcon} alt="Left Decorative Icon" className="left-image" />  */}
            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary me-2">02</h4>
              <div className="heading-box px-3 py-2 text-white">
                SkillSphere
              </div>
            </div>
            <p>
              Skillorea, Grow Sharp: Unlock Skills & Excel Academically with
              Smarter Learning Strategies!
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <img src={icon1} alt="Icon" className="me-2" />
                Smart learning blends skills for real-world success.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon2} alt="Icon" className="me-2" />
                21st-century skills in security, business, and finance.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon3} alt="Icon" className="me-2" />
                Balanced learning with health and eco-awareness.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon4} alt="Icon" className="me-2" />
                Blending design, media, and tech skills.
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
              <h4 className="text-primary me-2">03</h4>
              <div className="heading-box px-3 py-2 text-white">
                ExamMastery{" "}
              </div>
            </div>
            <p>
              Skillorea, Achieve Big: Your Ultimate Guide to Cracking Government
              Exams and Securing a Bright Future with Smart Strategies and Hard
              Work!{" "}
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <img src={icon1} alt="Icon" className="me-2" />
                Organized study plan for government exams.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon2} alt="Icon" className="me-2" />
                Comprehensive practice materials for exam readiness.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon3} alt="Icon" className="me-2" />
                Learn from experts with AI-powered support.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={icon4} alt="Icon" className="me-2" />
                Effective time management strategies for success.
              </li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img
                src={courseImage}
                alt="Course Preview"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Button Below course Section */}
      <div className="course-btn-container">
        <a href="your-target-link" target="_blank" rel="noopener noreferrer">
          <img
            src={getmoreinfoImg}
            alt="Get Started"
            className="course-btn-img"
          />
        </a>
      </div>
    </section>
  );
};

export default CourseSection;
