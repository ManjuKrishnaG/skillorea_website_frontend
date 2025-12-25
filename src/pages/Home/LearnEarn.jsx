import learnEarnImage from "../../assets/images/abcimg.png";
import "../../assets/styles/Learn.css";

const LearnEarn = () => {
  return (
    <section className="learn-earn-section py-5 bg-white">
      {/* Full-width Centered Heading */}
      <div className="w-100 d-flex justify-content-center text-center mb-5">
        <h2
          className="section-title fw-bold d-flex align-items-center justify-content-center"
          style={{ fontSize: "20px" }}
        >
          <span style={{ color: "#20CB01" }}>WHAT</span>
          <span style={{ color: "#20CB01", margin: "0 8px" }}>IS</span>
          <span style={{ color: "#070759" }}> SKILLOREA ?</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="row align-items-center">
          {/* Image Left Side */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src={learnEarnImage}
              alt="Learn and Earn"
              className="learn-img-fluid"
              style={{ maxWidth: "80%", borderRadius: "12px" }}
            />
          </div>

          {/* Text Right Side */}
          <div className="col-lg-6 text-center text-lg-start">
            <h4 className="fw-bold mb-3" style={{ fontSize: "20px" }}>
              Learn Smart, Stay Healthy, Earn Points with Skillorea
            </h4>

            <p className="learn-text-muted mb-3">
              Skillorea redefines learning for students. It makes education fun,
              engaging, and purposeful. Our innovative platform uses AI to
              personalize lessons. Kids learn with AI characters, making every
              lesson an exciting adventure. You achieve your goals and gain
              valuable life skills, from academics to real-world projects.
            </p>

            <p className="learn-text-muted mb-4">
              Skillorea also focuses on total well-being. We offer fun wellness
              activities and convenient online doctor support. Kids can even
              earn points as they learn, teaching valuable money skills.
              Skillorea ensures a safe and effective learning experience. It&apos;s
              an all-in-one app for complete development and lifelong
              achievement.
            </p>

            <button
              className="btn btn-warning fw-bold px-4 py-2"
              style={{ fontSize: "16px" }}
            >
              GET MORE INFO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnEarn;
