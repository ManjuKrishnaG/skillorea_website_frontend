import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/upcomingfeatures.css";
import { Helmet } from "react-helmet";
import feature1 from "../../assets/images/careerguidance.png";
import feature2 from "../../assets/images/Industrial Challenge.png";
import feature3 from "../../assets/images/Eventcalender.png";
import feature4 from "../../assets/images/Meme Maker.png";
import feature5 from "../../assets/images/Visual Vibes.png";
import feature6 from "../../assets/images/3D View.png";
import feature7 from "../../assets/images/Sketch Hub.png";
import feature8 from "../../assets/images/Mind2Matter.png";
import feature9 from "../../assets/images/Idea Box.png";
import feature10 from "../../assets/images/Fun Factory.png";
import feature11 from "../../assets/images/Submit Tasks.png";

const UpcomingFeatures = () => {
  return (
    <section className="upcoming-features-section">
      <Helmet>
        <title>
          Coming Soon – New Features on Skillorea | Education Platform
        </title>
        <meta
          name="description"
          content="Skillorea Upcoming Features include exploring future learning with AI career guidance, industrial challenges, 3D views, fun tools & innovations for growth."
        />
        <meta
          name="keywords"
          content="Skillorea, Future learning AI, career guidance, Industrial challenges"
        />
        <link
          rel="canonical"
          href="https://www.skillorea.com/upcoming-features"
        />
      </Helmet>
      <div className="d-none d-md-block">
        <div className="container py-5">
          <h2
            className="upcoming-heading text-center mb-5"
            style={{
              marginTop: "60px",
              fontSize: "20px",
              color: " #20CB01",
              fontWeight: "bold",
            }}
          >
            <span>UPCOMING</span>{" "}
            <span
              className="highlight"
              style={{ color: "#070759", fontWeight: "bold" }}
            >
              FEATURES
            </span>
          </h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row g-3 align-items-center mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    1. Career Guidance
                  </h6>
                  <img
                    src={feature1}
                    alt="Career Guidance"
                    className="img-fluid rounded"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{
                      color: "#070759",
                      marginLeft: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Features :
                  </h6>
                  <ul
                    className="list-unstyled px-1"
                    style={{ marginLeft: "30px" }}
                  >
                    <li className="text-muted small lh-lg">
                      • AI-driven career path exploration.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Virtual career simulations.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Expert career mentor connects.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Personalized skill development plans.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Industrial Challenge Section */}
              <div className="row g-3 align-items-center flex-md-row-reverse mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    2. Industrial Challenge
                  </h6>
                  <img
                    src={feature2}
                    alt="Industrial Challenge"
                    className="img-fluid rounded"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{ color: "#070759" }}
                  >
                    Features :
                  </h6>
                  <ul className="list-unstyled px-1">
                    <li className="text-muted small lh-lg">
                      • Real-World Problem Solvers.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Collaborate with Industry Mentors.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Showcase Innovative Solutions.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Compete and Gain Industry Recognition.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row g-3 align-items-center mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    3.Event Calendar{" "}
                  </h6>
                  <img
                    src={feature3}
                    alt="Career Guidance"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{
                      color: "#070759",
                      marginLeft: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Features :
                  </h6>
                  <ul
                    className="list-unstyled px-1"
                    style={{ marginLeft: "30px" }}
                  >
                    <li className="text-muted small lh-lg">
                      • Color-coded exam/test dates.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Automatic sync with personal calendars.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Customizable reminders for slip tests.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Visual progress tracking for study plans.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Industrial Challenge Section */}
              <div className="row g-3 align-items-center flex-md-row-reverse mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    4. Meme Maker{" "}
                  </h6>
                  <img
                    src={feature4}
                    alt="Career Guidance"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{ color: "#070759" }}
                  >
                    Features :
                  </h6>
                  <ul className="list-unstyled px-1">
                    <li className="text-muted small lh-lg">
                      • Subject-Specific Meme Templates.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Educational Sticker Library.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Customizable Text & Fonts.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Voting System for Best Memes.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row g-3 align-items-center mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    5. Visual Vibes{" "}
                  </h6>
                  <img
                    src={feature5}
                    alt="Career Guidance"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{
                      color: "#070759",
                      marginLeft: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Features :
                  </h6>
                  <ul
                    className="list-unstyled px-1"
                    style={{ marginLeft: "30px" }}
                  >
                    <li className="text-muted small lh-lg">
                      • Teacher-created explainer videos.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Animated and engaging infographics.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Animated images to learn lessons easily.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Visual dictionaries for complex terms.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Industrial Challenge Section */}
              <div className="row g-3 align-items-center flex-md-row-reverse mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    6. 3D View
                  </h6>
                  <img
                    src={feature6}
                    alt="Industrial Challenge"
                    className="img-fluid rounded"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{ color: "#070759" }}
                  >
                    Features :
                  </h6>
                  <ul className="list-unstyled px-1">
                    <li className="text-muted small lh-lg">
                      • Explore rotatable 3D models of objects.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Control layers to view specific parts.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Add annotations and labels to models.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Interactive 3D learning experience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row g-3 align-items-center mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    7. Sketch Hub{" "}
                  </h6>
                  <img
                    src={feature7}
                    alt="Career Guidance"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{
                      color: "#070759",
                      marginLeft: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Features :
                  </h6>
                  <ul
                    className="list-unstyled px-1"
                    style={{ marginLeft: "30px" }}
                  >
                    <li className="text-muted small lh-lg">
                      • Smart tools for drawing graphs and maps.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Subject-specific stencils for diagrams.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Easy submission for drawing assignments.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Tools for creating visual learning aids.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Industrial Challenge Section */}
              <div className="row g-3 align-items-center flex-md-row-reverse mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    8. Mind2Matter{" "}
                  </h6>
                  <img
                    src={feature8}
                    alt="Industrial Challenge"
                    className="img-fluid rounded"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{ color: "#070759" }}
                  >
                    Features :
                  </h6>
                  <ul className="list-unstyled px-1">
                    <li className="text-muted small lh-lg">
                      • Step-by-step guides for activities.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Dashboard to track your progress.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Space to work together with friends.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Helps turn your ideas into real things.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row g-3 align-items-center mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    9. Idea Box{" "}
                  </h6>
                  <img
                    src={feature9}
                    alt="Career Guidance"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{
                      color: "#070759",
                      marginLeft: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Features :
                  </h6>
                  <ul
                    className="list-unstyled px-1"
                    style={{ marginLeft: "30px" }}
                  >
                    <li className="text-muted small lh-lg">
                      • Easy Idea Submission.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Public Visibility & Browsing.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Voting & Feedback.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Admin Review & Implementation Tracking.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Industrial Challenge Section */}
              <div className="row g-3 align-items-center flex-md-row-reverse mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    10. Fun Factory
                  </h6>
                  <img
                    src={feature10}
                    alt="Industrial Challenge"
                    className="img-fluid rounded"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{ color: "#170645" }}
                  >
                    Features :
                  </h6>
                  <ul className="list-unstyled px-1">
                    <li className="text-muted small lh-lg">
                      • Syllabus-aligned games for fun learning.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Multiplayer quiz modes to play with friends.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Customize avatars and game themes.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Interactive story-based learning adventures.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row g-3 align-items-center mb-5">
                <div className="col-md-4">
                  <h6
                    className="fw-bold text-uppercase mb-4"
                    style={{ color: "#404040" }}
                  >
                    11. Submit Tasks{" "}
                  </h6>
                  <img
                    src={feature11}
                    alt="Career Guidance"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h6
                    className="fw-bold text-uppercase"
                    style={{
                      color: "#070759",
                      marginLeft: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Features :
                  </h6>
                  <ul
                    className="list-unstyled px-1"
                    style={{ marginLeft: "30px" }}
                  >
                    <li className="text-muted small lh-lg">
                      • Effortless Submission & Multiple File Support.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Clear Task Instructions & Progress Tracking.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Direct Feedback & Result Access.
                    </li>
                    <li className="text-muted small lh-lg">
                      • Secure Storage & Notifications.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-md-none">
        <h6
          style={{
            color: "black",
            display: "block",
            marginTop: "100px",
            marginBottom: "-30px",
            marginLeft: "20px",
          }}
        >
          UPCOMING FEATURES
        </h6>

        {/* mobile accordion layout here */}
        <div className="accordion" id="upcomingFeaturesAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed d-flex align-items-center gap-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <img
                  src={feature1}
                  alt="Career Guidance"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="flex-grow-1">Career Guidance</span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body ">
                <img
                  src={feature1}
                  alt="Career Guidance"
                  className="img-fluid rounded mb-4"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <h6>Features:</h6>
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingone">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseone"
                aria-expanded="false"
                aria-controls="collapseone"
              >
                <img
                  src={feature1}
                  alt="Career Guidance"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Career Guidance</span>
              </button>
            </h2>
            <div
              id="collapsethree"
              className="accordion-collapse collapse"
              aria-labelledby="headingthree"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature1}
                  alt="Career Guidance"
                  className="img-fluid rounded mb-2"
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingtwo">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsetwo"
                aria-expanded="false"
                aria-controls="collapsetwo"
              >
                <img
                  src={feature2}
                  alt="Industrial Challenge"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Industrial Challenge</span>
              </button>
            </h2>
            <div
              id="collapsetwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingtwo"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature2}
                  alt="Industrial Challenge"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingthree">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsethree"
                aria-expanded="false"
                aria-controls="collapsethree"
              >
                <img
                  src={feature3}
                  alt="Industrial Challenge"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Event Calender</span>
              </button>
            </h2>
            <div
              id="collapsethree"
              className="accordion-collapse collapse"
              aria-labelledby="headingthree"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature3}
                  alt="Industrial Challenge"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                <img
                  src={feature3}
                  alt="Meme Maker"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Meme Maker</span>
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature4}
                  alt="Industrial Challenge"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfive">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                <img
                  src={feature5}
                  alt="Visual Vibes"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Visual Vibes</span>
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature5}
                  alt="Visual Vibes"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingsix">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                <img
                  src={feature6}
                  alt="3D View"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">3D View</span>
              </button>
            </h2>
            <div
              id="collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="headingsix"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature6}
                  alt="3D View"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingseven">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseseven"
                aria-expanded="false"
                aria-controls="collapseseven"
              >
                <img
                  src={feature7}
                  alt="Sketch Hub"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Sketch Hub</span>
              </button>
            </h2>
            <div
              id="collapseseven"
              className="accordion-collapse collapse"
              aria-labelledby="headingseven"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature7}
                  alt="Sketch Hub"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingeight">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseeight"
                aria-expanded="false"
                aria-controls="collapseeight"
              >
                <img
                  src={feature3}
                  alt="Mind2Matter"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Mind2Matter</span>
              </button>
            </h2>
            <div
              id="collapseeight"
              className="accordion-collapse collapse"
              aria-labelledby="headingeight"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature8}
                  alt="Mind2Matter"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingnine">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsenine"
                aria-expanded="false"
                aria-controls="collapsenine"
              >
                <img
                  src={feature9}
                  alt="Idea Box"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Idea Box</span>
              </button>
            </h2>
            <div
              id="collapsenine"
              className="accordion-collapse collapse"
              aria-labelledby="headingnine"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature9}
                  alt="Idea Box"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingten">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseten"
                aria-expanded="false"
                aria-controls="collapseten"
              >
                <img
                  src={feature10}
                  alt="Fun factory"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Fun Factory</span>
              </button>
            </h2>
            <div
              id="collapseten"
              className="accordion-collapse collapse"
              aria-labelledby="headingten"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature10}
                  alt="Fun factory"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingeleven">
              <button
                className="accordion-button collapsed d-flex align-items-center "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseeleven"
                aria-expanded="false"
                aria-controls="collapseeleven"
              >
                <img
                  src={feature11}
                  alt="Submit Tasks"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="ms-3">Submit Tasks</span>
              </button>
            </h2>
            <div
              id="collapseeleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingeleven"
              data-bs-parent="#upcomingFeaturesAccordion"
            >
              <div className="accordion-body">
                <img
                  src={feature11}
                  alt="Submit Tasks"
                  className="img-fluid rounded mb-2"
                  style={{ marginLeft: "5px" }}
                />
                <ul className="list-unstyled px-1">
                  <li className="text-muted small lh-lg">
                    • UG & PG Program Database
                  </li>
                  <li className="text-muted small lh-lg">
                    • Specialized Career Paths
                  </li>
                  <li className="text-muted small lh-lg">
                    • College Comparison Tools
                  </li>
                  <li className="text-muted small lh-lg">
                    • Salary Scope & Expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeatures;
