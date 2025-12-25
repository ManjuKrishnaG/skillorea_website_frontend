import "../../assets/styles/enroll.css";
import enrollImage from "../../assets/images/enrollimg.png"; // Replace with actual image

const SmartStudyEnroll = () => {
  return (
    <section className="enroll-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src={enrollImage}
              alt="Skillorea"
              className="enroll-image img-fluid"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="col-md-6 enroll-text">
            <p className="enroll-description">
              {/* Track your child's progress and see real results. Skillorea
              provides detailed reports to monitor your child's academic growth. */}
              {/* Follow your child&apos;s complete learning journey with Skillorea.
              Our platform clearly shows their progress through detailed
              reports. Understand their individual growth in different skill
              areas and watch them shine as they achieve their goals. */}
              Your complete hub for learning, growth, and wellness. Personalized
              AI powers active education, real-world skills, and your overall
              health. Learn, play, earn, and succeed—all in one app, dedicated
              to empower every student.
            </p>
            {/* <button className="btn btn-primary enroll-button">
              Enroll Now
            </button> */}
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartStudyEnroll;
