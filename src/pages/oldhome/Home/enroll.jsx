import "../../assets/styles/enroll.css";
import enrollImage from "../../assets/images/enroll.png"; // Replace with actual image

const SmartStudyEnroll = () => {
  return (
    <section className="enroll-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src={enrollImage}
              alt="Study Smart"
              className="enroll-image img-fluid"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="col-md-6 enroll-text">
            <p className="enroll-description">
              Track your childs progress and see real results. Skillorea
              provides detailed reports to monitor your academic growth.
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
