import sportsTrainingImage from "../../assets/images/personalisedsportstraining.png";
import "../../assets/styles/Sportstraining.css";

const SportsTraining = () => {
  return (
    <section className="py-5 bg-white">
      {/* Centered Heading */}
      <div className="w-100 d-flex justify-content-center text-center mb-5">
        <h2
          className="sports-training fw-bold d-flex align-items-center justify-content-center"
          style={{ fontSize: "20px", marginTop: "30px" }}
        >
          {/* <span style={{ color: "#FF6C00", marginRight: "6px" }}>📣</span> */}

          <span style={{ color: "#20CB01" }}>PERSONALIZED</span>
          <span style={{ color: "#070759", marginLeft: "8px" }}>
            SPORTS TRAINING
          </span>
          {/* <span>
            <svg
              width="45"
              height="24"
              viewBox="0 0 100 24"
              style={{ marginLeft: "10px" }}
            >
              <polygon
                points="0,0 80,0 100,12 80,24 0,24"
                fill="#0057FF"
                opacity="0.4"
              />
            </svg>
          </span> */}
        </h2>
      </div>

      {/* Content Row */}
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          {/* <div className="col-lg-6 mb-4 mb-lg-0"> */}
          <div className="col-lg-6 order-3 order-lg-1">
            <h5 className="fw-bold mb-3 text-center text-lg-start">
              Expert Led Personalized Sports Training With Skillorea
            </h5>
            <p className="training-text-muted mb-3">
              Skillorea offers personalized sports training designed to help
              your child success. Our dedicated coaches work closely with each
              student to create personalized training programs. This focused
              approach allows for efficient skill development and faster
              progress toward individual objectives. Book personal training
              sessions to give your child the tools for success.
            </p>
            <p className="training-text-muted mb-4">
              Skillorea&apos;s personalized training goes beyond generic drills. We
              provide individualized attention, detailed progress tracking, and
              customized feedback to help your child reach their peak
              performance. Give your child the advantage of personalized
              instruction and watch them excel in their chosen sport.
            </p>
            {/* <button className="btn btn-warning fw-bold px-4 py-2">
              GET MORE INFO
            </button> */}
            <div className="text-center text-lg-start">
              <button className="btn btn-warning fw-bold px-4 py-2">
                GET MORE INFO
              </button>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="col-lg-6 text-center"> */}
          <div className="col-lg-6 order-2 order-lg-2 text-center mb-4 mb-lg-0">
            <img
              src={sportsTrainingImage}
              alt="Sports Training "
              className="img-fluid sports-image"
              style={{ maxWidth: "60%", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsTraining;
