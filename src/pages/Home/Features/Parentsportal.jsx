import "../../../assets/styles/parentsportal.css";
import parentsImg from "../../../assets/images/parents-portal.png";
import tuitionbg from "../../../assets/images/onlinetuitionbanner.png";
import bookNowImage from "../../../assets/images/wellnessbooknoworangebtn.png";
import whatisparent from "../../../assets/images/whatsparentportal.png";
import parentportalfeatures from "../../../assets/images/parentportalfeatures.png";
import FAQSection from "../../Home/Faq";

const Parentsportal = () => {
  return (
    <>
      <section
        className="parentsfeature-section"
        style={{ backgroundImage: `url(${tuitionbg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={parentsImg}
                alt="parents"
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
                src={parentsImg}
                alt="parents"
                className="img-fluid parents-right-image"
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
              <span style={{ color: "#070759" }}>PARENTS PORTAL</span>
            </h5>
            {/* Left Side: Grouped Image */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
              <img
                src={whatisparent}
                alt="parentsportal"
                className="parentgrouped img-fluid rounded"
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

      <section className="why-parents-portal py-5">
        <div className="text-center mb-4">
          <h5 className="fw-bold mb-2">
            <span style={{ color: "#20CB01" }}>WHY</span>{" "}
            <span style={{ color: "#070759" }}>PARENT’S PORTAL</span>
          </h5>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet consectetur. Vestibulum nisl ipsum
            ullamcorper leo pharetra tellus <br className="d-none d-md-block" />
            sapien pellentesque lectus
          </p>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[...Array(5)].map((_, idx) => (
              <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                <div
                  className="card h-100 shadow-sm border-0 p-3 text-center custom-shadow"
                  // style={{
                  //   boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                  //   borderRadius: "12px",
                  // }}
                >
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#070759",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="bi bi-gift text-white fs-5"></i>
                    {/* Replace with your own icon or image if needed */}
                  </div>
                  <h6 className="fw-bold">Heading</h6>
                  <p className="text-muted small mb-0">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum nisl
                    ipsum
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="parent-portal-features py-5">
        <h5 className="text-center fw-bold mb-4">
          <span style={{ color: "#20CB01" }}>PARENT&apos;S PORTAL</span>{" "}
          <span style={{ color: "#070759" }}>FEATURES</span>
        </h5>
        <p className="text-center text-muted mb-5">
          ipsum dolor sit amet consectetur. Vestibulum nisl ipsum ullamcorper
          leo pharetra tellus <br className="d-none d-md-block" />
          pellentesque lectus
        </p>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Image */}
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src={parentportalfeatures}
                alt="Parent Portal Feature"
                className="img-fluid"
                style={{ borderRadius: "12px", maxWidth: "90%" }}
              />
            </div>

            {/* Right Side Features List */}
            <div className="col-lg-6">
              {[
                "To become a trusted and reputable world-class national trading company. Providing the best services and products in every class.",
                "Our platform has been verified for user safety and comfort in using goods/building. All the data is 100% safe.",
                "All data management, finance and payment of this application have been guaranteed. So you don’t need to worry.",
                "All quality management, finance and payment of this application have been guaranteed. So you don’t need to worry.",
              ].map((desc, idx) => (
                <div className="d-flex mb-4" key={idx}>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "55px",
                      height: "40px",
                      backgroundColor: "#070759",
                    }}
                  >
                    <i className="bi bi-patch-check-fill text-white"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold">Heading</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
};

export default Parentsportal;
