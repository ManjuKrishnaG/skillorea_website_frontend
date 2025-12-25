import "../../../assets/styles/scoreboard.css";
import scoreboardImg from "../../../assets/images/scoreboardrankings.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import whatisscoreboard from "../../../assets/images/scoreboardimg.png";
import whyscoreboard from "../../../assets/images/whyscoreboard.png";
import FAQSection from "../../Home/Faq";

const Scoreboard = () => {
  return (
    <>
      <section
        className="scoreboardfeature-section"
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={scoreboardImg}
                alt="scoreboard"
                className="img-fluid top-image"
              />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Active fun, expert guidance, and a lifetime wellness
              </h2>
              <p>
                Skillorea ensures your child&apos;s wellness. we build balanced
                and successful futures, through games and activities.
              </p>
              <p>Let us start wellness together, with expert guidance.</p>
              <img
                src={bookNowImage}
                alt="Book Now"
                className="img-button"
                // onClick={handleClick}
              />
            </div>

            {/* Right Side Image (Hidden on Small Screens) */}
            <div className="col-lg-6 col-md-12 col-10 text-center d-none d-md-block">
              <img
                src={scoreboardImg}
                alt="scoreboard"
                className="img-fluid scoreboard-right-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="what-is-parent py-5">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="text-center fw-bold mb-2">
              <span style={{ color: "#20CB01" }}>WHAT IS</span>{" "}
              <span style={{ color: "#070759" }}>SCOREBOARD & RANKINGS</span>
            </h5>
            {/* Left Side: Grouped Image */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
              <img
                src={whatisscoreboard}
                alt="parentsportal"
                className="scoreboardgrouped img-fluid rounded"
              />
            </div>

            {/* Right Side: Text */}
            <div className="col-lg-6 col-md-12">
              {/* <h5 className="section-subtitle mb-4">
                            <span className="text-success fw-bold">WHAT IS </span>
                            <span className="text-primary fw-bold">ONLINE TUITION</span>
                          </h5> */}

              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
                ullamcorper leo pharetra tellus sapien pellentesque lectus. Sed
                sem tortor nibh sapien blandit. Sit dolor maecenas volutpat
                fermentum blandit porttitor turpis. Ullamcorper urna vitae neque
                porta nec facilisis vitae fermentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
                ullamcorper leo pharetra tellus sapien pellentesque lectus. Sed
                sem tortor nibh sapien blandit. Sit dolor maecenas volutpat
                fermentum blandit porttitor turpis. Ullamcorper urna vitae neque
                porta nec facilisis vitae fermentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
                ullamcorper leo pharetra tellus sapien pellentesque lectus. Sed
                sem tortor nibh sapien blandit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scoreboard-grid py-5">
  <div className="text-center mb-5">
    <h5 className="fw-bold mb-2">
      <span style={{ color: "#20CB01" }}>WHY</span>{" "}
      <span style={{ color: "#070759" }}>SCOREBOARD & RANKINGS</span>
    </h5>
    <p className="text-muted">
      Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
      ullamcorper leo pharetra tellus <br className="d-none d-md-block" />
      sapien pellentesque lectus
    </p>
  </div>
  <div className="container">
    <div className="row">
      {/* Left Image */}
      <div className="col-lg-6 mb-4 mb-lg-0 text-center">
        <img
          src={whyscoreboard}
          alt="Scoreboard"
          className="img-fluid rounded"
          style={{
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </div>

      {/* Right Grid of Cards */}
      <div className="col-lg-6">
        <div className="row g-3">
          {[
            {
              title: "Performance Tracking",
              desc: "Get real-time insights on academic and co-curricular progress.",
            },
            {
              title: "Leaderboard Motivation",
              desc: "Foster healthy competition through visible rankings.",
            },
            {
              title: "Goal-Based Rewards",
              desc: "Set goals and celebrate achievements to boost morale.",
            },
            {
              title: "Transparent Evaluation",
              desc: "Parents and students can track criteria-based scoring.",
            },
            {
              title: "Personalized Growth",
              desc: "Identify strengths and work on gaps through data.",
            },
            {
              title: "Gamified Learning",
              desc: "Engage students with game-like scoreboards and badges.",
            },
          ].map((card, idx) => (
            <div className="col-6" key={idx}>
              <div className="score-card h-100">
                <h6 className="fw-bold mb-1">{card.title}</h6>
                <p className="mb-0 small">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="scoreboard-features py-5">
        <div className="text-center mb-4">
          <h5 className="fw-bold mb-2">
            <span style={{ color: "#20CB01" }}>SCOREBOARD & RANKINGS</span>{" "}
            <span style={{ color: "#070759" }}>FEATURES</span>
          </h5>
          <p className="text-muted">
            ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper
            leo pharetra tellus <br className="d-none d-md-block" />
            pellentesque lectus
          </p>
        </div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            {[
              {
                number: "01",
                heading: "Heading-lorem ipsum dolar",
                desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
              },
              {
                number: "02",
                heading: "Heading-lorem ipsum dolar",
                desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
              },
              {
                number: "03",
                heading: "DevOps Methodology Process",
                desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
              },
              {
                number: "04",
                heading: "Heading-lorem ipsum dolar",
                desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
              },
            ].map((item, idx) => (
              <div className="col-12 col-sm-6 col-lg-3" key={idx}>
                <div className="score-card">
                  <h4 className="fw-bold mb-2">{item.number}</h4>
                  <h6 className="fw-bold mb-2">{item.heading}</h6>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
};

export default Scoreboard;
